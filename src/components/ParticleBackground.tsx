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

    // Wave ribbon configs
    const waves = [
      { amp: 0.18, freq: 1.2, speed: 0.4, yBase: 0.25, hue: 186, alpha: 0.07 },
      { amp: 0.14, freq: 0.9, speed: 0.3, yBase: 0.45, hue: 210, alpha: 0.06 },
      { amp: 0.20, freq: 1.5, speed: 0.5, yBase: 0.65, hue: 170, alpha: 0.07 },
      { amp: 0.12, freq: 1.0, speed: 0.35, yBase: 0.80, hue: 195, alpha: 0.05 },
      { amp: 0.16, freq: 0.7, speed: 0.25, yBase: 0.10, hue: 220, alpha: 0.06 },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.008;

      const W = canvas.width;
      const H = canvas.height;

      waves.forEach((w) => {
        const ribbonH = H * 0.22;
        ctx.beginPath();
        ctx.moveTo(0, H);

        // Top edge of ribbon
        for (let x = 0; x <= W; x += 4) {
          const y = H * w.yBase + Math.sin(x / W * Math.PI * 2 * w.freq + t * w.speed) * H * w.amp
                  + Math.sin(x / W * Math.PI * 3 * w.freq + t * w.speed * 1.3) * H * w.amp * 0.4;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        // Bottom edge of ribbon (offset)
        for (let x = W; x >= 0; x -= 4) {
          const y = H * w.yBase + ribbonH
                  + Math.sin(x / W * Math.PI * 2 * w.freq + t * w.speed + 1) * H * w.amp * 0.6;
          ctx.lineTo(x, y);
        }

        ctx.closePath();

        const grad = ctx.createLinearGradient(0, H * w.yBase, 0, H * w.yBase + ribbonH);
        grad.addColorStop(0, `hsla(${w.hue}, 80%, 55%, ${w.alpha * 1.5})`);
        grad.addColorStop(0.5, `hsla(${w.hue + 20}, 75%, 60%, ${w.alpha})`);
        grad.addColorStop(1, `hsla(${w.hue}, 80%, 55%, 0)`);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // Scattered glowing dots
      const dotCount = 55;
      for (let i = 0; i < dotCount; i++) {
        const x = ((i * 137.5 + t * 15) % W);
        const y = ((i * 97.3 + Math.sin(t * 0.5 + i) * 40) % H + H) % H;
        const pulse = 0.4 + 0.6 * Math.abs(Math.sin(t * 1.2 + i * 0.8));
        const hue = 186 + (i % 3) * 20;
        ctx.beginPath();
        ctx.arc(x, y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, 85%, 65%, ${pulse * 0.35})`;
        ctx.fill();
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
