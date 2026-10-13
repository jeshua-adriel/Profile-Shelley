import { useEffect, useRef, useState } from "react";

// Profile picture with: reveal-on-scroll, floating, glowing spinning ring,
// twinkling sparkles, and a gentle 3D tilt that follows the mouse.
export default function Portrait({ src, alt }) {
  const wrapRef = useRef(null);
  const frameRef = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const onMove = (e) => {
    const frame = frameRef.current;
    const rect = frame.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    frame.style.setProperty("--ry", `${x * 14}deg`);
    frame.style.setProperty("--rx", `${-y * 14}deg`);
  };

  const onLeave = () => {
    const frame = frameRef.current;
    frame.style.setProperty("--ry", "0deg");
    frame.style.setProperty("--rx", "0deg");
  };

  return (
    <div ref={wrapRef} className={`portrait-wrap${seen ? " in-view" : ""}`}>
      <div ref={frameRef} className="portrait-frame" onMouseMove={onMove} onMouseLeave={onLeave}>
        <span className="portrait-ring" aria-hidden="true" />
        <img className="portrait" src={src} alt={alt} />
        <span className="spark s1" aria-hidden="true" />
        <span className="spark s2" aria-hidden="true" />
        <span className="spark s3" aria-hidden="true" />
      </div>
    </div>
  );
}