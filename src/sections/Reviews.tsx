"use client";

import { useEffect, useState } from "react";

type ReviewType = {
  _id: string;
  name: string;
  content: string;
  date?: string;
};

export default function Reviews() {
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/reviews");
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        console.error("Failed to load reviews:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section id="reviews">
      <h2>Customer Reviews</h2>
      {loading && <p>Loading reviews...</p>}
      <ul>
        {reviews.map((r) => (
          <li key={r._id}>
            <blockquote>{r.content}</blockquote>
            <p>
              <strong>{r.name}</strong>{" "}
              {r.date && <em>– {new Date(r.date).toLocaleDateString()}</em>}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
