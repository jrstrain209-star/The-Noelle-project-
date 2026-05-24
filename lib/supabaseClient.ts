import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function uploadMemorialPhoto(file: File) {
  const fileName = `${Date.now()}-${file.name}`;

  const { data, error } = await supabase.storage
    .from("memorial-photos")
    .upload(fileName, file);

  if (error) throw error;

  const { data: publicUrl } = supabase.storage
    .from("memorial-photos")
    .getPublicUrl(data.path);

  return publicUrl.publicUrl;
}

export async function submitMemorial(submission: {
  loved_one_name: string;
  story: string;
  submitter_name?: string;
  photo_url?: string;
}) {
  const { error } = await supabase.from("memorial_submissions").insert({
    loved_one_name: submission.loved_one_name,
    story: submission.story,
    submitter_name: submission.submitter_name,
    photo_url: submission.photo_url,
    approved: false,
  });

  if (error) throw error;
}
