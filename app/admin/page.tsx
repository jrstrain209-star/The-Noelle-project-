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

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [stories, setStories] = useState<Story[]>([]);
  const [memorials, setMemorials] = useState<Memorial[]>([]);
  const [communityPosts, setCommunityPosts] = useState<CommunityPost[]>([]);
  const [loading, setLoading] = useState(false);

  async function loadSubmissions() {
    setLoading(true);

    const res = await fetch("/api/admin/submissions");
    const data = await res.json();

    setStories(data.stories || []);
    setMemorials(data.memorials || []);
    setCommunityPosts(data.communityPosts || []);
    setLoading(false);
  }

  async function updateApproval(
    id: string,
    type: "story" | "memorial" | "community",
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
    type: "story" | "memorial" | "community"
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
          <h2 className="mb-4 text-2xl font-bold">Story Submissions</h2>

          {stories.length === 0 && (
            <p className="text-white/60">No story submissions yet.</p>
          )}

          <div className="grid gap-6">
            {stories.map((story) => (
              <div
                key={story.id}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">
                      {story.is_anonymous
                        ? "Anonymous"
                        : story.name || "Anonymous"}
                    </h3>

                    <p className="mt-1 text-sm text-white/50">
                      {story.approved ? "Approved" : "Pending review"}
                    </p>
                  </div>

                  <StatusBadge approved={story.approved} />
                </div>

                <p className="mt-4 whitespace-pre-wrap text-white/80">
                  {story.story}
                </p>

                <AdminActions
                  approved={story.approved}
                  onApprove={() => updateApproval(story.id, "story", true)}
                  onUnapprove={() => updateApproval(story.id, "story", false)}
                  onDelete={() => deleteSubmission(story.id, "story")}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Memorial Submissions</h2>

          {memorials.length === 0 && (
            <p className="text-white/60">No memorial submissions yet.</p>
          )}

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

                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">
                      {submission.name || "Anonymous"}
                    </h3>

                    <p className="mt-1 text-white/60">
                      {submission.relationship || "No relationship listed"}
                    </p>
                  </div>

                  <StatusBadge approved={submission.approved} />
                </div>

                <p className="mt-4 whitespace-pre-wrap text-white/80">
                  {submission.message}
                </p>

                <AdminActions
                  approved={submission.approved}
                  onApprove={() =>
                    updateApproval(submission.id, "memorial", true)
                  }
                  onUnapprove={() =>
                    updateApproval(submission.id, "memorial", false)
                  }
                  onDelete={() => deleteSubmission(submission.id, "memorial")}
                />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold">Community Posts</h2>

          {communityPosts.length === 0 && (
            <p className="text-white/60">No community posts yet.</p>
          )}

          <div className="grid gap-6">
            {communityPosts.map((post) => (
              <div
                key={post.id}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">
                      {post.display_name || "Anonymous"}
                    </h3>

                    <p className="mt-1 text-white/60">{post.category}</p>
                  </div>

                  <StatusBadge approved={post.approved} />
                </div>

                <p className="mt-4 whitespace-pre-wrap text-white/80">
                  {post.message}
                </p>

                <AdminActions
                  approved={post.approved}
                  onApprove={() => updateApproval(post.id, "community", true)}
                  onUnapprove={() =>
                    updateApproval(post.id, "community", false)
                  }
                  onDelete={() => deleteSubmission(post.id, "community")}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function StatusBadge({ approved }: { approved: boolean }) {
  return (
    <span
      className={
        approved
          ? "rounded-full bg-green-400/15 px-4 py-2 text-sm font-bold text-green-300"
          : "rounded-full bg-yellow-400/15 px-4 py-2 text-sm font-bold text-yellow-200"
      }
    >
      {approved ? "Approved" : "Pending"}
    </span>
  );
}

function AdminActions({
  approved,
  onApprove,
  onUnapprove,
  onDelete,
}: {
  approved: boolean;
  onApprove: () => void;
  onUnapprove: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {!approved ? (
        <button
          onClick={onApprove}
          className="rounded-full bg-green-400 px-6 py-2 font-bold text-slate-950"
        >
          Approve
        </button>
      ) : (
        <button
          onClick={onUnapprove}
          className="rounded-full bg-yellow-300 px-6 py-2 font-bold text-slate-950"
        >
          Unapprove
        </button>
      )}

      <button
        onClick={onDelete}
        className="rounded-full bg-rose-500 px-6 py-2 font-bold text-white"
      >
        Delete
      </button>
    </div>
  );
}
