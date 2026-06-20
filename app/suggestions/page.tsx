import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function AdminSuggestionsPage() {
  const { data: suggestions, error } = await supabase
    .from("suggestions")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen bg-[#02030f] px-5 py-10 text-white">
      <section className="mx-auto max-w-5xl">
        <a href="/admin" className="text-sm text-pink-200 underline">
          ← Back to Admin
        </a>

        <h1 className="mt-8 text-4xl font-bold">Suggestions & Comments</h1>

        <p className="mt-3 text-white/70">
          Feedback submitted from the suggestions box.
        </p>

        {error && (
          <p className="mt-6 rounded-xl bg-red-500/20 p-4 text-red-100">
            {error.message}
          </p>
        )}

        <div className="mt-8 space-y-5">
          {suggestions?.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-5"
            >
              <div className="flex flex-wrap justify-between gap-3">
                <div>
                  <p className="font-bold">
                    {item.name || "Anonymous"}
                  </p>

                  {item.email && (
                    <p className="text-sm text-pink-200">{item.email}</p>
                  )}
                </div>

                <div className="text-right text-sm text-white/50">
                  <p>{item.category}</p>
                  <p>{new Date(item.created_at).toLocaleString()}</p>
                </div>
              </div>

              <p className="mt-4 leading-7 text-white/85">
                {item.message}
              </p>

              <p className="mt-4 text-sm">
                Status:{" "}
                <span className={item.reviewed ? "text-green-300" : "text-yellow-300"}>
                  {item.reviewed ? "Reviewed" : "New"}
                </span>
              </p>
            </div>
          ))}

          {suggestions?.length === 0 && (
            <p className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 text-white/70">
              No suggestions yet.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
