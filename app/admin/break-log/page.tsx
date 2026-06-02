"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function BreakLogAdminPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const adminPassword = "change-this-password";

  async function handleSubmit(e: any) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const { error } = await supabase.from("break_logs").insert({
      work_date: form.get("work_date"),
      start_time: form.get("start_time"),
      end_time: form.get("end_time"),
      took_lunch: form.get("took_lunch") === "yes",
      lunch_before_5th_hour: form.get("lunch_before_5th_hour") === "yes",
      worked_during_lunch: form.get("worked_during_lunch") === "yes",
      got_rest_breaks: form.get("got_rest_breaks"),
      missed_lunch_reason: form.get("missed_lunch_reason"),
      asked_to_sign: form.get("asked_to_sign") === "yes",
      notes: form.get("notes"),
    });

    if (error) {
      setMessage("Error saving log.");
    } else {
      setMessage("Saved.");
      e.currentTarget.reset();
    }
  }

  if (!unlocked) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6 bg-slate-950 text-white">
        <div className="max-w-md w-full bg-slate-900 p-6 rounded-2xl">
          <h1 className="text-2xl font-bold mb-4">Admin Access</h1>
          <input
            className="w-full p-3 rounded text-black"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="mt-4 w-full bg-white text-black p-3 rounded font-bold"
            onClick={() => setUnlocked(password === adminPassword)}
          >
            Enter
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-6 bg-slate-950 text-white">
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-slate-900 p-6 rounded-2xl space-y-4">
        <h1 className="text-2xl font-bold">Daily Break Log</h1>

        <input name="work_date" type="date" required className="w-full p-3 rounded text-black" />
        <input name="start_time" placeholder="Start time" className="w-full p-3 rounded text-black" />
        <input name="end_time" placeholder="End time" className="w-full p-3 rounded text-black" />

        <label>Did you take a full 30-minute lunch?</label>
        <select name="took_lunch" className="w-full p-3 rounded text-black">
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>

        <label>Was lunch before the 5th hour?</label>
        <select name="lunch_before_5th_hour" className="w-full p-3 rounded text-black">
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>

        <label>Did you work during lunch?</label>
        <select name="worked_during_lunch" className="w-full p-3 rounded text-black">
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>

        <input name="got_rest_breaks" placeholder="Rest breaks? Yes / No / Not sure" className="w-full p-3 rounded text-black" />

        <textarea
          name="missed_lunch_reason"
          placeholder="Why was lunch missed?"
          className="w-full p-3 rounded text-black"
        />

        <label>Were you asked to sign the acknowledgment?</label>
        <select name="asked_to_sign" className="w-full p-3 rounded text-black">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <textarea name="notes" placeholder="Notes" className="w-full p-3 rounded text-black" />

        <button className="w-full bg-white text-black p-3 rounded font-bold">
          Save Log
        </button>

        {message && <p>{message}</p>}
      </form>
    </main>
  );
}
