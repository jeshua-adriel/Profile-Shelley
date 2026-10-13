import { useMemo } from "react";

const NOTES = ["♪", "♫", "♬", "♩"];
const COLORS = ["#ffc857", "#ff9ecb", "#e9edff", "#9b8cff"];

// Bottom-left: music notes float up and sway, over a pulsing stage glow.
// Bottom-right: sound ripples spread out, with a dancing equalizer.
export default function Corners({ intense = false }) {
  const notes = useMemo(
    () =>
      Array.from({ length: intense ? 11 : 6 }, (_, i) => ({
        char: NOTES[i % NOTES.length],
        x: 4 + Math.random() * 62,
        size: 18 + Math.random() * 18,
        delay: 0.9 + i * 0.55 + Math.random() * 0.5,
        dur: 5 + Math.random() * 3,
        sway: (Math.random() < 0.5 ? -1 : 1) * (20 + Math.random() * 40),
        color: COLORS[i % COLORS.length],
      })),
    [intense]
  );

  const bars = useMemo(
    () =>
      Array.from({ length: 14 }, () => ({
        h: 0.35 + Math.random() * 0.65,
        dur: 0.5 + Math.random() * 0.7,
        delay: Math.random() * 0.6,
      })),
    []
  );

  return (
    <div className={`corners${intense ? " intense" : ""}`} aria-hidden="true">
      <div className="corner-left">
        <span className="stage-glow" />
        {notes.map((n, i) => (
          <span
            key={i}
            className="note"
            style={{
              "--x": `${n.x}%`,
              "--size": `${n.size}px`,
              "--delay": `${n.delay}s`,
              "--dur": `${n.dur}s`,
              "--sway": `${n.sway}px`,
              "--c": n.color,
            }}
          >
            {n.char}
          </span>
        ))}
      </div>

      <div className="corner-right">
        <span className="wave w1" />
        <span className="wave w2" />
        <span className="wave w3" />
        <div className="eq">
          {bars.map((b, i) => (
            <i key={i} style={{ "--h": b.h, "--dur": `${b.dur}s`, "--delay": `${b.delay}s` }} />
          ))}
        </div>
      </div>
    </div>
  );
}