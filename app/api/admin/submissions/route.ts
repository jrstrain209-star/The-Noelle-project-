import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_ROLE_KEY || ""
);

export async function GET() {
  const { data: stories, error: storiesError } = await supabase
    .from("stories")
    .select("*")
    .order("created_at", { ascending: false });

  if (storiesError) {
    return NextResponse.json(
      { error: storiesError.message },
      { status: 500 }
    );
  }

  return NextResponse.json({
    stories: stories || [],
  });
}
