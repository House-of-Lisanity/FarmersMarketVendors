import Image from "next/image";

type CardProps = {
  image?: string;
  title?: string;
  content?: string;
  meta?: string;
  style?: React.CSSProperties;
};

export default function Card({
  image,
  title,
  content,
  meta,
  style,
}: CardProps) {
  return (
    <div className="card" style={style}>
      {image && (
        <div style={{ position: "relative", width: "100%", height: "200px" }}>
          <Image
            src={image}
            alt={title || "Card image"}
            fill
            style={{ objectFit: "cover", borderRadius: "6px" }}
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </div>
      )}
      <div className="card-content">
        {title && <h3>{title}</h3>}
        {content && <p>{content}</p>}
        {meta && <small>{meta}</small>}
      </div>
    </div>
  );
}
