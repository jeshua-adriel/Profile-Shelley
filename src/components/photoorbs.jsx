import { useEffect, useRef, useState } from "react";

// Circular photos (styled like the sun and moon) that pop in when scrolled to,
// then float gently. Hover or tap one to make it glow and show its caption.
// Shows up to 6 photos; each one is { src, alt, caption }.
export default function PhotoOrbs({ photos = [] }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (!photos.length) return null;

  return (
    <div ref={ref} className={`photo-orbs${seen ? " in-view" : ""}`}>
      {photos.slice(0, 6).map((p, i) => (
        <figure key={i} className="photo-orb" style={{ "--i": i }} tabIndex={0}>
          <img
            src={p.src}
            alt={p.alt || ""}
            loading="lazy"
            onError={(e) => { e.currentTarget.style.opacity = 0; }} /* missing file: keep the empty glowing orb */
          />
          {p.caption && <figcaption>{p.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}