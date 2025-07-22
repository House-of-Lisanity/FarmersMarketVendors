"use client";

import { useEffect, useState } from "react";

type AboutType = {
  _id: string;
  content: string;
};

export default function About() {
  const [bio, setBio] = useState<AboutType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBio = async () => {
      try {
        const res = await fetch("/api/about");
        const data = await res.json();
        setBio(data);
      } catch (err) {
        console.error("Failed to load about content:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBio();
  }, []);

  return (
    <section id="about">
      <h2>About Me</h2>
      {loading && <p>Loading bio...</p>}
      {!loading && bio && (
        <p style={{ whiteSpace: "pre-wrap" }}>{bio.content}</p>
      )}
    </section>
  );
}
