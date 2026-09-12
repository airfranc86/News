# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Público general curioso por tecnología: lectores no técnicos interesados en el impacto real de la tecnología avanzada (IA, clima computacional, ciencia, hardware de frontera) en su vida y en el mundo. Buscan profundidad seria, no papers académicos ni jerga de especialista.

## Product Purpose

TechNews.sys es un medio digital / blog curado por Francisco, diseñado bajo el concepto de "sistema operativo de noticias". Su propósito es explorar y analizar el impacto transversal de la tecnología avanzada en distintas disciplinas del mundo real (IA, meteorología computacional, ciencia/datos, hardware). Éxito significa que el lector entiende el impacto real de avances tecnológicos complejos sin necesitar background técnico previo.

## Positioning

A diferencia de un blog de tecnología tradicional centrado en gadgets, specs o lanzamientos de software, TechNews.sys funciona como un "radar de innovación" que profundiza en tecnología aplicada: modelos predictivos climáticos (ej. GraphCast), redes de sensores IoT, biotecnología, exploración espacial acelerada por software. El foco editorial es el impacto real, no la ficha técnica.

## Operating Context

Flujo editorial humano-en-el-loop, gobernado por AGENTS.md/CLAUDE.md del repo: Francisco aporta una URL, texto o borrador de noticia; un asistente de IA (Claude Code / Vercel Plugin) procesa el contenido, lo formatea para el sitio y cita la fuente original. La IA solo ejecuta los comandos de git para publicar en producción tras la aprobación explícita de Francisco. Despliegue vía CI/CD automático en Vercel conectado a GitHub.

## Capabilities and Constraints

- Next.js (App Router) + React + Tailwind CSS v4. Sin backend ni base de datos.
- Autor único (Francisco). Sin sistema de usuarios ni comentarios.
- **Estado actual:** cada artículo es una carpeta estática dedicada bajo `app/` (ej. `app/bill-gates-ai/page.jsx`).
- **Plan a corto plazo (confirmado):** migrar a rutas dinámicas `[slug]` alimentadas por `data/posts.js`, para escalar contenido sin crear una carpeta nueva por artículo. Este archivo/ruta todavía no existe en el repo — es la dirección de arquitectura acordada, no el estado presente.
- Sin CMS externo ni servicio de terceros para contenido: todo el contenido vive versionado en el repo.

## Brand Commitments

- Nombre: **TechNews.sys**. Tagline: "Radar de Tecnología Aplicada". Concepto rector: "sistema operativo de noticias".
- Estética "Cinta de Procedencia" (archivo/ledger): fondo claro papel de archivo (`#e8dfc8`), acento único rojo cinta (`#a13328`) reservado exclusivamente para marcas de procedencia (fuente, traducción, verificación) — nunca como color de link ambiental. Reemplaza la estética anterior de dark mode cyberpunk (`slate-950` + glow), descartada explícitamente en la sesión de rediseño de 2026-09-11 por sentirse genérica ("AI dark mode" por defecto). Ver `DESIGN.md` para el sistema completo.
- Tipografía implementada: Vollkorn (display/serif), Source Sans 3 (cuerpo), JetBrains Mono (metadata/etiquetas).
- Social Ready: metadata Open Graph / Twitter Card preconfigurada.

## Evidence on Hand

Un artículo real publicado: traducción de un ensayo de Bill Gates sobre la era de la IA (`app/bill-gates-ai/`). No hay testimonios, casos de estudio ni métricas de tráfico documentadas — no fabricar ninguno de estos en trabajo futuro.

## Product Principles

1. Profundidad sin jerga: explicar impacto tecnológico real en lenguaje accesible, sin sacrificar rigor.
2. Impacto transversal por sobre novedad de producto: priorizar cómo la tecnología afecta disciplinas reales (clima, ciencia, sociedad) sobre reviews de gadgets o lanzamientos.
3. Publicación humano-en-el-loop: ningún contenido llega a producción sin aprobación explícita de Francisco.
4. Contenido versionado como código: los artículos viven en el repo (hoy carpetas estáticas, próximamente `data/posts.js`), no en un CMS externo.
