"use client";

import { useEffect, useState } from "react";

type ImageType = {
  _id: string;
  url: string;
  caption?: string;
};

export default function Gallery() {
  const [images, setImages] = useState<ImageType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/gallery");
        const data = await res.json();
        setImages(data);
      } catch (err) {
        console.error("Failed to load gallery:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <section id="gallery">
      <h2>Gallery</h2>
      {loading && <p>Loading images...</p>}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
        }}
      >
        {images.map((image) => (
          <figure key={image._id}>
            <img
              src={image.url}
              alt={image.caption || "Gallery image"}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            {image.caption && <figcaption>{image.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </section>
  );
}
