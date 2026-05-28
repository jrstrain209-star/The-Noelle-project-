import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  const { data: stories, error: storiesError } = await supabase
    .from("stories")
    .select("*")
    .order("created_at", { ascending: false });

  const { data: memorials, error: memorialsError } = await supabase
    .from("memorial_submissions")
    .select("*")
    .order("created_at", { ascending: false });

  if (storiesError || memorialsError) {
    return NextResponse.json(
      {
        error: storiesError?.message || memorialsError?.message,
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    stories: stories || [],
    memorials: memorials || [],
  });
}

export async function PATCH(request: Request) {
  const body = await request.json();
  const { id, type, approved } = body;

  const table =
    type === "story" ? "stories" : "memorial_submissions";

  const { error } = await supabase
    .from(table)
    .update({ approved })
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
