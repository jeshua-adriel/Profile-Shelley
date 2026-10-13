import { useEffect, useRef } from "react";

// Full-screen twinkling stars plus an occasional shooting star.
export default function StarField() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let stars = [];
    let shooter = null;
    let raf;

    let lastW = 0;

    const makeStars = () => {
      const W = window.innerWidth;
      // Use the tallest possible screen height so stars still fill the sky
      // when a phone's address bar hides and the viewport grows.
      const H = Math.max(window.innerHeight, (window.screen && window.screen.height) || 0);
      const count = Math.floor((W * H) / 5500);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.4 + 0.3,
        speed: Math.random() * 0.002 + 0.0008,
        phase: Math.random() * Math.PI * 2,
        hue: Math.random() < 0.2 ? 330 : Math.random() < 0.5 ? 45 : 225,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // cap for phone performance
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Only rebuild the stars when the width changes (not on mobile scroll-resizes)
      if (window.innerWidth !== lastW) {
        lastW = window.innerWidth;
        makeStars();
      }
      if (reduce) draw(0);
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (const s of stars) {
        const a = reduce ? 0.8 : 0.35 + 0.65 * Math.abs(Math.sin(t * s.speed + s.phase));
        ctx.beginPath();
        ctx.fillStyle = `hsla(${s.hue}, 90%, 85%, ${a})`;
        ctx.shadowColor = `hsla(${s.hue}, 100%, 80%, ${a})`;
        ctx.shadowBlur = s.r * 4;
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      if (!reduce) {
        if (!shooter && Math.random() < 0.003) {
          shooter = { x: Math.random() * window.innerWidth * 0.8, y: Math.random() * 200, life: 0 };
        }
        if (shooter) {
          shooter.x += 10;
          shooter.y += 5;
          shooter.life += 1;
          const g = ctx.createLinearGradient(shooter.x, shooter.y, shooter.x - 90, shooter.y - 45);
          g.addColorStop(0, "rgba(255,255,255,0.9)");
          g.addColorStop(1, "rgba(255,255,255,0)");
          ctx.strokeStyle = g;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(shooter.x, shooter.y);
          ctx.lineTo(shooter.x - 90, shooter.y - 45);
          ctx.stroke();
          if (shooter.life > 60) shooter = null;
        }
        raf = requestAnimationFrame(draw);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="starfield" aria-hidden="true" />;
}