"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [submissions, setSubmissions] = useState<any[]>([]);

  async function loadSubmissions() {
    const res = await fetch("/api/admin/submissions");
    const data = await res.json();
    setSubmissions(Array.isArray(data) ? data : []);
  }

  async function approveSubmission(id: string) {
    await fetch("/api/admin/submissions", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, approved: true }),
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
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Admin Login</h1>

          <input
            type="password"
            placeholder="Admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3"
          />

          <button
            onClick={handleLogin}
            className="w-full mt-4 rounded-full bg-pink-300 text-slate-950 font-bold py-3"
          >
            Login
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <h1 className="text-4xl font-bold mb-8">Memorial Admin Panel</h1>

      {submissions.length === 0 && (
        <p className="text-white/60">No submissions found yet.</p>
      )}

      <div className="grid gap-6">
        {submissions.map((submission) => (
          <div
            key={submission.id}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            {submission.photo_url && (
              <img
                src={submission.photo_url}
                alt={submission.name || "Memorial photo"}
                className="w-full max-h-96 object-cover rounded-2xl mb-4"
              />
            )}

            <h2 className="text-2xl font-bold">
              {submission.name || "Anonymous"}
            </h2>

            <p className="text-white/60 mt-1">{submission.relationship}</p>

            <p className="mt-4 text-white/80">{submission.message}</p>

            <div className="mt-6">
              {!submission.approved ? (
                <button
                  onClick={() => approveSubmission(submission.id)}
                  className="rounded-full bg-green-400 text-slate-950 font-bold px-6 py-2"
                >
                  Approve
                </button>
              ) : (
                <span className="text-green-400 font-bold">Approved</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
