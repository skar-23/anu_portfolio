import { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Floating orbs
    const orbs = Array.from({ length: 5 }, (_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: 180 + Math.random() * 160,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      hue: [186, 210, 170, 195, 220][i],
    }));

    // Hexagonal grid points
    const HEX_SIZE = 60;
    const getHexPoints = (cx: number, cy: number, s: number) =>
      Array.from({ length: 6 }, (_, i) => {
        const a = (Math.PI / 3) * i - Math.PI / 6;
        return [cx + s * Math.cos(a), cy + s * Math.sin(a)] as [number, number];
      });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.004;

      // Draw aurora orbs
      orbs.forEach((o) => {
        o.x += o.vx;
        o.y += o.vy;
        if (o.x < -o.r) o.x = canvas.width + o.r;
        if (o.x > canvas.width + o.r) o.x = -o.r;
        if (o.y < -o.r) o.y = canvas.height + o.r;
        if (o.y > canvas.height + o.r) o.y = -o.r;

        const grad = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
        grad.addColorStop(0, `hsla(${o.hue}, 75%, 55%, 0.13)`);
        grad.addColorStop(1, `hsla(${o.hue}, 75%, 55%, 0)`);
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // Draw drifting hex grid
      const cols = Math.ceil(canvas.width / (HEX_SIZE * 1.75)) + 2;
      const rows = Math.ceil(canvas.height / (HEX_SIZE * 1.5)) + 2;
      const offsetX = ((t * 12) % (HEX_SIZE * 1.75));
      const offsetY = ((t * 8) % (HEX_SIZE * 1.5));

      ctx.lineWidth = 0.5;

      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          const cx = col * HEX_SIZE * 1.75 - offsetX + (row % 2 === 0 ? 0 : HEX_SIZE * 0.875);
          const cy = row * HEX_SIZE * 1.5 - offsetY;

          // Pulse opacity based on position + time
          const pulse = 0.5 + 0.5 * Math.sin(t * 2 + col * 0.5 + row * 0.7);
          const alpha = 0.04 + pulse * 0.06;

          ctx.strokeStyle = `rgba(26, 188, 195, ${alpha})`;
          const pts = getHexPoints(cx, cy, HEX_SIZE * 0.52);
          ctx.beginPath();
          ctx.moveTo(pts[0][0], pts[0][1]);
          for (let i = 1; i < 6; i++) ctx.lineTo(pts[i][0], pts[i][1]);
          ctx.closePath();
          ctx.stroke();

          // Occasional glowing hex vertex dot
          if ((col + row) % 7 === 0) {
            const dotAlpha = 0.15 + pulse * 0.25;
            ctx.beginPath();
            ctx.arc(cx, cy, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(38, 210, 220, ${dotAlpha})`;
            ctx.fill();
          }
        }
      }

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
