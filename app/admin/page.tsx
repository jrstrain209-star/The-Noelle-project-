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
  const [loading, setLoading] = useState(false);

  async function loadSubmissions() {
    setLoading(true);

    const res = await fetch("/api/admin/submissions");
    const data = await res.json();

    setStories(data.stories || []);
    setMemorials(data.memorials || []);
    setCommunityPosts(data.communityPosts || []);
    setGardenFlowers(data.gardenFlowers || []);
    setLoading(false);
  }

  async function updateApproval(
    id: string,
    type: "story" | "memorial" | "community" | "flower",
    approved: boolean
  ) {
    await fetch("/api/admin/submissions", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, type, approved }),
    });

    loadSubmissions();
  }

  async function deleteSubmission(
    id: string,
    type: "story" | "memorial" | "community" | "flower"
  ) {
    const confirmed = confirm("Delete this submission?");
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

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-200/80">
              Noelle&apos;s Light
            </p>
            <h1 className="mt-2 text-4xl font-bold">Admin Panel</h1>
          </div>

          <button
            onClick={loadSubmissions}
            className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold hover:bg-white/15"
          >
            {loading ? "Refreshing..." : "Refresh"}
          </button>
        </div>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Garden Flowers</h2>

          {gardenFlowers.length === 0 && (
            <p className="text-white/60">No garden flowers yet.</p>
          )}

          <div className="grid gap-6">
            {gardenFlowers.map((flower) => (
              <div
                key={flower.id}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-5xl">
                      {flowerEmoji[flower.flower_type] || "🌼"}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold">
                      {flower.dedication || "For Noelle"}
                    </h3>

                    <p className="mt-1 text-sm text-white/50">
                      {flower.approved ? "Approved" : "Pending review"}
                    </p>
                  </div>

                  <StatusBadge approved={flower.approved} />
                </div>

                <p className="mt-4 whitespace-pre-wrap text-white/80">
                  {flower.message}
                </p>

                <p className="mt-4 text-sm text-purple-200">
                  — {flower.name || "Anonymous"}
                </p>

                <AdminActions
                  approved={flower.approved}
                  onApprove={() => updateApproval(flower.id, "flower", true)}
                  onUnapprove={() => updateApproval(flower.id, "flower", false)}
                  onDelete={() => deleteSubmission(flower.id, "flower")}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Leave the rest of your Story, Memorial, and Community sections below this exactly as they already are */}
      </div>
    </main>
  );
}
