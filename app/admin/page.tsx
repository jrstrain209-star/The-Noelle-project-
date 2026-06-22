"use client";

import { useEffect, useState } from "react";

type Story = {
  id: string;
  name: string | null;
  story: string;
  is_anonymous: boolean;
  approved: boolean;
};

type Memorial = {
  id: string;
  name: string | null;
  relationship: string | null;
  message: string;
  photo_url: string | null;
  approved: boolean;
};

type CommunityPost = {
  id: string;
  display_name: string | null;
  category: string;
  message: string;
  approved: boolean;
};

type GardenFlower = {
  id: string;
  name: string | null;
  message: string;
  flower_type: string;
  dedication: string | null;
  approved: boolean;
};

type Suggestion = {
  id: string;
  name: string | null;
  email: string | null;
  category: string | null;
  message: string;
  reviewed: boolean;
  created_at: string;
};

const flowerEmoji: Record<string, string> = {
  rose: "🌹",
  sunflower: "🌻",
  daisy: "🌼",
  cherry: "🌸",
  lavender: "🪻",
};

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [stories, setStories] = useState<Story[]>([]);
  const [memorials, setMemorials] = useState<Memorial[]>([]);
  const [communityPosts, setCommunityPosts] = useState<CommunityPost[]>([]);
  const [gardenFlowers, setGardenFlowers] = useState<GardenFlower[]>([]);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState(false);

  async function loadSubmissions() {
    setLoading(true);

    const res = await fetch("/api/admin/submissions");
    const data = await res.json();

    setStories(data.stories || []);
    setMemorials(data.memorials || []);
    setCommunityPosts(data.communityPosts || []);
    setGardenFlowers(data.gardenFlowers || []);
    setSuggestions(data.suggestions || []);
    setLoading(false);
  }

  async function approveSubmission(
    id: string,
    type: "story" | "memorial" | "community" | "flower" | "suggestion"
  ) {
    await fetch("/api/admin/submissions", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, type }),
    });

    loadSubmissions();
  }

  async function denySubmission(
    id: string,
    type: "story" | "memorial" | "community" | "flower" | "suggestion"
  ) {
    const confirmed = confirm("Deny or archive this submission?");
    if (!confirmed) return;

    await fetch("/api/admin/submissions", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, type }),
    });

    loadSubmissions();
  }

  useEffect(() => {
    if (authorized) loadSubmissions();
  }, [authorized]);

  function handleLogin() {
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setAuthorized(true);
    } else {
      alert("Wrong password");
    }
  }

  if (!authorized) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6 text-white">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8">
          <h1 className="mb-6 text-center text-3xl font-bold">Admin Login</h1>

          <input
            type="password"
            placeholder="Admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3"
          />

          <button
            onClick={handleLogin}
            className="mt-4 w-full rounded-full bg-pink-300 py-3 font-bold text-slate-950"
          >
            Login
          </button>
        </div>
      </main>
    );
  }

  const totalPending =
    stories.length +
    memorials.length +
    communityPosts.length +
    gardenFlowers.length +
    suggestions.length;

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-200/80">
              Noelle&apos;s Light
            </p>
            <h1 className="mt-2 text-4xl font-bold">Pending Review Queue</h1>
          </div>

          <button
            onClick={loadSubmissions}
            className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold hover:bg-white/15"
          >
            {loading ? "Refreshing..." : "Refresh"}
          </button>
        </div>

        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-5">
          <StatCard label="Stories Pending" value={stories.length} />
          <StatCard label="Memorials Pending" value={memorials.length} />
          <StatCard label="Posts Pending" value={communityPosts.length} />
          <StatCard label="Flowers Pending" value={gardenFlowers.length} />
          <StatCard label="Suggestions" value={suggestions.length} />
        </div>

        {totalPending === 0 && (
          <div className="rounded-3xl border border-green-500/30 bg-green-500/10 p-8 text-center">
            <p className="text-lg font-semibold text-green-300">
              ✓ All submissions reviewed! Queue is empty.
            </p>
          </div>
        )}

        {suggestions.length > 0 && (
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Suggestions & Comments</h2>

            <div className="grid gap-6">
              {suggestions.map((suggestion) => (
                <div
                  key={suggestion.id}
                  className="rounded-3xl border border-amber-200/20 bg-amber-200/10 p-6"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">
                        {suggestion.name || "Anonymous"}
                      </h3>

                      {suggestion.email && (
                        <p className="mt-1 text-sm text-pink-200">
                          {suggestion.email}
                        </p>
                      )}

                      <p className="mt-1 text-sm text-white/50">
                        Category: {suggestion.category || "general"}
                      </p>
                    </div>

                    <p className="text-sm text-white/40">
                      {suggestion.created_at
                        ? new Date(suggestion.created_at).toLocaleString()
                        : ""}
                    </p>
                  </div>

                  <p className="mt-4 whitespace-pre-wrap text-white/80">
                    {suggestion.message}
                  </p>

                  <QueueActions
                    approveLabel="Mark Reviewed"
                    denyLabel="Archive"
                    onApprove={() =>
                      approveSubmission(suggestion.id, "suggestion")
                    }
                    onDeny={() => denySubmission(suggestion.id, "suggestion")}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {gardenFlowers.length > 0 && (
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Garden Flowers</h2>

            <div className="grid gap-6">
              {gardenFlowers.map((flower) => (
                <div
                  key={flower.id}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <p className="text-5xl">
                    {flowerEmoji[flower.flower_type] || "🌼"}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">
                    {flower.dedication || "For Noelle"}
                  </h3>

                  <p className="mt-1 text-sm text-white/50">Pending review</p>

                  <p className="mt-4 whitespace-pre-wrap text-white/80">
                    {flower.message}
                  </p>

                  <p className="mt-4 text-sm text-purple-200">
                    — {flower.name || "Anonymous"}
                  </p>

                  <QueueActions
                    onApprove={() => approveSubmission(flower.id, "flower")}
                    onDeny={() => denySubmission(flower.id, "flower")}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {stories.length > 0 && (
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Story Submissions</h2>

            <div className="grid gap-6">
              {stories.map((story) => (
                <div
                  key={story.id}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-2xl font-bold">
                    {story.is_anonymous ? "Anonymous" : story.name || "Anonymous"}
                  </h3>

                  <p className="mt-1 text-sm text-white/50">Pending review</p>

                  <p className="mt-4 whitespace-pre-wrap text-white/80">
                    {story.story}
                  </p>

                  <QueueActions
                    onApprove={() => approveSubmission(story.id, "story")}
                    onDeny={() => denySubmission(story.id, "story")}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {memorials.length > 0 && (
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Memorial Submissions</h2>

            <div className="grid gap-6">
              {memorials.map((submission) => (
                <div
                  key={submission.id}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  {submission.photo_url && (
                    <img
                      src={submission.photo_url}
                      alt={submission.name || "Memorial photo"}
                      className="mb-4 max-h-96 w-full rounded-2xl object-cover"
                    />
                  )}

                  <h3 className="text-2xl font-bold">
                    {submission.name || "Anonymous"}
                  </h3>

                  <p className="mt-1 text-white/60">
                    {submission.relationship || "No relationship listed"}
                  </p>

                  <p className="mt-4 whitespace-pre-wrap text-white/80">
                    {submission.message}
                  </p>

                  <QueueActions
                    onApprove={() =>
                      approveSubmission(submission.id, "memorial")
                    }
                    onDeny={() => denySubmission(submission.id, "memorial")}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {communityPosts.length > 0 && (
          <section>
            <h2 className="mb-4 text-2xl font-bold">Community Posts</h2>

            <div className="grid gap-6">
              {communityPosts.map((post) => (
                <div
                  key={post.id}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-2xl font-bold">
                    {post.display_name || "Anonymous"}
                  </h3>

                  <p className="mt-1 text-white/60">{post.category}</p>

                  <p className="mt-4 whitespace-pre-wrap text-white/80">
                    {post.message}
                  </p>

                  <QueueActions
                    onApprove={() => approveSubmission(post.id, "community")}
                    onDeny={() => denySubmission(post.id, "community")}
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm text-white/60">{label}</p>
      <p className="mt-1 text-3xl font-bold">{value}</p>
    </div>
  );
}

function QueueActions({
  onApprove,
  onDeny,
  approveLabel = "Approve",
  denyLabel = "Deny",
}: {
  onApprove: () => void;
  onDeny: () => void;
  approveLabel?: string;
  denyLabel?: string;
}) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <button
        onClick={onApprove}
        className="rounded-full bg-green-400 px-6 py-2 font-bold text-slate-950"
      >
        {approveLabel}
      </button>

      <button
        onClick={onDeny}
        className="rounded-full bg-rose-500 px-6 py-2 font-bold text-white"
      >
        {denyLabel}
      </button>
    </div>
  );
}
