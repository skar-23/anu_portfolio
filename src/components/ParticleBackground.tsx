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

    // Stars with depth layers
    const stars = Array.from({ length: 220 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.6 + 0.2,
      speed: Math.random() * 0.00012 + 0.00004,
      twinkle: Math.random() * Math.PI * 2,
      twinkleSpeed: 0.02 + Math.random() * 0.03,
      hue: [0, 30, 200, 210, 186][Math.floor(Math.random() * 5)], // white, warm, blue, teal
    }));

    // Shooting stars
    interface Shoot { x: number; y: number; vx: number; vy: number; len: number; life: number; maxLife: number; }
    const shoots: Shoot[] = [];
    const spawnShoot = () => {
      shoots.push({
        x: Math.random() * 0.7,
        y: Math.random() * 0.5,
        vx: 0.004 + Math.random() * 0.004,
        vy: 0.002 + Math.random() * 0.003,
        len: 0.08 + Math.random() * 0.1,
        life: 0,
        maxLife: 60 + Math.random() * 40,
      });
    };

    // Nebula blobs
    const nebulae = [
      { x: 0.2, y: 0.3, r: 0.28, hue: 210, alpha: 0.045 },
      { x: 0.75, y: 0.6, r: 0.22, hue: 270, alpha: 0.04 },
      { x: 0.5, y: 0.15, r: 0.18, hue: 186, alpha: 0.035 },
    ];

    let shootTimer = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 1;
      shootTimer++;

      const W = canvas.width;
      const H = canvas.height;

      // Nebula
      nebulae.forEach((n) => {
        const grad = ctx.createRadialGradient(n.x * W, n.y * H, 0, n.x * W, n.y * H, n.r * W);
        grad.addColorStop(0, `hsla(${n.hue}, 70%, 55%, ${n.alpha * 2})`);
        grad.addColorStop(1, `hsla(${n.hue}, 70%, 55%, 0)`);
        ctx.beginPath();
        ctx.arc(n.x * W, n.y * H, n.r * W, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // Stars
      stars.forEach((s) => {
        s.twinkle += s.twinkleSpeed;
        const alpha = 0.5 + 0.5 * Math.sin(s.twinkle);
        const r = s.r * (0.85 + 0.15 * Math.sin(s.twinkle));

        // Subtle drift
        s.x += s.speed;
        if (s.x > 1) s.x = 0;

        ctx.beginPath();
        ctx.arc(s.x * W, s.y * H, r, 0, Math.PI * 2);

        if (s.hue === 0) {
          ctx.fillStyle = `rgba(255,255,255,${alpha * 0.85})`;
        } else if (s.hue === 30) {
          ctx.fillStyle = `rgba(255,240,200,${alpha * 0.7})`;
        } else {
          ctx.fillStyle = `hsla(${s.hue}, 80%, 75%, ${alpha * 0.75})`;
        }
        ctx.fill();

        // Cross sparkle for brighter stars
        if (s.r > 1.4) {
          ctx.strokeStyle = `rgba(255,255,255,${alpha * 0.3})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(s.x * W - r * 3, s.y * H);
          ctx.lineTo(s.x * W + r * 3, s.y * H);
          ctx.moveTo(s.x * W, s.y * H - r * 3);
          ctx.lineTo(s.x * W, s.y * H + r * 3);
          ctx.stroke();
        }
      });

      // Spawn shooting star every ~4s
      if (shootTimer > 240) {
        spawnShoot();
        shootTimer = 0;
      }

      // Draw shooting stars
      for (let i = shoots.length - 1; i >= 0; i--) {
        const s = shoots[i];
        s.life++;
        const progress = s.life / s.maxLife;
        const alpha = progress < 0.3 ? progress / 0.3 : 1 - (progress - 0.3) / 0.7;

        const x1 = s.x * W;
        const y1 = s.y * H;
        const x2 = (s.x - s.vx * s.life * 0.5) * W;
        const y2 = (s.y - s.vy * s.life * 0.5) * H;

        const grad = ctx.createLinearGradient(x2, y2, x1, y1);
        grad.addColorStop(0, `rgba(255,255,255,0)`);
        grad.addColorStop(1, `rgba(180,240,255,${alpha * 0.9})`);

        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(x1, y1);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        s.x += s.vx;
        s.y += s.vy;
        if (s.life >= s.maxLife) shoots.splice(i, 1);
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
