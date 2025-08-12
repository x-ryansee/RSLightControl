import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

function Journal() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "journal"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      const rows = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setArticles(rows);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white px-8 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="relative mb-16 text-center">
          {/* subtle spotlight */}
          <div className="pointer-events-none absolute inset-0 mx-auto h-64 w-64 rounded-full blur-3xl opacity-20"
               style={{ background: "radial-gradient(closest-side, rgba(255,255,255,.12), transparent)" }} />
          <h1 className="relative text-5xl md:text-6xl font-light drop-shadow-md">
            Lighting Journal
          </h1>
          <p className="relative mt-4 text-gray-400 max-w-2xl mx-auto">
            Articles, case studies, and insights on smart lighting design, scene programming, and integration.
          </p>
        </div>

        {/* List */}
        {loading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-accent rounded-xl p-6 animate-pulse">
                <div className="h-40 w-full rounded-lg bg-white/5 mb-4" />
                <div className="h-5 w-3/4 bg-white/10 rounded mb-2" />
                <div className="h-4 w-1/2 bg-white/10 rounded" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((a) => (
              <article key={a.id}
                       className="group bg-accent rounded-xl p-6 shadow-lg hover:shadow-2xl transition">
                {a.coverImageUrl && (
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img src={a.coverImageUrl} alt={a.title}
                         className="h-44 w-full object-cover group-hover:scale-[1.02] transition" />
                  </div>
                )}
                <h2 className="text-xl font-semibold mb-2">{a.title}</h2>
                <p className="text-gray-300 line-clamp-3">{a.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                  <span>{a.createdAt?.toDate ? a.createdAt.toDate().toLocaleDateString() : ""}</span>
                  <a href={`/journal/${a.id}`} className="text-gray-300 hover:text-white underline">
                    Read more
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Journal;
