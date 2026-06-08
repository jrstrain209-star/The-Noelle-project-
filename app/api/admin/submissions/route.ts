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
  flower: "garden_flowers",
} as const;

type SubmissionType = keyof typeof tables;

export async function GET() {
  const { data: stories, error: storiesError } = await supabase
    .from("stories")
    .select("*")
    .eq("moderation_status", "pending")
    .order("created_at", { ascending: false });

  const { data: memorials, error: memorialsError } = await supabase
    .from("memorial_submissions")
    .select("*")
    .eq("moderation_status", "pending")
    .order("created_at", { ascending: false });

  const { data: communityPosts, error: communityError } = await supabase
    .from("community_posts")
    .select("*")
    .eq("moderation_status", "pending")
    .order("created_at", { ascending: false });

  const { data: gardenFlowers, error: gardenFlowersError } = await supabase
    .from("garden_flowers")
    .select("*")
    .eq("moderation_status", "pending")
    .order("created_at", { ascending: false });

  const error =
    storiesError || memorialsError || communityError || gardenFlowersError;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    stories: stories || [],
    memorials: memorials || [],
    communityPosts: communityPosts || [],
    gardenFlowers: gardenFlowers || [],
  });
}

export async function PATCH(request: Request) {
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

  const { error } = await supabase
    .from(tables[type])
    .update({ approved: true, moderation_status: "approved" })
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

  // First, fetch the full row to archive it
  const { data: submission, error: fetchError } = await supabase
    .from(tables[type])
    .select("*")
    .eq("id", id)
    .single();

  if (fetchError) {
    return NextResponse.json({ error: fetchError.message }, { status: 500 });
  }

  // Copy the full row to moderation_archive with decision='denied'
  const { error: archiveError } = await supabase
    .from("moderation_archive")
    .insert({
      ...submission,
      decision: "denied",
    });

  if (archiveError) {
    return NextResponse.json({ error: archiveError.message }, { status: 500 });
  }

  // Update the original row instead of deleting it
  const { error: updateError } = await supabase
    .from(tables[type])
    .update({ approved: false, moderation_status: "denied" })
    .eq("id", id);

  if (updateError) {
    return NextResponse.json({ error: updateError.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
