import { useState, useEffect, useRef } from "react";
import EntrancePage from "./EntrancePage";

/* ═══════════════════════════════════════════════════
   🖼️  HOW TO USE YOUR OWN IMAGES:
   
   1. Put your image files in the "src/images/" folder
   2. Update the import lines below to match your file names
   
   Example: If your files are "mycouple.jpg", "date1.png", "date2.png":
      import headerImg from "./images/mycouple.jpg";
      import photo1Img from "./images/date1.png";
      import photo2Img from "./images/date2.png";
   ═══════════════════════════════════════════════════ */

// 🔽 CHANGE THESE IMPORTS to point to your own image files:
import headerImg from "./images/Header.jpeg";
import photo1Img from "./images/Hug.jpeg";
import photo2Img from "./images/kiss.jpeg";

/* You can also change the text below */
const SUBTITLE_TEXT = "2 years together";
const PHOTO1_CAPTION = "quiet moments";
const PHOTO2_CAPTION = "always together";

/* ═══════════════════════════════════════════════════ */

/* ───────── Intersection observer hook ───────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ───────── Tiny heart SVG ───────── */
function Heart({ className = "", size = 16 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#c41e3a" className={className}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN SCRAPBOOK PAGE
   ═══════════════════════════════════════════════════ */
function ScrapbookPage() {
  const [loaded, setLoaded] = useState(false);
  const photosRef = useInView(0.1);
  const titleRef = useInView(0.1);
  const bottomRef = useInView(0.1);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* ═══════ FULL PAGE WRAPPER ═══════ */}
      <div style={{ width: "100%", maxWidth: 900, margin: "0 auto", position: "relative" }}>

        {/* ─── HEADER IMAGE ─── */}
        <div
          style={{
            position: "relative",
            width: "100%",
            opacity: loaded ? 1 : 0,
            transition: "opacity 2s ease",
          }}
        >
          <img
            src={headerImg}
            alt="Couple"
            style={{
              width: "100%",
              display: "block",
              filter: "grayscale(100%) brightness(0.7) contrast(1.1)",
            }}
          />

          {/* Gradient fade to cream at bottom */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "50%",
              background: "linear-gradient(to bottom, transparent 0%, #f0ebe2 100%)",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* ─── PAPER / CONTENT SECTION ─── */}
        <div
          style={{
            backgroundColor: "#f0ebe2",
            position: "relative",
            paddingBottom: 40,
          }}
        >
          {/* Paper texture overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.03,
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
              pointerEvents: "none",
            }}
          />

          {/* ── Two photos side by side ── */}
          <div
            ref={photosRef.ref}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: 30,
              padding: "30px 20px 20px",
              opacity: photosRef.visible ? 1 : 0,
              transform: photosRef.visible ? "translateY(0)" : "translateY(30px)",
              transition: "all 1s ease 0.3s",
            }}
          >
            {/* Photo 1 */}
            <div
              style={{
                background: "#fff",
                padding: 10,
                paddingBottom: 45,
                transform: "rotate(-2deg)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
              }}
            >
              <div style={{ width: 200, height: 260, overflow: "hidden", background: "#ccc" }}>
                <img
                  src={photo1Img}
                  alt="Quiet moment"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "grayscale(100%)",
                    display: "block",
                  }}
                />
              </div>
              <p
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  color: "#c41e3a",
                  textAlign: "center",
                  marginTop: 10,
                  fontSize: 16,
                  opacity: 0.8,
                }}
              >
                {PHOTO1_CAPTION}
              </p>
            </div>

            {/* Photo 2 */}
            <div
              style={{
                background: "#fff",
                padding: 10,
                paddingBottom: 45,
                transform: "rotate(2deg)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
              }}
            >
              <div style={{ width: 200, height: 260, overflow: "hidden", background: "#ccc" }}>
                <img
                  src={photo2Img}
                  alt="Warm moment"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "grayscale(100%)",
                    display: "block",
                  }}
                />
              </div>
              <p
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  color: "#c41e3a",
                  textAlign: "center",
                  marginTop: 10,
                  fontSize: 16,
                  opacity: 0.8,
                }}
              >
                {PHOTO2_CAPTION}
              </p>
            </div>
          </div>

          {/* ── Main title: Happy Valentine's Day ── */}
          <div
            ref={titleRef.ref}
            style={{
              textAlign: "center",
              padding: "30px 20px",
              opacity: titleRef.visible ? 1 : 0,
              transform: titleRef.visible ? "scale(1)" : "scale(0.95)",
              transition: "all 1s ease 0.5s",
              position: "relative",
            }}
          >
            <h1
              style={{
                fontFamily: "'Great Vibes', cursive",
                color: "#c41e3a",
                fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
                lineHeight: 1.2,
                margin: 0,
                textShadow: "0 2px 10px rgba(196,30,58,0.15)",
              }}
            >
              Happy Valentine's Day
            </h1>

            {/* Small hearts */}
            <div style={{ position: "absolute", top: 5, left: "15%" }}>
              <Heart className="animate-heartbeat" size={14} />
            </div>
            <div style={{ position: "absolute", bottom: 5, right: "15%" }}>
              <Heart className="animate-heartbeat" size={12} />
            </div>
          </div>

          {/* ── Subtitle + red line ── */}
          <div
            ref={bottomRef.ref}
            style={{
              textAlign: "center",
              padding: "10px 20px 40px",
              opacity: bottomRef.visible ? 1 : 0,
              transform: bottomRef.visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 1s ease 0.7s",
            }}
          >
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#666",
                fontSize: 14,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              {SUBTITLE_TEXT}
            </p>

            {/* Thin red line */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 16,
              }}
            >
              <div
                style={{
                  height: 1.5,
                  backgroundColor: "rgba(196,30,58,0.5)",
                  width: bottomRef.visible ? 80 : 0,
                  transition: "width 1.5s ease-out 1s",
                }}
              />
            </div>

            {/* Tiny heart */}
            <div style={{ marginTop: 16, display: "flex", justifyContent: "center" }}>
              <Heart className="animate-heartbeat" size={10} />
            </div>
          </div>

          {/* Torn bottom edge */}
          <svg
            viewBox="0 0 1200 40"
            style={{
              display: "block",
              width: "100%",
              height: 30,
              position: "absolute",
              bottom: -29,
              left: 0,
            }}
            preserveAspectRatio="none"
          >
            <path
              d="M0 0 L1200 0 L1200 25 Q1185 32 1170 22 Q1155 35 1140 26 Q1125 37 1110 24 Q1095 33 1080 26 Q1065 36 1050 25 Q1035 37 1020 29 Q1005 35 990 23 Q975 31 960 27 Q945 36 930 24 Q915 33 900 26 Q885 37 870 25 Q855 32 840 28 Q825 35 810 23 Q795 31 780 26 Q765 37 750 29 Q735 33 720 24 Q705 36 690 27 Q675 34 660 25 Q645 37 630 28 Q615 33 600 24 Q585 36 570 26 Q555 32 540 25 Q525 37 510 29 Q495 35 480 23 Q465 31 450 27 Q435 36 420 24 Q405 33 390 26 Q375 37 360 25 Q345 32 330 28 Q315 35 300 23 Q285 31 270 26 Q255 37 240 29 Q225 33 210 24 Q195 36 180 27 Q165 34 150 25 Q135 37 120 28 Q105 33 90 24 Q75 36 60 26 Q45 32 30 25 Q15 37 0 29Z"
              fill="#f0ebe2"
            />
          </svg>
        </div>

        {/* ─── FOOTER ─── */}
        <div style={{ textAlign: "center", padding: "50px 20px 30px" }}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#666",
              fontSize: 12,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            made with love
          </p>
          <div style={{ marginTop: 10, display: "flex", justifyContent: "center", gap: 8 }}>
            <Heart size={8} className="opacity-20" />
            <Heart size={8} className="opacity-40" />
            <Heart size={8} className="opacity-20" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN APP — entrance → scrapbook
   ═══════════════════════════════════════════════════ */
export function App() {
  const [entered, setEntered] = useState(false);

  if (!entered) {
    return <EntrancePage onAccept={() => setEntered(true)} />;
  }

  return <ScrapbookPage />;
}
