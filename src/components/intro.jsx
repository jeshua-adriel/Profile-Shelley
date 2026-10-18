import { useEffect, useMemo, useState } from "react";
import Corners from "./corners";
import { profile } from "../data/siteData";

const PLAY_MS = 4800;
const EXIT_MS = 4100;

const COLORS = ["#ffffff", "#ffe9a8", "#ffc6e3", "#c9d2ff"];

export default function Intro({ onReveal, onDone }) {
  const [leaving, setLeaving] = useState(false);

  // Generate fewer stars on mobile to reduce rendering cost.
  const stars = useMemo(() => {
    const mobile = window.matchMedia("(max-width: 600px)").matches;
    const count = mobile ? 36 : 80;

    return Array.from({ length: count }, (_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 10 + Math.pow(Math.random(), 0.7) * 62;

      return {
        dx: `${(Math.cos(angle) * distance).toFixed(1)}vmax`,
        dy: `${(Math.sin(angle) * distance).toFixed(1)}vmax`,
        size: `${(1 + Math.random() * (mobile ? 2 : 3.2)).toFixed(1)}px`,
        delay: `${(0.15 + Math.random() * 1.3).toFixed(2)}s`,
        color: COLORS[i % COLORS.length],
        sparkle: i % 9 === 0,
      };
    });
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      onReveal();
      onDone();
      return;
    }

    document.body.style.overflow = "hidden";

    const exitTimer = window.setTimeout(() => {
      setLeaving(true);
    }, PLAY_MS);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setLeaving(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(exitTimer);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onReveal, onDone]);

  useEffect(() => {
    if (!leaving) return;

    onReveal();

    const doneTimer = window.setTimeout(() => {
      onDone();
    }, EXIT_MS);

    return () => window.clearTimeout(doneTimer);
  }, [leaving, onReveal, onDone]);

  let letterIndex = 0;

  const words = profile.name.split(" ").map((word, wordIndex) => (
    <span className="word" key={wordIndex}>
      {[...word].map((character) => {
        const index = letterIndex++;

        return (
          <span key={index} style={{ "--i": index }}>
            {character}
          </span>
        );
      })}
    </span>
  ));

  return (
    <div
      className={`intro${leaving ? " leaving" : ""}`}
      onClick={() => setLeaving(true)}
    >
      <div className="nebula n1" />
      <div className="nebula n2" />
      <div className="nebula n3" />

      {[0.3, 0.8, 1.3].map((delay, index) => (
        <span
          key={index}
          className="ring"
          style={{ "--d": `${delay}s` }}
        />
      ))}

      {stars.map((star, index) => (
        <span
          key={index}
          className={`burst${star.sparkle ? " sparkle" : ""}`}
          style={{
            "--dx": star.dx,
            "--dy": star.dy,
            "--size": star.size,
            "--delay": star.delay,
            "--c": star.color,
          }}
        />
      ))}

      {[
        { t: "12%", d: "1.9s" },
        { t: "32%", d: "2.5s" },
        { t: "6%", d: "3.2s" },
      ].map((streak, index) => (
        <span
          key={index}
          className="streak"
          style={{ "--t": streak.t, "--d": streak.d }}
        />
      ))}

      <Corners intense />

      <div className="intro-center">
        <span className="intro-star" />

        <div
          className="intro-name"
          role="img"
          aria-label={profile.name}
        >
          {words}
        </div>

        <p className="intro-sub">{profile.title}</p>

        <div className="intro-bar">
          <i style={{ animationDuration: `${PLAY_MS}ms` }} />
        </div>
      </div>

      <button
        type="button"
        className="skip"
        onClick={(event) => {
          event.stopPropagation();
          setLeaving(true);
        }}
      >
        Skip
      </button>
    </div>
  );
}
