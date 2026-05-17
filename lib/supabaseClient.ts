import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables. Photo uploads and submissions will not work.');
}

export const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

// Types for memorial submissions
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

// Upload photo to Supabase Storage
export async function uploadMemorialPhoto(
  file: File,
  submissionId: string
): Promise<string | null> {
  if (!supabase) {
    console.error('Supabase not configured');
    return null;
  }

  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${submissionId}.${fileExt}`;

    const { data, error } = await supabase.storage
      .from('memorial-photos')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: true,
      });

    if (error) {
      console.error('Photo upload error:', error);
      return null;
    }

    // Get public URL
    const { data: publicData } = supabase.storage
      .from('memorial-photos')
      .getPublicUrl(fileName);

    return publicData?.publicUrl || null;
  } catch (error) {
    console.error('Upload failed:', error);
    return null;
  }
}

// Submit memorial to database
export async function submitMemorial(
  submission: Omit<MemorialSubmission, 'id' | 'created_at' | 'updated_at'>
): Promise<MemorialSubmission | null> {
  if (!supabase) {
    console.error('Supabase not configured');
    return null;
  }

  try {
    const { data, error } = await supabase
      .from('memorial_submissions')
      .insert([submission])
      .select()
      .single();

    if (error) {
      console.error('Submission error:', error);
      return null;
    }

    return data as MemorialSubmission;
  } catch (error) {
    console.error('Submit failed:', error);
    return null;
  }
}

// Get approved memorials
export async function getApprovedMemorials(): Promise<MemorialSubmission[]> {
  if (!supabase) {
    console.error('Supabase not configured');
    return [];
  }

  try {
    const { data, error } = await supabase
      .from('memorial_submissions')
      .select('*')
      .eq('approved', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Fetch error:', error);
      return [];
    }

    return data as MemorialSubmission[];
  } catch (error) {
    console.error('Fetch failed:', error);
    return [];
  }
}
