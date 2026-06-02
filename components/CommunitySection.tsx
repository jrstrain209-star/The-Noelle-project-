"use client";
import { FormEvent, useEffect, useState } from "react"; import { supabase } from "@/lib/supabaseClient";
type CommunityPost = { id: string; display_name: string | null; category: string; message: string; approved: boolean; };
const categories = [ "Grief", "Loneliness", "Mental Health", "Addiction", "Family", "General", ];
export default function CommunitySection() { const [posts, setPosts] = useState<CommunityPost[]>([]); const [displayName, setDisplayName] = useState(""); const [category, setCategory] = useState("General"); const [message, setMessage] = useState(""); const [submitted, setSubmitted] = useState(false); const [loading, setLoading] = useState(false);
async function loadPosts() { const { data } = await supabase .from("community_posts") .select("*") .eq("approved", true) .order("created_at", { ascending: false });
setPosts(data || []);
}
useEffect(() => { loadPosts(); }, []);
async function handleSubmit(event: FormEvent) { event.preventDefault();
if (!message.trim()) return;

setLoading(true);

const { error } = await supabase.from("community_posts").insert({
  display_name: displayName || "Anonymous",
  category,
  message,
  approved: false,
});

setLoading(false);

if (!error) {
  setDisplayName("");
  setCategory("General");
  setMessage("");
  setSubmitted(true);
}
}
return (   
<p className="mt-3 text-white/70">
      Share your thoughts, grief, struggles, victories, or encouragement.
      Posts are reviewed before appearing publicly.
    </p>

    {submitted ? (
      <div className="mt-8 rounded-2xl border border-green-500/20 bg-green-500/10 p-6 text-center">
        <h3 className="text-xl font-bold text-green-400">
          Thank you for sharing.
        </h3>

        <p className="mt-2 text-white/70">
          Your post has been submitted and will be reviewed before it
          appears publicly.
        </p>
      </div>
    ) : (
      <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
        <input
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="Nickname (optional)"
          className="rounded-2xl bg-black/20 p-4 text-white"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-2xl bg-black/20 p-4 text-white"
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What's on your mind?"
          className="min-h-[140px] rounded-2xl bg-black/20 p-4 text-white"
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-pink-200 px-8 py-3 font-semibold text-slate-950 disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Post Anonymously"}
        </button>
      </form>
    )}
  </div>

  <div className="mt-10 grid gap-5">
    {posts.map((post) => (
      <div
        key={post.id}
        className="rounded-2xl border border-white/10 bg-white/5 p-5"
      >
        <div className="mb-2 text-sm text-pink-200">
          {post.display_name} • {post.category}
        </div>

        <p className="whitespace-pre-wrap text-white/90">
          {post.message}
        </p>
      </div>
    ))}
  </div>
</section>
); }
