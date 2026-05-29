const { data: stories } = await supabase
  .from("stories")
  .select("*")
  .eq("approved", true)
  .order("created_at", { ascending: false });
<a
  href="/community"
  className="rounded-full bg-white/10 px-8 py-3 text-sm font-semibold text-white ring-1 ring-white/20"
>
  Read Community Stories
</a>
