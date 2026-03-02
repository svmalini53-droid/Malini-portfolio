'use client';

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

type PreviewType =
  | "nextriad"
  | "crackers"
  | "quiz"
  | "taskmaster"
  | "trip"
  | "expense";

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
    badges: ["Web App"],
    hasFire: false,
    year: "2024",
    title: "Nextriad Solutions",
    description:
      "I co-founded Nextriad Solutions in 2024 along with my friend, with a vision to provide innovative, scalable, and client-focused digital solutions. As a Developer and Co-founder, I lead the technical vision and development.",
    tags: ["HTML", "Javascript", "TailWindCSS", "+1 more"],
    liveUrl: "#",
    githubUrl: "#",
    previewBg: "#0f1117",
    previewContent: "nextriad",
  },
  {
    id: 2,
    type: "Web App",
    badges: ["Web App"],
    hasFire: true,
    year: "2024",
    title: "Vinayaka Crackers",
    description:
      "A modern e-commerce solution with advanced features including real-time inventory management, secure payment processing, and comprehensive analytics dashboard.",
    tags: ["React", "CSS3", "Firebase", "+1 more"],
    liveUrl: "#",
    githubUrl: "#",
    previewBg: "#1a0800",
    previewContent: "crackers",
  },
  {
    id: 3,
    type: "Web App",
    badges: ["Web App"],
    hasFire: true,
    year: "2024",
    title: "Quiz Exam Application",
    description:
      "Implemented role-based system for Admin, Teacher, Student. Teachers can create quizzes; students can take exams and view results in real-time.",
    tags: ["Vue.js", "MongoDB", "Express", "+1 more"],
    liveUrl: "#",
    githubUrl: "#",
    previewBg: "#0a0f1a",
    previewContent: "quiz",
  },
  {
    id: 4,
    type: "Web App",
    badges: ["Web App"],
    hasFire: true,
    year: "2024",
    title: "TaskMaster",
    description:
      "It allows you to create, edit, and track tasks with ease. With features like priority setting, deadlines, and progress tracking, TaskMaster ensures you never miss an important task.",
    tags: ["HTML", "Tailwind CSS", "TypeScript", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
    previewBg: "#0d1117",
    previewContent: "taskmaster",
  },
  {
    id: 5,
    type: "Web App",
    badges: ["Web App"],
    hasFire: false,
    year: "2024",
    title: "Dynamic Trip Planner",
    description:
      "A responsive travel planner with real-time user profile management and Firebase Authentication. Plan trips with ease and manage your travel itinerary.",
    tags: ["TypeScript", "Tailwind", "Firebase"],
    liveUrl: "https://travel-malu.vercel.app/",
    githubUrl: "#",
    previewBg: "#061a10",
    previewContent: "trip",
  },
  {
    id: 6,
    type: "Web App",
    badges: ["Web App"],
    hasFire: false,
    year: "2024",
    title: "Expense Tracker App",
    description:
      "A MERN stack application to manage income and expenses with a dashboard UI and full CRUD operations. Track spending patterns and visualize financial data.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    previewBg: "#0a1a10",
    previewContent: "expense",
  },
];

/* ─────────────────────────────────────────
   PREVIEW CONTENT
───────────────────────────────────────── */
type PreviewContentProps = { type: PreviewType };
const PreviewContent = ({ type }: PreviewContentProps) => {
  if (type === "nextriad") {
    return (
      <div className="preview-nextriad">
        <div className="mock-nav">
          <span className="mock-logo">⚡ Nextriad Solutions</span>
          <div className="mock-nav-links">
            <span>Home</span><span>About</span><span>Services</span><span>Contact</span>
          </div>
          <button className="mock-btn-sm">Get Started</button>
        </div>
        <div className="mock-hero">
          <div className="mock-hero-text">
            <h3>Building Digital<br />Excellence Through<br />Innovation</h3>
            <p>We transform your ideas into powerful digital solutions.</p>
            <div className="mock-hero-btns">
              <button className="mock-btn-outline">Get Started →</button>
              <button className="mock-btn-ghost">View Our Work</button>
            </div>
          </div>
          <div className="mock-hero-graphic">
            <div className="mock-circle"><span>&#123;&#128;&#125;</span></div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "crackers") {
    return (
      <div className="preview-crackers">
        <div className="mock-nav dark-nav">
          <span className="mock-logo orange">Vinayaka Crackers</span>
          <div className="mock-nav-links light">
            <span>Home</span><span>Order Now</span><span>Contact</span><span>About</span>
          </div>
        </div>
        <div className="cracker-hero">
          <div className="cracker-glow"></div>
          <div className="cracker-idol">🪔</div>
          <h3 className="cracker-title">Vinayaka Crackers</h3>
          <button className="cracker-btn">Order Now</button>
        </div>
      </div>
    );
  }
  if (type === "quiz") {
    return (
      <div className="preview-quiz">
        <div className="quiz-card">
          <h4>Login</h4>
          <p className="quiz-sub">Enter your credentials to access your account</p>
          <div className="quiz-field"><label>Email</label><div className="quiz-input">example@email.com</div></div>
          <div className="quiz-field"><label>Password</label><div className="quiz-input">••••••••</div></div>
          <button className="quiz-login-btn">Login</button>
        </div>
      </div>
    );
  }
  if (type === "taskmaster") {
    return (
      <div className="preview-task">
        <div className="task-header">
          <span className="task-title">TaskMaster</span>
          <span className="task-sub">Web App</span>
        </div>
        <div className="task-body">
          <div className="task-label">Your Tasks</div>
          <div className="task-filters">
            <span className="task-filter">All</span>
            <span className="task-filter">Active</span>
            <span className="task-filter active-filter">Completed</span>
          </div>
          <div className="task-item">
            <span className="task-check">✓</span>
            <div>
              <div className="task-name striked">Set up project structure</div>
              <div className="task-date">Created on August 7th, 2025</div>
            </div>
          </div>
          <div className="task-item">
            <span className="task-check">✓</span>
            <div><div className="task-name striked">Design UI components</div></div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "trip") {
    return (
      <div className="preview-trip">
        <div className="trip-header">✈️ Dynamic Trip Planner</div>
        <div className="trip-body">
          <div className="trip-card">
            <div className="trip-dest">📍 Paris, France</div>
            <div className="trip-date">Jul 12 – Jul 19, 2024</div>
          </div>
          <div className="trip-card">
            <div className="trip-dest">🗼 Tokyo, Japan</div>
            <div className="trip-date">Sep 5 – Sep 15, 2024</div>
          </div>
          <button className="trip-add">+ Add Destination</button>
        </div>
      </div>
    );
  }
  if (type === "expense") {
    return (
      <div className="preview-expense">
        <div className="exp-header">💰 Expense Tracker</div>
        <div className="exp-stats">
          <div className="exp-stat green">+$3,200<span>Income</span></div>
          <div className="exp-stat red">-$1,540<span>Expenses</span></div>
          <div className="exp-stat blue">$1,660<span>Balance</span></div>
        </div>
        <div className="exp-bar-wrap">
          <div className="exp-bar" style={{ width: "70%", background: "#22c55e" }}></div>
          <div className="exp-bar" style={{ width: "48%", background: "#ef4444" }}></div>
        </div>
      </div>
    );
  }
  return null;
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
        background: `radial-gradient(ellipse at 40% 40%, rgba(0,212,255,0.10) 0%, transparent 70%), ${project.previewBg}`,
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
          {project.previewContent === "nextriad" ? "⚡" :
           project.previewContent === "crackers" ? "🪔" :
           project.previewContent === "quiz" ? "📝" :
           project.previewContent === "taskmaster" ? "✅" :
           project.previewContent === "trip" ? "✈️" : "💰"}
        </div>
        <div style={{ color: "#fff", fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{project.title}</div>
        <div style={{ color: "#94a3b8", fontSize: 12 }}>{project.type} · {project.year}</div>
        <div style={{ marginTop: 12, display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center" }}>
          {project.tags.filter(t => !t.startsWith("+")).map(tag => (
            <span key={tag} style={{
              background: "rgba(0,212,255,0.1)",
              border: "1px solid rgba(0,212,255,0.25)",
              color: "#00d4ff",
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
        background: `linear-gradient(135deg, ${project.previewBg} 0%, #0a0f20 100%)`,
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
            background: "rgba(0,212,255,0.08)",
            border: "1px solid rgba(0,212,255,0.18)",
            borderRadius: 8,
            padding: "6px 0",
            textAlign: "center",
            color: "#00d4ff",
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
              <a href={project.githubUrl} className="btn-github" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                View Code
              </a>
              <a href={project.liveUrl} className="btn-live" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Visit Live Site
              </a>
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
        .badge-type { background: #00d4ff; color: #000; font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: 20px; }
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
          background: rgba(0,212,255,0.25);
          border-color: rgba(0,212,255,0.6);
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
          background: #00d4ff;
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
          background: #00d4ff; border: none; color: #000; text-decoration: none;
          padding: 10px 24px; border-radius: 8px; font-size: 14px; font-weight: 600;
          transition: all .2s; flex: 1; justify-content: center;
        }
        .btn-live:hover { background: #00bfe8; transform: translateY(-1px); }
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
type ProjectCardProps = { project: Project; onClick: () => void; slideFrom: "left" | "right" };
function ProjectCard({ project, onClick, slideFrom }: ProjectCardProps) {
  const cardVariants = {
    hidden: (dir: "left" | "right") => ({
      opacity: 0,
      x: dir === "left" ? -26 : 26,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="proj-card"
      onClick={onClick}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={slideFrom}
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
        <button className="card-view-btn">
          View Details
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────── */
export default function Projects() {
  const [activeModal, setActiveModal] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideClass, setSlideClass] = useState("slide-visible");
  const [visibleCount, setVisibleCount] = useState(3);

  // Responsive visible count
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, projects.length - visibleCount);

  const goTo = useCallback(
    (nextIndex: number, dir: "left" | "right") => {
      if (isAnimating) return;
      const clamped = Math.max(0, Math.min(nextIndex, maxIndex));
      if (clamped === currentIndex) return;

      setIsAnimating(true);
      // Slide out
      setSlideClass(dir === "right" ? "slide-exit-left" : "slide-exit-right");

      setTimeout(() => {
        setCurrentIndex(clamped);
        // Prepare enter from opposite side (no transition)
        setSlideClass(dir === "right" ? "slide-enter-right-start" : "slide-enter-left-start");

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            // Animate in
            setSlideClass("slide-visible");
            setTimeout(() => setIsAnimating(false), 350);
          });
        });
      }, 300);
    },
    [isAnimating, currentIndex, maxIndex]
  );

  const prev = () => goTo(currentIndex - 1, "left");
  const next = () => goTo(currentIndex + 1, "right");

  // Touch / drag support
  const dragStart = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => { dragStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (dragStart.current === null) return;
    const diff = dragStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    dragStart.current = null;
  };
  const onMouseDown = (e: React.MouseEvent) => { dragStart.current = e.clientX; };
  const onMouseUp = (e: React.MouseEvent) => {
    if (dragStart.current === null) return;
    const diff = dragStart.current - e.clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    dragStart.current = null;
  };

  const dotCount = maxIndex + 1;

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (maxIndex === 0) return;
    if (activeModal) return;
    const id = setInterval(() => {
      const nextIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
      goTo(nextIndex, "right");
    }, 3000);
    return () => clearInterval(id);
  }, [activeModal, currentIndex, goTo, maxIndex]);

  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        background: "#060d1f",
        padding: "80px 0",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#fff", marginBottom: 12 }}>
            <span style={{ color: "#00d4ff" }}>02.</span> Featured Projects
          </h2>
          <p style={{ color: "#64748b", fontSize: 16 }}>Recent work from my portfolio</p>
        </div>

        {/* Carousel */}
        <div className="carousel-outer">
          {/* Track */}
          <div
            className="carousel-track-wrapper"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
          >
            <div
              className={`carousel-track ${slideClass}`}
              style={{ gridTemplateColumns: `repeat(${visibleCount}, 1fr)` }}
            >
              {projects.slice(currentIndex, currentIndex + visibleCount).map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  slideFrom={(currentIndex + idx) % 2 === 0 ? "left" : "right"}
                  onClick={() => setActiveModal(project)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Dots + Arrows */}
        <div className="carousel-nav" role="tablist" aria-label="Project slides">
          <button
            className={`carousel-arrow arrow-bottom${currentIndex === 0 ? " arrow-disabled" : ""}`}
            onClick={prev}
            aria-label="Previous slide"
            aria-disabled={currentIndex === 0}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          {Array.from({ length: dotCount }).map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === currentIndex ? " dot-active" : ""}`}
              onClick={() => goTo(i, i > currentIndex ? "right" : "left")}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === currentIndex ? "true" : "false"}
              role="tab"
            />
          ))}
          <button
            className={`carousel-arrow arrow-bottom${currentIndex >= maxIndex ? " arrow-disabled" : ""}`}
            onClick={next}
            aria-label="Next slide"
            aria-disabled={currentIndex >= maxIndex}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal */}
      {activeModal && <Modal project={activeModal} onClose={() => setActiveModal(null)} />}

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── CAROUSEL ── */
        .carousel-outer {
          position: relative;
          display: flex;
          align-items: center;
        }
        .carousel-track-wrapper {
          flex: 1;
          overflow: hidden;
          cursor: grab;
          user-select: none;
        }
        .carousel-track-wrapper:active { cursor: grabbing; }

        .carousel-track {
          display: grid;
          gap: 24px;
          transition: transform 0.32s cubic-bezier(0.4,0,0.2,1), opacity 0.32s ease;
        }

        /* Slide states */
        .slide-visible     { transform: translateX(0);     opacity: 1; }
        .slide-exit-left   { transform: translateX(-60px); opacity: 0; pointer-events: none; }
        .slide-exit-right  { transform: translateX(60px);  opacity: 0; pointer-events: none; }
        /* Start positions with NO transition (snap instantly) */
        .slide-enter-right-start { transform: translateX(60px);  opacity: 0; transition: none !important; }
        .slide-enter-left-start  { transform: translateX(-60px); opacity: 0; transition: none !important; }

        /* ── ARROWS ── */
        .carousel-arrow {
          flex-shrink: 0;
          width: 40px; height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.14);
          color: #fff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: background .2s, border-color .2s, transform .15s;
        }
        .carousel-arrow:hover:not(.arrow-disabled) {
          background: rgba(0,212,255,0.15);
          border-color: rgba(0,212,255,0.55);
          transform: scale(1.08);
        }
        .arrow-disabled { opacity: 0.28; cursor: not-allowed; }

        /* ── DOTS ── */
        .carousel-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 28px;
        }
        .carousel-dot {
          height: 8px; width: 8px;
          border-radius: 4px;
          background: rgba(255,255,255,0.2);
          border: none;
          cursor: pointer;
          transition: width .3s ease, background .3s ease;
          padding: 0;
        }
        .dot-active {
          width: 26px;
          background: #00d4ff;
        }

        @media (max-width: 768px) {
          .carousel-arrow {
            width: 36px; height: 36px;
          }
        }

        /* ── CARD ── */
        .proj-card {
          background: #0d1628;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          overflow: hidden;
          transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
          cursor: pointer;
        }
        .proj-card:hover {
          transform: translateY(-6px);
          border-color: rgba(0,212,255,0.4);
          box-shadow: 0 16px 40px rgba(0,212,255,0.08);
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
          background: #00d4ff; color: #000;
          font-size: 11px; font-weight: 700;
          padding: 3px 10px; border-radius: 20px; letter-spacing: 0.3px;
        }
        .cb-fire {
          background: #e67e22; color: #fff;
          font-size: 11px; font-weight: 600;
          padding: 3px 10px; border-radius: 20px;
          display: flex; align-items: center; gap: 4px;
        }
        .card-body { padding: 20px; }
        .card-title { color: #fff; font-size: 1.15rem; font-weight: 700; margin-bottom: 8px; }
        .card-desc {
          color: #64748b; font-size: 13.5px; line-height: 1.65; margin-bottom: 14px;
          height: 68px; overflow: hidden;
          display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;
        }
        .card-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }
        .card-tag {
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
          color: #94a3b8; font-size: 12px; padding: 4px 10px; border-radius: 6px;
        }
        .card-tag.extra { color: #64748b; border-style: dashed; }
        .card-view-btn {
          width: 100%; padding: 13px;
          background: linear-gradient(90deg, #00d4ff, #0099ff);
          border: none; border-radius: 10px;
          color: #000; font-weight: 700; font-size: 14px;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: opacity .2s, transform .2s; letter-spacing: 0.3px;
        }
        .card-view-btn:hover { opacity: 0.9; transform: translateY(-1px); }

        /* ── PREVIEW CONTENT ── */
        .preview-nextriad, .preview-crackers, .preview-quiz,
        .preview-task, .preview-trip, .preview-expense {
          width: 100%; height: 100%; display: flex; flex-direction: column;
          font-size: 10px; overflow: hidden;
        }
        .mock-nav {
          background: #111; display: flex; align-items: center;
          padding: 6px 10px; gap: 8px; flex-shrink: 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .mock-logo { color: #fff; font-weight: 700; font-size: 9px; margin-right: auto; }
        .mock-logo.orange { color: #f97316; }
        .mock-nav-links { display: flex; gap: 8px; color: #94a3b8; font-size: 8px; }
        .mock-nav-links.light { color: #e2e8f0; }
        .mock-btn-sm { background: #00d4ff; color: #000; border: none; padding: 2px 8px; border-radius: 4px; font-size: 8px; font-weight: 600; cursor: pointer; }
        .mock-hero { display: flex; flex: 1; align-items: center; padding: 10px; gap: 8px; background: #111; }
        .mock-hero-text { flex: 1; }
        .mock-hero-text h3 { color: #fff; font-size: 10px; font-weight: 700; line-height: 1.4; margin-bottom: 4px; }
        .mock-hero-text p { color: #64748b; font-size: 7px; margin-bottom: 6px; }
        .mock-hero-btns { display: flex; gap: 4px; }
        .mock-btn-outline { border: 1px solid #00d4ff; color: #00d4ff; background: transparent; padding: 2px 6px; border-radius: 3px; font-size: 7px; cursor: pointer; }
        .mock-btn-ghost { color: #64748b; background: transparent; border: none; padding: 2px 6px; font-size: 7px; cursor: pointer; }
        .mock-hero-graphic { width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; }
        .mock-circle { width: 50px; height: 50px; border-radius: 50%; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 18px; }
        .dark-nav { background: rgba(0,0,0,0.6); border-bottom: 1px solid rgba(255,255,255,0.05); }
        .cracker-hero { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; background: radial-gradient(ellipse at center, #3d1000 0%, #1a0800 60%, #0a0000 100%); position: relative; padding: 8px; }
        .cracker-glow { position: absolute; width: 60px; height: 60px; background: radial-gradient(circle, rgba(255,140,0,0.3), transparent); border-radius: 50%; top: 10px; left: 50%; transform: translateX(-50%); }
        .cracker-idol { font-size: 22px; margin-bottom: 4px; }
        .cracker-title { color: #fff; font-size: 9px; font-weight: 700; margin-bottom: 6px; }
        .cracker-btn { background: #c0392b; color: #fff; border: none; padding: 3px 10px; border-radius: 3px; font-size: 7px; cursor: pointer; }
        .preview-quiz { background: #0a0f1a; align-items: center; justify-content: center; padding: 12px; }
        .quiz-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 12px; width: 100%; max-width: 180px; }
        .quiz-card h4 { color: #fff; font-size: 10px; font-weight: 700; margin-bottom: 2px; }
        .quiz-sub { color: #64748b; font-size: 7px; margin-bottom: 8px; }
        .quiz-field { margin-bottom: 6px; }
        .quiz-field label { color: #94a3b8; font-size: 7px; display: block; margin-bottom: 2px; }
        .quiz-input { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 3px; padding: 3px 6px; color: #64748b; font-size: 7px; }
        .quiz-login-btn { width: 100%; background: #00d4ff; color: #000; border: none; padding: 4px; border-radius: 3px; font-size: 7px; font-weight: 700; cursor: pointer; margin-top: 6px; }
        .preview-task { background: #0d1117; padding: 10px; }
        .task-header { display: flex; align-items: baseline; gap: 6px; margin-bottom: 8px; }
        .task-title { color: #fff; font-size: 10px; font-weight: 700; }
        .task-sub { color: #00d4ff; font-size: 8px; }
        .task-body { background: rgba(255,255,255,0.03); border-radius: 6px; padding: 8px; }
        .task-label { color: #fff; font-size: 8px; font-weight: 600; margin-bottom: 6px; }
        .task-filters { display: flex; gap: 4px; margin-bottom: 8px; }
        .task-filter { color: #64748b; font-size: 7px; padding: 2px 6px; border-radius: 3px; background: rgba(255,255,255,0.04); }
        .active-filter { background: rgba(0,212,255,0.15); color: #00d4ff; }
        .task-item { display: flex; align-items: flex-start; gap: 6px; padding: 5px; background: rgba(255,255,255,0.03); border-radius: 4px; margin-bottom: 4px; }
        .task-check { color: #22c55e; font-size: 8px; margin-top: 1px; }
        .task-name { color: #94a3b8; font-size: 8px; }
        .task-name.striked { text-decoration: line-through; color: #475569; }
        .task-date { color: #475569; font-size: 7px; margin-top: 1px; }
        .preview-trip { background: #061420; padding: 10px; }
        .trip-header { color: #fff; font-size: 10px; font-weight: 700; margin-bottom: 8px; }
        .trip-body { display: flex; flex-direction: column; gap: 6px; }
        .trip-card { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 6px; padding: 6px 8px; }
        .trip-dest { color: #fff; font-size: 8px; font-weight: 600; margin-bottom: 2px; }
        .trip-date { color: #64748b; font-size: 7px; }
        .trip-add { background: transparent; border: 1px dashed rgba(0,212,255,0.4); color: #00d4ff; padding: 4px 10px; border-radius: 4px; font-size: 8px; cursor: pointer; align-self: flex-start; }
        .preview-expense { background: #060d1f; padding: 10px; }
        .exp-header { color: #fff; font-size: 10px; font-weight: 700; margin-bottom: 8px; }
        .exp-stats { display: flex; gap: 6px; margin-bottom: 10px; }
        .exp-stat { flex: 1; background: rgba(255,255,255,0.04); border-radius: 5px; padding: 5px; font-size: 9px; font-weight: 700; display: flex; flex-direction: column; gap: 1px; }
        .exp-stat span { font-size: 7px; font-weight: 400; color: #64748b; }
        .exp-stat.green { color: #22c55e; }
        .exp-stat.red { color: #ef4444; }
        .exp-stat.blue { color: #00d4ff; }
        .exp-bar-wrap { display: flex; flex-direction: column; gap: 4px; }
        .exp-bar { height: 5px; border-radius: 3px; }
      `}</style>
    </section>
  );
}
