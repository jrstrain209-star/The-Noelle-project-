import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

function isAuthorized(request: NextRequest) {
  const password = request.headers.get("x-admin-password");

  return (
    process.env.ADMIN_PASSWORD &&
    password === process.env.ADMIN_PASSWORD
  );
}

function getAdminSupabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const supabase = getAdminSupabase();

    const { data, error } = await supabase
      .from("memorial_submissions")
      .select("*")
      .eq("approved", false)
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      submissions: data || [],
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to load submissions",
      },
      { status: 500 }
    );
  }
}
