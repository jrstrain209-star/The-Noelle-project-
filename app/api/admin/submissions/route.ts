import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_ROLE_KEY || ""
);

export async function GET() {
  return NextResponse.json({
    urlExists: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    serviceExists: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    urlLength: process.env.NEXT_PUBLIC_SUPABASE_URL?.length || 0,
    keyLength: process.env.SUPABASE_SERVICE_ROLE_KEY?.length || 0,
  });
}
