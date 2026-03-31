import { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const FONT_SIZE = 14;
    const CHARS = "01アイウエオカキクケコ∑∇∂∫λπθ∞≈";
    let cols: number[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = Math.floor(canvas.width / FONT_SIZE);
      cols = Array.from({ length: count }, () => Math.random() * -canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      // Fade trail
      ctx.fillStyle = "rgba(248, 250, 252, 0.045)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${FONT_SIZE}px monospace`;

      cols.forEach((y, i) => {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * FONT_SIZE;

        // Head glow (bright)
        ctx.fillStyle = "rgba(26, 188, 195, 0.9)";
        ctx.fillText(char, x, y);

        // Slightly behind — mid tone
        ctx.fillStyle = "rgba(38, 132, 180, 0.4)";
        ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], x, y - FONT_SIZE * 2);

        cols[i] += FONT_SIZE * (0.3 + Math.random() * 0.3);
        if (cols[i] > canvas.height && Math.random() > 0.975) {
          cols[i] = Math.random() * -canvas.height * 0.5;
        }
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default ParticleBackground;
