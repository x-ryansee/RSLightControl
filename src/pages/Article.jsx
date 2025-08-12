import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

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

  return (
    <div className="min-h-screen bg-dark text-white px-8 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light drop-shadow-md">{article.title}</h1>
        <p className="mt-3 text-gray-500 text-sm">
          {article.createdAt?.toDate ? article.createdAt.toDate().toLocaleDateString() : ""}
        </p>
        {article.coverImageUrl && (
          <img src={article.coverImageUrl} alt={article.title}
               className="mt-8 w-full rounded-xl object-cover" />
        )}
        <div className="prose prose-invert mt-8 max-w-none">
          {/* If you store HTML/Markdown, render appropriately. For now assume plain text */}
          <p className="whitespace-pre-wrap text-gray-200">{article.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Article;
