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
  name?: string | null;
  relationship?: string | null;
  message: string;
  photo_url?: string | null;
  permission_to_post?: boolean;
}) {
  const { error } = await supabase.from("memorial_submissions").insert({
    name: submission.name,
    relationship: submission.relationship,
    message: submission.message,
    photo_url: submission.photo_url,
    permission_to_post: submission.permission_to_post ?? false,
    approved: false,
  });

  if (error) throw error;

  return true;
}
