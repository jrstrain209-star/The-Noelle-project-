import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

function isAuthorized(request: NextRequest) {
  const password = request.headers.get("x-admin-password");
  return Boolean(
    process.env.ADMIN_PASSWORD &&
      password === process.env.ADMIN_PASSWORD
  );
}

function getAdminSupabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPAB
