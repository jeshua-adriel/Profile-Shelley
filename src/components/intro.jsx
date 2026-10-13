import { useEffect, useMemo, useState } from "react";
import Corners from "./corners";
import { profile } from "../data/siteData";

const PLAY_MS = 4800; // how long the intro plays before the portal opens
const EXIT_MS = 1100; // how long the portal-opening takes

const COLORS = ["#ffffff", "#ffe9a8", "#ffc6e3", "#c9d2ff"];

export default function Intro({ onReveal, onDone }) {
  const [leaving, setLeaving] = useState(false);

  // Stars that pop out of the center in every direction
  const stars = useMemo(
    () =>
      Array.from({ length: window.innerWidth < 600 ? 70 : 120 }, (_, i) => {
        const angle = Math.random() * Math.PI * 2;
        const dist = 10 + Math.pow(Math.random(), 0.7) * 62;
        return {
          dx: `${(Math.cos(angle) * dist).toFixed(1)}vmax`,
          dy: `${(Math.sin(angle) * dist).toFixed(1)}vmax`,
          size: `${(1 + Math.random() * 3.2).toFixed(1)}px`,
          delay: `${(0.15 + Math.random() * 1.3).toFixed(2)}s`,
          color: COLORS[i % COLORS.length],
          sparkle: i % 7 === 0,
        };
      }),
    []
  );

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      onReveal();
      onDone();
      return;
    }
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setLeaving(true), PLAY_MS);
    const onKey = (e) => e.key === "Escape" && setLeaving(true);
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!leaving) return;
    onReveal();
    const t = setTimeout(onDone, EXIT_MS);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leaving]);

  // Name split into words and letters so each letter can pop in
  let idx = 0;
  const words = profile.name.split(" ").map((word, w) => (
    <span className="word" key={w}>
      {[...word].map((ch) => {
        const i = idx++;
        return <span key={i} style={{ "--i": i }}>{ch}</span>;
      })}
    </span>
  ));

  return (
    <div className={`intro${leaving ? " leaving" : ""}`} onClick={() => setLeaving(true)}>
      <div className="nebula n1" />
      <div className="nebula n2" />
      <div className="nebula n3" />

      {[0.3, 0.8, 1.3].map((d, i) => (
        <span key={i} className="ring" style={{ "--d": `${d}s` }} />
      ))}

      {stars.map((s, i) => (
        <span
          key={i}
          className={`burst${s.sparkle ? " sparkle" : ""}`}
          style={{ "--dx": s.dx, "--dy": s.dy, "--size": s.size, "--delay": s.delay, "--c": s.color }}
        />
      ))}

      {[{ t: "12%", d: "1.9s" }, { t: "32%", d: "2.5s" }, { t: "6%", d: "3.2s" }].map((s, i) => (
        <span key={i} className="streak" style={{ "--t": s.t, "--d": s.d }} />
      ))}

      <Corners intense />

      <div className="intro-center">
        <span className="intro-star" />
        <div className="intro-name" role="img" aria-label={profile.name}>{words}</div>
        <p className="intro-sub">{profile.title}</p>
        <div className="intro-bar"><i style={{ animationDuration: `${PLAY_MS}ms` }} /></div>
      </div>

      <button className="skip" onClick={() => setLeaving(true)}>Skip</button>
    </div>
  );
}