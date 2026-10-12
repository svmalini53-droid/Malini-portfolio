'use client';

import { useState, useCallback } from "react";
import { motion } from "framer-motion";

type PreviewType =
  | "vwin"
  | "dreamphotography"
  | "rjproperties"
  | "srivari"
  | "gjconstruction"
  | "thirumathy"
  | "kavipriyan"
  | "krishnaoil"
  | "elitemutual"
  | "maludocument"
  | "trip";

type Project = {
  id: number;
  type: string;
  badges: string[];
  hasFire: boolean;
  year: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  previewBg: string;
  previewContent: PreviewType;
};

const projects: Project[] = [
  {
    id: 1,
    type: "Web App",
    badges: ["Web App", "Client"],
    hasFire: false,
    year: "2024",
    title: "V WIN AIRCON",
    description:
      "An HVAC sales, genuine spare parts, and service platform built for residential and commercial cooling solutions in Erode and Bhavani. Features service booking, catalog displays, and instant WhatsApp inquiry integration.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://vwin-aricon.vercel.app/",
    githubUrl: "https://vwin-aricon.vercel.app/",
    previewBg: "#071a2f",
    previewContent: "vwin",
  },
  {
    id: 2,
    type: "Web App",
    badges: ["Web App", "Firebase"],
    hasFire: true,
    year: "2024",
    title: "Dream Replicas Photography",
    description:
      "A responsive photography and videography studio platform based in Erode. Highlights traditional Muhurtham ceremonies, dynamic portfolio galleries, and an admin panel to manage photos and videos with Firebase and Cloudinary.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Cloudinary"],
    liveUrl: "https://dream-photography-website-silk.vercel.app/",
    githubUrl: "https://dream-photography-website-silk.vercel.app/",
    previewBg: "#261b20",
    previewContent: "dreamphotography",
  },
  {
    id: 3,
    type: "Web App",
    badges: ["Web App", "Client"],
    hasFire: false,
    year: "2024",
    title: "RJ Properties Neelambur",
    description:
      "A premier real estate platform showcasing DTCP-approved residential plotted layouts in Neelambur, Coimbatore. Features interactive master plans, infrastructure highlights, location connectivity, and guided site visit booking.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://rjpropertiesneelambur.com/",
    githubUrl: "https://rjpropertiesneelambur.com/",
    previewBg: "#1a1d1a",
    previewContent: "rjproperties",
  },
  {
    id: 4,
    type: "Web App",
    badges: ["Web App"],
    hasFire: false,
    year: "2024",
    title: "Sri Vari Organics",
    description:
      "A modern fertilizer and bio-solutions e-commerce platform built for sustainable agriculture. Features comprehensive biological crop nutrition catalogs, organic soil boosters, and ISO laboratory certified formulations.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://www.srivariorganics.com/",
    githubUrl: "https://www.srivariorganics.com/",
    previewBg: "#051f15",
    previewContent: "srivari",
  },
  {
    id: 5,
    type: "Web App",
    badges: ["Web App"],
    hasFire: false,
    year: "2024",
    title: "GJ Construction",
    description:
      "A premier civil engineering and construction company platform in Tamil Nadu. Showcases residential house construction, luxury villas, 3D project showcases, and turnkey site development solutions.",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://www.gjconstruction.co.in/",
    githubUrl: "https://www.gjconstruction.co.in/",
    previewBg: "#082419",
    previewContent: "gjconstruction",
  },
  {
    id: 6,
    type: "Web App",
    badges: ["Web App"],
    hasFire: false,
    year: "2024",
    title: "Thirumathy Foods",
    description:
      "An authentic South Indian packaged food brand platform (Mrs. Idly) featuring stone-ground idly/dosa batters, vegetable chapathis, interactive quantity selections, and direct WhatsApp ordering integration.",
    tags: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://www.thirumathyfoods.com/",
    githubUrl: "https://www.thirumathyfoods.com/",
    previewBg: "#221306",
    previewContent: "thirumathy",
  },
  {
    id: 7,
    type: "Web App",
    badges: ["Web App"],
    hasFire: false,
    year: "2024",
    title: "Kavi Priyan Catering",
    description:
      "A premium catering service platform delivering authentic feasts for weddings, housewarmings, and corporate events. Features dynamic banquet displays, banana-leaf menu selections, and direct event bookings.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://www.kavipriyancatering.com/",
    githubUrl: "https://www.kavipriyancatering.com/",
    previewBg: "#240a0e",
    previewContent: "kavipriyan",
  },
  {
    id: 8,
    type: "Web App",
    badges: ["Web App"],
    hasFire: false,
    year: "2024",
    title: "Krishna Oil Mill",
    description:
      "A heritage digital storefront for a 5th-generation traditional oil mill since 1970. Provides pure wood-pressed coconut, groundnut, and sesame oils with FSSAI certification and instant customer ordering.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://www.krishnaoil.co.in/",
    githubUrl: "https://www.krishnaoil.co.in/",
    previewBg: "#072014",
    previewContent: "krishnaoil",
  },
  {
    id: 9,
    type: "Web App",
    badges: ["Web App"],
    hasFire: false,
    year: "2024",
    title: "Elite Mutual",
    description:
      "A comprehensive financial management and mutual fund platform designed for tracking investor portfolios, automated SIP planning, capital asset distribution, and real-time performance analytics.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    liveUrl: "https://github.com/qsoftplus/elite-mutual.git",
    githubUrl: "https://github.com/qsoftplus/elite-mutual.git",
    previewBg: "#091226",
    previewContent: "elitemutual",
  },
  {
    id: 10,
    type: "Web App",
    badges: ["Web App", "AI"],
    hasFire: false,
    year: "2024",
    title: "Malu Document - AI Code Documentation Assistant",
    description:
      "An AI-powered developer tool that leverages Google Gemini to automatically analyze codebases, generate technical documentation, architectural diagrams, and structured developer guides.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini AI"],
    liveUrl: "https://github.com/malini-2004/Malu-document-Main-project-.git",
    githubUrl: "https://github.com/malini-2004/Malu-document-Main-project-.git",
    previewBg: "#120a28",
    previewContent: "maludocument",
  },
  {
    id: 11,
    type: "Web App",
    badges: ["Web App"],
    hasFire: true,
    year: "2024",
    title: "Dynamic Trip Planner",
    description:
      "A responsive travel planner with real-time user profile management and Firebase Authentication. Plan trips with ease, manage travel itineraries, and explore curated destination guides.",
    tags: ["TypeScript", "Tailwind CSS", "Firebase", "React"],
    liveUrl: "https://travel-malu.vercel.app/",
    githubUrl: "https://travel-malu.vercel.app/",
    previewBg: "#061420",
    previewContent: "trip",
  },
];

/* ─────────────────────────────────────────
   PREVIEW IMAGE MAP
───────────────────────────────────────── */
const previewImages: Record<PreviewType, string> = {
  vwin: "/previews/vwin.jpg",
  dreamphotography: "/previews/dreamphotography.jpg",
  rjproperties: "/previews/rjproperties.jpg",
  srivari: "/previews/srivari.jpg",
  gjconstruction: "/previews/gjconstruction.jpg",
  thirumathy: "/previews/thirumathy.jpg",
  kavipriyan: "/previews/kavipriyan.jpg",
  krishnaoil: "/previews/krishnaoil.jpg",
  elitemutual: "/previews/elitemutual.jpg",
  maludocument: "/previews/maludocument.svg",
  trip: "/previews/trip.svg",
};

const previewAlt: Record<PreviewType, string> = {
  vwin: "V WIN AIRCON website – AC sales, service and genuine spare parts platform",
  dreamphotography: "Dream Replicas Photography – Tamil Nadu wedding photography and videography studio",
  rjproperties: "RJ Properties website – DTCP approved residential plots in Neelambur, Coimbatore",
  srivari: "Sri Vari Organics website – organic bio-fertilizers platform",
  gjconstruction: "GJ Construction website – civil engineering company",
  thirumathy: "Thirumathy Foods website – South Indian food brand",
  kavipriyan: "Kavi Priyan Catering website – premium catering service",
  krishnaoil: "Krishna Oil Mill website – heritage wood-pressed oils",
  elitemutual: "Elite Mutual dashboard – mutual fund management platform",
  maludocument: "Malu Document – AI-powered code documentation assistant",
  trip: "Dynamic Trip Planner – travel itinerary web app",
};

type PreviewContentProps = { type: PreviewType };
const PreviewContent = ({ type }: PreviewContentProps) => {
  const src = previewImages[type];
  const alt = previewAlt[type];

  // SVG inline fallback for projects without a photo image
  if (type === "maludocument") {
    return (
      <div style={{
        width: "100%", height: "100%",
        background: "linear-gradient(135deg, #1a0a2e 0%, #120a28 100%)",
        display: "flex", flexDirection: "column", overflow: "hidden",
        fontFamily: "monospace",
      }}>
        <div style={{ background: "rgba(0,0,0,0.5)", padding: "5px 10px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <span style={{ color: "#c084fc", fontWeight: 700, fontSize: 9 }}>🤖 Malu Document</span>
          <span style={{ background: "rgba(168,85,247,0.2)", color: "#c084fc", fontSize: 7, padding: "1px 6px", borderRadius: 8, border: "1px solid rgba(168,85,247,0.3)", marginLeft: "auto" }}>Gemini AI</span>
        </div>
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "40% 60%", overflow: "hidden" }}>
          <div style={{ background: "rgba(0,0,0,0.35)", borderRight: "1px solid rgba(255,255,255,0.06)", padding: "8px" }}>
            <div style={{ color: "#64748b", fontSize: 7, marginBottom: 4 }}>EXPLORER</div>
            {["src/", " components/", "  Button.tsx", "  Header.tsx", " pages/", "  index.tsx"].map(f => (
              <div key={f} style={{ color: f.startsWith("  ") ? "#c084fc" : "#94a3b8", fontSize: 7, padding: "1px 0" }}>{f}</div>
            ))}
          </div>
          <div style={{ padding: "8px", display: "flex", flexDirection: "column", gap: 5 }}>
            <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: 4, padding: "5px 7px", border: "1px solid rgba(255,255,255,0.06)" }}>
              <code style={{ color: "#e2e8f0", fontSize: 7 }}>&gt; analyze_codebase("./src")</code>
            </div>
            <div style={{ background: "rgba(168,85,247,0.08)", borderRadius: 4, padding: "5px 7px", border: "1px solid rgba(168,85,247,0.2)" }}>
              <div style={{ color: "#34d399", fontSize: 7, fontWeight: 600 }}>✓ Documentation Generated</div>
              <div style={{ color: "#94a3b8", fontSize: 6, marginTop: 2 }}>12 files · 4 diagrams · Markdown</div>
            </div>
            <div style={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
              {["AST Parsing", "Code Analysis", "Gemini AI"].map(t => (
                <span key={t} style={{ background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.25)", color: "#d8b4fe", fontSize: 6, padding: "1px 5px", borderRadius: 4 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "trip") {
    return (
      <div style={{
        width: "100%", height: "100%",
        background: "linear-gradient(135deg, #061420 0%, #0a1a2e 100%)",
        display: "flex", flexDirection: "column", padding: 10, overflow: "hidden",
      }}>
        <div style={{ color: "#fff", fontSize: 10, fontWeight: 700, marginBottom: 8 }}>✈️ Dynamic Trip Planner</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {[["📍 Paris, France", "Jul 12 – Jul 19, 2024"], ["🗼 Tokyo, Japan", "Sep 5 – Sep 15, 2024"]].map(([dest, date]) => (
            <div key={dest} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 6, padding: "6px 8px" }}>
              <div style={{ color: "#fff", fontSize: 8, fontWeight: 600, marginBottom: 2 }}>{dest}</div>
              <div style={{ color: "#64748b", fontSize: 7 }}>{date}</div>
            </div>
          ))}
          <button style={{ background: "transparent", border: "1px dashed rgba(236,72,153,0.5)", color: "#ec4899", padding: "4px 10px", borderRadius: 4, fontSize: 8, cursor: "pointer", alignSelf: "flex-start" }}>+ Add Destination</button>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "top center",
        display: "block",
      }}
      onError={(e) => {
        const target = e.currentTarget;
        target.style.display = "none";
        const parent = target.parentElement;
        if (parent) {
          parent.style.background = "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)";
          const fallback = document.createElement("div");
          fallback.style.cssText = "display:flex;align-items:center;justify-content:center;width:100%;height:100%;color:#ec4899;font-size:13px;font-weight:600;";
          fallback.textContent = alt;
          parent.appendChild(fallback);
        }
      }}
    />
  );
};

/* ─────────────────────────────────────────
   MODAL IMAGE CAROUSEL
───────────────────────────────────────── */
type ModalCarouselProps = {
  project: Project;
};

const ModalCarousel = ({ project }: ModalCarouselProps) => {
  // Generate 3 "slides" — each is just a different view/variant of the preview
  // Slide 1: full preview content, Slide 2: centered label card, Slide 3: dark gradient overlay
  const totalSlides = 3;
  const [imgIndex, setImgIndex] = useState(0);
  const [imgSlideClass, setImgSlideClass] = useState("img-slide-visible");
  const [imgAnimating, setImgAnimating] = useState(false);

  const goImgTo = useCallback(
    (next: number, dir: "left" | "right") => {
      if (imgAnimating) return;
      const clamped = (next + totalSlides) % totalSlides;
      if (clamped === imgIndex) return;
      setImgAnimating(true);
      setImgSlideClass(dir === "right" ? "img-slide-exit-left" : "img-slide-exit-right");
      setTimeout(() => {
        setImgIndex(clamped);
        setImgSlideClass(dir === "right" ? "img-slide-enter-right-start" : "img-slide-enter-left-start");
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setImgSlideClass("img-slide-visible");
            setTimeout(() => setImgAnimating(false), 350);
          });
        });
      }, 280);
    },
    [imgAnimating, imgIndex]
  );

  const prevImg = () => goImgTo(imgIndex - 1, "left");
  const nextImg = () => goImgTo(imgIndex + 1, "right");

  // Three different visual "views" of the project preview
  const slideViews = [
    // View 1 — normal preview content
    <div key="v1" style={{ width: "100%", height: "100%", position: "relative" }}>
      <PreviewContent type={project.previewContent} />
    </div>,
    // View 2 — centered title card overlay
    <div
      key="v2"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `radial-gradient(ellipse at 40% 40%, rgba(236,72,153,0.10) 0%, transparent 70%), ${project.previewBg}`,
        position: "relative",
      }}
    >
      <div style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 14,
        padding: "20px 28px",
        textAlign: "center",
        maxWidth: "80%",
      }}>
        <div style={{ fontSize: 32, marginBottom: 10 }}>
          {project.previewContent === "vwin" ? "❄️" :
           project.previewContent === "dreamphotography" ? "📷" :
           project.previewContent === "rjproperties" ? "🏡" :
           project.previewContent === "srivari" ? "🌱" :
           project.previewContent === "gjconstruction" ? "🏗️" :
           project.previewContent === "thirumathy" ? "🍲" :
           project.previewContent === "kavipriyan" ? "🍛" :
           project.previewContent === "krishnaoil" ? "🪔" :
           project.previewContent === "elitemutual" ? "📈" :
           project.previewContent === "maludocument" ? "🤖" : "✈️"}
        </div>
        <div style={{ color: "#fff", fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{project.title}</div>
        <div style={{ color: "#94a3b8", fontSize: 12 }}>{project.type} · {project.year}</div>
        <div style={{ marginTop: 12, display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center" }}>
          {project.tags.filter(t => !t.startsWith("+")).map(tag => (
            <span key={tag} style={{
              background: "rgba(236,72,153,0.1)",
              border: "1px solid rgba(236,72,153,0.25)",
              color: "#ec4899",
              fontSize: 10,
              padding: "3px 8px",
              borderRadius: 4,
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>,
    // View 3 — dark atmospheric with stats/info
    <div
      key="v3"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(135deg, ${project.previewBg} 0%, #1a0820 100%)`,
        padding: 20,
        gap: 12,
      }}
    >
      <div style={{
        color: "#fff",
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        opacity: 0.5,
      }}>
        Project Overview
      </div>
      <div style={{
        width: "100%",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 10,
        padding: "12px 16px",
      }}>
        <div style={{ color: "#94a3b8", fontSize: 11, lineHeight: 1.6 }}>
          {project.description.slice(0, 120)}…
        </div>
      </div>
      <div style={{ display: "flex", gap: 8, width: "100%" }}>
        {["Live", "GitHub", project.year].map(label => (
          <div key={label} style={{
          flex: 1,
          background: "rgba(236,72,153,0.08)",
          border: "1px solid rgba(236,72,153,0.18)",
          borderRadius: 8,
          padding: "6px 0",
          textAlign: "center",
          color: "#ec4899",
          fontSize: 10,
          fontWeight: 600,
        }}>{label}</div>
        ))}
      </div>
    </div>,
  ];

  return (
    <div className="modal-carousel-wrap">
      {/* Slide */}
      <div
        className={`modal-carousel-slide ${imgSlideClass}`}
        style={{ background: project.previewBg }}
      >
        {slideViews[imgIndex]}
      </div>

      {/* Counter badge */}
      <div className="modal-carousel-counter">
        {imgIndex + 1} / {totalSlides}
      </div>

      {/* Prev / Next arrows */}
      <button
        className="modal-carousel-arrow modal-carousel-arrow-left"
        onClick={prevImg}
        aria-label="Previous image"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        className="modal-carousel-arrow modal-carousel-arrow-right"
        onClick={nextImg}
        aria-label="Next image"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Bottom label */}
      <div className="modal-preview-label">
        <strong>{project.title}</strong>
        <span>{project.type}</span>
        {/* Dots */}
        <div className="modal-carousel-dots">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              className={`modal-carousel-dot${i === imgIndex ? " modal-dot-active" : ""}`}
              onClick={() => goImgTo(i, i > imgIndex ? "right" : "left")}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   MODAL
───────────────────────────────────────── */
type ModalProps = { project: Project | null; onClose: () => void };
const Modal = ({ project, onClose }: ModalProps) => {
  if (!project) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-top">
          <h2 className="modal-title">{project.title}</h2>
          <div className="modal-badges">
            <span className="badge-type">{project.type}</span>
            {project.hasFire && <span className="badge-fire">● Firebase</span>}
            <span className="modal-year">{project.year}</span>
          </div>
        </div>
        <div className="modal-body">
          {/* Left: image carousel */}
          <ModalCarousel project={project} />

          {/* Right: info */}
          <div className="modal-info">
            <p className="modal-desc">{project.description}</p>
            <div className="modal-tech">
              <h4>Technologies Used</h4>
              <div className="modal-tags">
                {project.tags.filter((t) => !t.startsWith("+")).map((tag) => (
                  <span key={tag} className="modal-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="modal-actions">
              {project.githubUrl && project.githubUrl !== "#" && (
                <a href={project.githubUrl} className="btn-github" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Code
                </a>
              )}
              {project.liveUrl && project.liveUrl !== "#" && (
                <a href={project.liveUrl} className="btn-live" target="_blank" rel="noopener noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  {project.liveUrl.includes("github.com") ? "View on GitHub" : "Visit Live Site"}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.75);
          backdrop-filter: blur(6px);
          z-index: 1000;
          display: flex; align-items: center; justify-content: center;
          padding: 20px;
          animation: fadeIn .2s ease;
        }
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
        .modal-box {
          background: #0d1628;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          width: 100%; max-width: 560px;
          max-height: 90vh; overflow-y: auto;
          padding: 28px;
          position: relative;
          animation: slideUp .25s ease;
        }
        @keyframes slideUp { from { transform:translateY(20px); opacity:0 } to { transform:translateY(0); opacity:1 } }
        .modal-close {
          position: absolute; top: 16px; right: 16px;
          background: rgba(255,255,255,0.08);
          border: none; color: #fff;
          width: 32px; height: 32px; border-radius: 50%;
          cursor: pointer; font-size: 14px;
          display: flex; align-items: center; justify-content: center;
          transition: background .2s;
        }
        .modal-close:hover { background: rgba(255,255,255,0.15); }
        .modal-title { color: #fff; font-size: 1.5rem; font-weight: 700; margin: 0 0 8px; }
        .modal-badges { display: flex; gap: 8px; align-items: center; margin-bottom: 16px; flex-wrap: wrap; }
        .badge-type { background: #ec4899; color: #fff; font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: 20px; }
        .badge-fire { background: #e67e22; color: #fff; font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: 20px; }
        .modal-year { color: #94a3b8; font-size: 13px; }
        .modal-body { display: grid; gap: 20px; }
        .modal-info { display: flex; flex-direction: column; }

        /* ── MODAL CAROUSEL ── */
        .modal-carousel-wrap {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          min-height: 260px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
        }
        .modal-carousel-slide {
          flex: 1;
          min-height: 220px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.32s cubic-bezier(0.4,0,0.2,1), opacity 0.32s ease;
        }
        /* Slide states */
        .img-slide-visible      { transform: translateX(0);     opacity: 1; }
        .img-slide-exit-left    { transform: translateX(-60px); opacity: 0; pointer-events: none; }
        .img-slide-exit-right   { transform: translateX(60px);  opacity: 0; pointer-events: none; }
        .img-slide-enter-right-start { transform: translateX(60px);  opacity: 0; transition: none !important; }
        .img-slide-enter-left-start  { transform: translateX(-60px); opacity: 0; transition: none !important; }

        /* Counter badge */
        .modal-carousel-counter {
          position: absolute;
          top: 12px; right: 12px;
          background: rgba(0,0,0,0.65);
          backdrop-filter: blur(4px);
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 20px;
          z-index: 10;
          letter-spacing: 0.05em;
        }

        /* Arrows */
        .modal-carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 36px; height: 36px;
          border-radius: 50%;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255,255,255,0.15);
          color: #fff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: background .2s, border-color .2s, transform .15s;
        }
        .modal-carousel-arrow:hover {
          background: rgba(236,72,153,0.25);
          border-color: rgba(236,72,153,0.6);
        }
        .modal-carousel-arrow-left  { left: 10px; }
        .modal-carousel-arrow-right { right: 10px; }

        /* Bottom label */
        .modal-preview-label {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          background: rgba(0,0,0,0.6); backdrop-filter: blur(4px);
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 9;
        }
        .modal-preview-label strong { color: #fff; font-size: 14px; }
        .modal-preview-label span { color: #94a3b8; font-size: 12px; flex: 1; }

        /* Dots inside label */
        .modal-carousel-dots {
          display: flex;
          gap: 5px;
          align-items: center;
        }
        .modal-carousel-dot {
          height: 7px; width: 7px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: width .3s ease, background .3s ease, border-radius .3s ease;
        }
        .modal-dot-active {
          width: 20px;
          border-radius: 4px;
          background: #ec4899;
        }

        .modal-desc { color: #94a3b8; line-height: 1.7; font-size: 15px; margin-bottom: 20px; }
        .modal-tech h4 { color: #fff; font-weight: 600; margin-bottom: 10px; }
        .modal-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; }
        .modal-tag {
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);
          color: #cbd5e1; font-size: 13px; padding: 5px 12px; border-radius: 6px;
        }
        .modal-actions { display: flex; gap: 12px; flex-wrap: wrap; }
        .btn-github {
          display: flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
          color: #fff; text-decoration: none;
          padding: 10px 20px; border-radius: 8px; font-size: 14px; font-weight: 500;
          transition: all .2s;
        }
        .btn-github:hover { background: rgba(255,255,255,0.14); }
        .btn-live {
          display: flex; align-items: center; gap: 8px;
          background: #ec4899; border: none; color: #fff; text-decoration: none;
          padding: 10px 24px; border-radius: 8px; font-size: 14px; font-weight: 600;
          transition: all .2s; flex: 1; justify-content: center;
        }
        .btn-live:hover { background: #db2777; transform: translateY(-1px); }
        @media (min-width: 900px) {
          .modal-box { max-width: 960px; }
          .modal-body { grid-template-columns: 1fr 1.1fr; align-items: start; }
          .modal-carousel-wrap { min-height: 300px; }
          .modal-carousel-slide { min-height: 260px; }
        }
        @media (max-width: 640px) {
          .modal-box { padding: 20px; }
          .modal-title { font-size: 1.25rem; }
          .modal-desc { font-size: 14px; }
          .modal-actions { flex-direction: column; }
          .btn-github, .btn-live { width: 100%; justify-content: center; }
          .card-desc { height: auto; -webkit-line-clamp: 4; }
        }
      `}</style>
    </div>
  );
};

/* ─────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────── */
type ProjectCardProps = { project: Project; onClick: () => void };
function ProjectCard({ project, onClick }: ProjectCardProps) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      className="proj-card"
      onClick={onClick}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="card-preview" style={{ background: project.previewBg }}>
        <div className="card-badge-row">
          <span className="cb-type">{project.type}</span>
          {project.hasFire && <span className="cb-fire">● Firebase</span>}
        </div>
        <PreviewContent type={project.previewContent} />
      </div>
      <div className="card-body">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-desc">{project.description}</p>
        <div className="card-tags">
          {project.tags.map((tag) =>
            tag.startsWith("+") ? (
              <span key={tag} className="card-tag extra">{tag}</span>
            ) : (
              <span key={tag} className="card-tag">{tag}</span>
            )
          )}
        </div>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="card-view-btn"
          onClick={(e) => e.stopPropagation()}
        >
          View Details
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────── */
export default function Projects() {
  const [activeModal, setActiveModal] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        padding: "80px 0",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#1f2937", marginBottom: 12 }}>
            <span style={{ color: "#ec4899" }}>02.</span> Featured Projects
          </h2>
          <p style={{ color: "#6b7280", fontSize: 16 }}>Recent work from my portfolio</p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setActiveModal(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeModal && <Modal project={activeModal} onClose={() => setActiveModal(null)} />}

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── PROJECTS GRID ── */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ── CARD ── */
        .proj-card {
          background: #ffffff;
          border: 1px solid rgba(236,72,153,0.12);
          border-radius: 16px;
          overflow: hidden;
          transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }
        .proj-card:hover {
          transform: translateY(-6px);
          border-color: rgba(236,72,153,0.5);
          box-shadow: 0 16px 40px rgba(236,72,153,0.12);
        }
        .card-preview {
          height: 200px; position: relative;
          overflow: hidden; display: flex; flex-direction: column;
        }
        .card-badge-row {
          position: absolute; top: 12px; left: 12px;
          display: flex; gap: 6px; z-index: 2;
        }
        .cb-type {
          background: #ec4899; color: #fff;
          font-size: 11px; font-weight: 700;
          padding: 3px 10px; border-radius: 20px; letter-spacing: 0.3px;
        }
        .cb-fire {
          background: #e67e22; color: #fff;
          font-size: 11px; font-weight: 600;
          padding: 3px 10px; border-radius: 20px;
          display: flex; align-items: center; gap: 4px;
        }
        .card-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .card-title { color: #111827; font-size: 1.15rem; font-weight: 700; margin-bottom: 8px; }
        .card-desc {
          color: #6b7280; font-size: 13.5px; line-height: 1.65; margin-bottom: 14px;
          height: 68px; overflow: hidden;
          display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;
        }
        .card-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }
        .card-tag {
          background: rgba(236,72,153,0.06); border: 1px solid rgba(236,72,153,0.2);
          color: #be185d; font-size: 12px; padding: 4px 10px; border-radius: 6px;
        }
        .card-tag.extra { color: #9d174d; border-style: dashed; }
        .card-view-btn {
          width: 100%; padding: 13px;
          background: linear-gradient(90deg, #ec4899, #db2777);
          border: none; border-radius: 10px;
          color: #fff; font-weight: 700; font-size: 14px;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: opacity .2s, transform .2s; letter-spacing: 0.3px;
          text-decoration: none;
          box-sizing: border-box;
          margin-top: auto;
        }
        .card-view-btn:hover { opacity: 0.9; transform: translateY(-1px); color: #fff; }

        /* ── PREVIEW CONTENT ── */
        .preview-srivari, .preview-gj, .preview-thirumathy,
        .preview-kavi, .preview-krishna, .preview-elite,
        .preview-maludoc, .preview-trip {
          width: 100%; height: 100%; display: flex; flex-direction: column;
          font-size: 10px; overflow: hidden;
        }
        .mock-nav {
          background: rgba(0,0,0,0.6); display: flex; align-items: center;
          padding: 6px 10px; gap: 8px; flex-shrink: 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .dark-nav { background: rgba(0,0,0,0.65); border-bottom: 1px solid rgba(255,255,255,0.06); }
        .mock-logo { color: #fff; font-weight: 700; font-size: 9px; margin-right: auto; }
        .mock-nav-links { display: flex; gap: 8px; font-size: 8px; }
        .mock-nav-links.light { color: #94a3b8; }

        /* Shared preview hero structure */
        .srivari-hero, .gj-hero, .thirumathy-hero,
        .kavi-hero, .krishna-hero, .elite-hero, .maludoc-hero {
          flex: 1; display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 12px; text-align: center; gap: 6px;
        }
        .srivari-hero { background: radial-gradient(ellipse at center, rgba(16,185,129,0.25) 0%, #051f15 70%); }
        .srivari-badge { font-size: 7px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; background: rgba(16,185,129,0.15); color: #34d399; padding: 2px 7px; border-radius: 12px; border: 1px solid rgba(16,185,129,0.3); }
        .srivari-title { color: #fff; font-size: 10px; font-weight: 700; max-width: 190px; line-height: 1.35; }
        .srivari-tags { display: flex; gap: 4px; flex-wrap: wrap; justify-content: center; }
        .srivari-tags span { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); color: #a7f3d0; font-size: 7px; padding: 2px 5px; border-radius: 4px; }

        .gj-hero { background: radial-gradient(ellipse at center, rgba(52,211,153,0.2) 0%, #082419 70%); }
        .gj-badge { font-size: 7px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; background: rgba(52,211,153,0.15); color: #6ee7b7; padding: 2px 7px; border-radius: 12px; border: 1px solid rgba(52,211,153,0.3); }
        .gj-title { color: #fff; font-size: 10px; font-weight: 700; max-width: 190px; line-height: 1.35; }
        .gj-tags { display: flex; gap: 4px; flex-wrap: wrap; justify-content: center; }
        .gj-tags span { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); color: #d1fae5; font-size: 7px; padding: 2px 5px; border-radius: 4px; }

        .thirumathy-hero { background: radial-gradient(ellipse at center, rgba(245,158,11,0.25) 0%, #221306 70%); }
        .thirumathy-badge { font-size: 7px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; background: rgba(245,158,11,0.18); color: #fbbf24; padding: 2px 7px; border-radius: 12px; border: 1px solid rgba(245,158,11,0.35); }
        .thirumathy-title { color: #fff; font-size: 10px; font-weight: 700; max-width: 190px; line-height: 1.35; }
        .thirumathy-tags { display: flex; gap: 4px; flex-wrap: wrap; justify-content: center; }
        .thirumathy-tags span { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); color: #fde68a; font-size: 7px; padding: 2px 5px; border-radius: 4px; }

        .kavi-hero { background: radial-gradient(ellipse at center, rgba(251,191,36,0.2) 0%, #240a0e 70%); }
        .kavi-badge { font-size: 7px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; background: rgba(239,68,68,0.2); color: #fca5a5; padding: 2px 7px; border-radius: 12px; border: 1px solid rgba(239,68,68,0.35); }
        .kavi-title { color: #fff; font-size: 10px; font-weight: 700; max-width: 190px; line-height: 1.35; }
        .kavi-tags { display: flex; gap: 4px; flex-wrap: wrap; justify-content: center; }
        .kavi-tags span { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); color: #fed7aa; font-size: 7px; padding: 2px 5px; border-radius: 4px; }

        .krishna-hero { background: radial-gradient(ellipse at center, rgba(16,185,129,0.2) 0%, #072014 70%); }
        .krishna-badge { font-size: 7px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; background: rgba(16,185,129,0.15); color: #6ee7b7; padding: 2px 7px; border-radius: 12px; border: 1px solid rgba(16,185,129,0.3); }
        .krishna-title { color: #fff; font-size: 10px; font-weight: 700; max-width: 190px; line-height: 1.35; }
        .krishna-tags { display: flex; gap: 4px; flex-wrap: wrap; justify-content: center; }
        .krishna-tags span { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); color: #bbf7d0; font-size: 7px; padding: 2px 5px; border-radius: 4px; }

        .elite-hero { background: radial-gradient(ellipse at center, rgba(0,212,255,0.18) 0%, #091226 70%); }
        .elite-stat-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 7px; padding: 6px 12px; width: 100%; max-width: 170px; }
        .elite-stat-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px; }
        .elite-stat-label { color: #94a3b8; font-size: 7px; }
        .elite-stat-val { color: #fff; font-size: 9px; font-weight: 700; }
        .elite-stat-pill { color: #34d399; font-size: 7px; font-weight: 600; text-align: left; }
        .elite-tags { display: flex; gap: 4px; flex-wrap: wrap; justify-content: center; }
        .elite-tags span { background: rgba(0,212,255,0.08); border: 1px solid rgba(0,212,255,0.2); color: #38bdf8; font-size: 7px; padding: 2px 5px; border-radius: 4px; }

        .maludoc-hero { background: radial-gradient(ellipse at center, rgba(168,85,247,0.22) 0%, #120a28 70%); }
        .maludoc-badge { font-size: 7px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; background: rgba(168,85,247,0.2); color: #c084fc; padding: 2px 7px; border-radius: 12px; border: 1px solid rgba(168,85,247,0.35); }
        .maludoc-terminal { background: rgba(0,0,0,0.45); border: 1px solid rgba(255,255,255,0.08); border-radius: 6px; padding: 5px 8px; width: 100%; max-width: 170px; display: flex; flex-direction: column; gap: 2px; text-align: left; font-family: monospace; }
        .maludoc-terminal code { color: #e2e8f0; font-size: 7px; }
        .maludoc-cursor { color: #34d399; font-size: 7px; font-weight: 600; }
        .maludoc-tags { display: flex; gap: 4px; flex-wrap: wrap; justify-content: center; }
        .maludoc-tags span { background: rgba(168,85,247,0.1); border: 1px solid rgba(168,85,247,0.25); color: #d8b4fe; font-size: 7px; padding: 2px 5px; border-radius: 4px; }

        .preview-trip { background: #061420; padding: 10px; }
        .trip-header { color: #fff; font-size: 10px; font-weight: 700; margin-bottom: 8px; }
        .trip-body { display: flex; flex-direction: column; gap: 6px; }
        .trip-card { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 6px; padding: 6px 8px; }
        .trip-dest { color: #fff; font-size: 8px; font-weight: 600; margin-bottom: 2px; }
        .trip-date { color: #64748b; font-size: 7px; }
        .trip-add { background: transparent; border: 1px dashed rgba(236,72,153,0.4); color: #ec4899; padding: 4px 10px; border-radius: 4px; font-size: 8px; cursor: pointer; align-self: flex-start; }
      `}</style>
    </section>
  );
}
