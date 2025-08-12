// src/pages/Article.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    (async () => {
      const snap = await getDoc(doc(db, "journal", id));
      setArticle(snap.exists() ? { id: snap.id, ...snap.data() } : null);
    })();
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen bg-dark text-white px-8 py-20">
        <div className="max-w-3xl mx-auto text-gray-400">Loading…</div>
      </div>
    );
  }

  const date =
    article.createdAt?.toDate?.() ?
      article.createdAt.toDate().toLocaleDateString() : "";

  return (
    <div className="min-h-screen bg-dark text-white px-8 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light drop-shadow-md">{article.title}</h1>
        {date && <p className="mt-3 text-gray-500 text-sm">{date}</p>}

        {article.coverImageUrl && (
          <img
            src={article.coverImageUrl}
            alt={article.title}
            className="mt-8 w-full rounded-xl object-cover"
          />
        )}

        {/* Markdown-rendered body with elegant typography */}
        <div className="prose prose-invert prose-lg md:prose-xl max-w-none mt-8
                        prose-headings:font-light prose-h2:text-2xl md:prose-h2:text-3xl
                        prose-strong:text-white prose-li:marker:text-gray-400
                        prose-a:text-white/90 hover:prose-a:text-white">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {article.content || ""}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default Article;