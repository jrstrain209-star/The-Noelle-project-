"use client";

import { useState } from "react";

type Submission = {
  id: string;
  name: string;
  relationship: string;
  message: string;
  photo_url?: string;
  created_at: string;
};

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadSubmissions() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/memorials", {
        headers: {
          "x-admin-password": password,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to load submissions");
      }

      setSubmissions(data.submissions || []);
      setAuthorized(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unknown error"
      );
    } finally {
      setLoading(false);
    }
  }

  async function approveSubmission(id: string) {
    await fetch(`/api/admin/memorials/${id}`, {
      method: "PATCH",
      headers: {
        "x-admin-password": password,
      },
    });

    loadSubmissions();
  }

  async function deleteSubmission(id: string) {
    await fetch(`/api/admin/memorials/${id}`, {
      method: "DELETE",
      headers: {
        "x-admin-password": password,
      },
    });

    loadSubmissions();
  }

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Noelle’s Light Admin
        </h1>

        {!authorized && (
          <div className="space-y-4">
            <input
              type="password"
              placeholder="Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded bg-zinc-900 border border-zinc-700"
            />

            <button
              onClick={loadSubmissions}
              className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded"
            >
              Login
            </button>

            {error && (
              <p className="text-red-400">{error}</p>
            )}
          </div>
        )}

        {authorized && (
          <div className="space-y-6">
            {submissions.length === 0 && (
              <p>No pending submissions.</p>
            )}

            {submissions.map((submission) => (
              <div
                key={submission.id}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-5"
              >
                <h2 className="text-2xl font-semibold">
                  {submission.name}
                </h2>

                <p className="text-zinc-400 mb-3">
                  {submission.relationship}
                </p>

                <p className="whitespace-pre-wrap mb-4">
                  {submission.message}
                </p>

                {submission.photo_url && (
                  <img
                    src={submission.photo_url}
                    alt={submission.name}
                    className="rounded-lg max-h-96 mb-4"
                  />
                )}

                <div className="flex gap-4">
                  <button
                    onClick={() =>
                      approveSubmission(submission.id)
                    }
                    className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() =>
                      deleteSubmission(submission.id)
                    }
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {loading && (
          <p className="mt-6 text-zinc-400">
            Loading...
          </p>
        )}
      </div>
    </main>
  );
}
