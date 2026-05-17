import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export interface MemorialSubmission {
  id: string;
  name: string | null;
  relationship: string | null;
  message: string;
  photo_url: string | null;
  permission_to_post: boolean;
  approved: boolean;
  created_at: string;
  updated_at: string;
}

export async function uploadMemorialPhoto(
  file: File,
  submissionId: string
): Promise<string | null> {
  if (!supabase) {
    throw new Error("Supabase is not configured. Check Vercel environment variables.");
  }

  const fileExt = file.name.split(".").pop();
  const fileName = `${submissionId}.${fileExt}`;

  const { error } = await supabase.storage
    .from("memorial-photos")
    .upload(fileName, file, {
      cacheControl: "3600",
      upsert: true,
    });

  if (error) {
    throw new Error(`Photo upload failed: ${error.message}`);
  }

  const { data } = supabase.storage
    .from("memorial-photos")
    .getPublicUrl(fileName);

  return data.publicUrl;
}

export async function submitMemorial(
  submission: Omit<MemorialSubmission, "id" | "created_at" | "updated_at">
): Promise<MemorialSubmission> {
  if (!supabase) {
    throw new Error("Supabase is not configured. Check Vercel environment variables.");
  }

  const { data, error } = await supabase
    .from("memorial_submissions")
    .insert([submission])
    .select()
    .single();

  if (error) {
    throw new Error(`Submission failed: ${error.message}`);
  }

  return data as MemorialSubmission;
}

export async function getApprovedMemorials(): Promise<MemorialSubmission[]> {
  if (!supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from("memorial_submissions")
    .select("*")
    .eq("approved", true)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Fetch failed: ${error.message}`);
  }

  return data as MemorialSubmission[];
}
