import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_ROLE_KEY || ""
);

const tables = {
  story: "stories",
  memorial: "memorial_submissions",
  community: "community_posts",
} as const;

type SubmissionType = keyof typeof tables;

export async function GET() {
  const { data: stories, error: storiesError } = await supabase
    .from("stories")
    .select("*")
    .order("created_at", { ascending: false });

  const { data: memorials, error: memorialsError } = await supabase
    .from("memorial_submissions")
    .select("*")
    .order("created_at", { ascending: false });

  const { data: communityPosts, error: communityError } = await supabase
    .from("community_posts")
    .select("*")
    .order("created_at", { ascending: false });

  const error = storiesError || memorialsError || communityError;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    stories: stories || [],
    memorials: memorials || [],
    communityPosts: communityPosts || [],
  });
}

export async function PATCH(request: Request) {
  const body = await request.json();
  const { id, type, approved } = body as {
    id?: string;
    type?: SubmissionType;
    approved?: boolean;
  };

  if (!id || !type || !(type in tables)) {
    return NextResponse.json(
      { error: "Missing or invalid id/type." },
      { status: 400 }
    );
  }

  const { error } = await supabase
    .from(tables[type])
    .update({ approved: Boolean(approved) })
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

export async function DELETE(request: Request) {
  const body = await request.json();
  const { id, type } = body as {
    id?: string;
    type?: SubmissionType;
  };

  if (!id || !type || !(type in tables)) {
    return NextResponse.json(
      { error: "Missing or invalid id/type." },
      { status: 400 }
    );
  }

  const { error } = await supabase.from(tables[type]).delete().eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
