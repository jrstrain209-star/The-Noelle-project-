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
const result = await submitMemorial({
  name: formData.name || null,
  relationship: formData.relationship || null,
  message: formData.message,
  photo_url: photoUrl,
  permission_to_post: formData.permission_to_post,
});
