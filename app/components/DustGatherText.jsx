'use client';

import { useEffect, useRef, useState } from 'react';

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

export default function DustGatherText({ text, as: Tag = 'h1', className = '', children }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setSkip(true);
      setReady(true);
      return undefined;
    }

    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return undefined;

    const target = wrap.querySelector('[data-dust-target]');
    const rect = target.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = rect.width;
    const height = rect.height;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    const cs = window.getComputedStyle(target);
    const sample = document.createElement('canvas');
    sample.width = width;
    sample.height = height;
    const sctx = sample.getContext('2d');
    sctx.font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
    sctx.textBaseline = 'alphabetic';
    sctx.fillStyle = '#000';
    const lineHeight = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.2;
    const words = text.split(' ');
    const maxWidth = width;
    const lines = [];
    let line = '';
    words.forEach((word) => {
      const trial = line ? `${line} ${word}` : word;
      if (sctx.measureText(trial).width > maxWidth && line) {
        lines.push(line);
        line = word;
      } else {
        line = trial;
      }
    });
    if (line) lines.push(line);

    const totalTextHeight = lines.length * lineHeight;
    let startY = (height - totalTextHeight) / 2 + parseFloat(cs.fontSize) * 0.85;
    lines.forEach((l) => {
      sctx.fillText(l, 0, startY);
      startY += lineHeight;
    });

    const { data } = sctx.getImageData(0, 0, width, height);
    const step = 3;
    const points = [];
    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const alpha = data[(y * width + x) * 4 + 3];
        if (alpha > 120) points.push({ x, y });
      }
    }

    const particles = points.map((p) => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 60 + Math.random() * 90;
      return {
        targetX: p.x,
        targetY: p.y,
        startX: p.x + Math.cos(angle) * distance,
        startY: p.y + Math.sin(angle) * distance,
        delay: Math.random() * 500,
        size: 1.4 + Math.random() * 1.4,
      };
    });

    const duration = 900;
    const totalTime = duration + 500;
    let raf;
    let startTime = null;

    const render = (now) => {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#211d17';

      let done = true;
      particles.forEach((particle) => {
        const local = (elapsed - particle.delay) / duration;
        const progress = Math.min(Math.max(local, 0), 1);
        if (progress < 1) done = false;
        const eased = easeOutCubic(progress);
        const x = particle.startX + (particle.targetX - particle.startX) * eased;
        const y = particle.startY + (particle.targetY - particle.startY) * eased;
        ctx.globalAlpha = 0.35 + progress * 0.65;
        ctx.fillRect(x, y, particle.size, particle.size);
      });
      ctx.globalAlpha = 1;

      if (elapsed < totalTime) {
        raf = requestAnimationFrame(render);
      } else {
        setReady(true);
      }
    };

    raf = requestAnimationFrame(render);
    return () => cancelAnimationFrame(raf);
  }, [text]);

  return (
    <div ref={wrapRef} className="relative">
      <Tag
        data-dust-target
        className={`${className} transition-opacity duration-500`}
        style={{ opacity: skip || ready ? 1 : 0 }}
      >
        {children}
      </Tag>
      {!skip && (
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{ opacity: ready ? 0 : 1 }}
        />
      )}
    </div>
  );
}
