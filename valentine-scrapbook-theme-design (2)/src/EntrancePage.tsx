import { useState, useEffect } from "react";

/* ─── Messages that get progressively sadder ─── */
const stages = [
  {
    question: "Will you be my Valentine?",
    emoji: "🥰",
    noText: "No",
    mood: "hopeful",
    bg: "rgba(196, 30, 58, 0.05)",
  },
  {
    question: "Are you sure? Please?",
    emoji: "🥺",
    noText: "Still no",
    mood: "worried",
    bg: "rgba(196, 30, 58, 0.08)",
  },
  {
    question: "Really? You're breaking my heart...",
    emoji: "😢",
    noText: "Hmm, no",
    mood: "sad",
    bg: "rgba(196, 30, 58, 0.1)",
  },
  {
    question: "I'm literally crying right now...",
    emoji: "😭",
    noText: "Nope",
    mood: "crying",
    bg: "rgba(196, 30, 58, 0.12)",
  },
  {
    question: "My heart can't take this anymore!",
    emoji: "💔",
    noText: "Not yet",
    mood: "heartbroken",
    bg: "rgba(196, 30, 58, 0.15)",
  },
  {
    question: "I'll be sad forever without you...",
    emoji: "😿",
    noText: "Still thinking",
    mood: "devastated",
    bg: "rgba(196, 30, 58, 0.18)",
  },
  {
    question: "Please don't do this to me...",
    emoji: "🥀",
    noText: "Maybe not",
    mood: "begging",
    bg: "rgba(196, 30, 58, 0.2)",
  },
  {
    question: "I can't breathe... say yes!",
    emoji: "😵",
    noText: "Let me think",
    mood: "desperate",
    bg: "rgba(196, 30, 58, 0.22)",
  },
  {
    question: "I'll keep asking until forever...",
    emoji: "🫠",
    noText: "...",
    mood: "melting",
    bg: "rgba(196, 30, 58, 0.25)",
  },
  {
    question: "PLEASE! I'm on my knees!!! 🧎",
    emoji: "😩",
    noText: "Fine... no",
    mood: "on-knees",
    bg: "rgba(196, 30, 58, 0.28)",
  },
  {
    question: "You know you want to say yes...",
    emoji: "👉👈",
    noText: "...",
    mood: "shy-push",
    bg: "rgba(196, 30, 58, 0.3)",
  },
  {
    question: "Just click yes... the button is right there!",
    emoji: "😤",
    noText: ".",
    mood: "frustrated",
    bg: "rgba(196, 30, 58, 0.33)",
  },
];

/* ─── Falling tears component ─── */
function FallingTears({ count }: { count: number }) {
  const tears = Array.from({ length: Math.min(count * 3, 30) }, (_, i) => ({
    id: i,
    left: 5 + Math.random() * 90,
    delay: Math.random() * 2,
    duration: 1.5 + Math.random() * 2,
    size: 10 + Math.random() * 14,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {tears.map((t) => (
        <div
          key={t.id}
          className="absolute animate-tear"
          style={{
            left: `${t.left}%`,
            top: "-20px",
            animationDelay: `${t.delay}s`,
            animationDuration: `${t.duration}s`,
            fontSize: `${t.size}px`,
          }}
        >
          💧
        </div>
      ))}
    </div>
  );
}

/* ─── Broken hearts floating ─── */
function BrokenHearts({ count }: { count: number }) {
  if (count < 3) return null;
  const hearts = Array.from({ length: Math.min((count - 2) * 2, 15) }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 3,
    size: 12 + Math.random() * 16,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute animate-broken-float"
          style={{
            left: `${h.left}%`,
            bottom: "-30px",
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            fontSize: `${h.size}px`,
            transform: `rotate(${h.rotation}deg)`,
          }}
        >
          💔
        </div>
      ))}
    </div>
  );
}

/* ─── Sad face SVG ─── */
function SadFace({ stage }: { stage: number }) {
  const sadness = Math.min(stage / (stages.length - 1), 1);
  const mouthCurve = 10 + sadness * 20; // mouth gets sadder
  const eyebrowTilt = sadness * 15;
  const tearOpacity = stage >= 2 ? Math.min(0.3 + sadness * 0.7, 1) : 0;

  return (
    <svg
      viewBox="0 0 120 120"
      className="transition-all duration-700"
      style={{
        width: `${100 + stage * 5}px`,
        filter: `grayscale(${Math.max(0, sadness * 0.5)})`,
      }}
    >
      {/* Face circle */}
      <circle
        cx="60"
        cy="60"
        r="55"
        fill="none"
        stroke="#c41e3a"
        strokeWidth="2"
        opacity={0.6 + sadness * 0.4}
      />

      {/* Left eyebrow - tilting with sadness */}
      <line
        x1={32}
        y1={35 - eyebrowTilt * 0.3}
        x2={48}
        y2={35 + eyebrowTilt * 0.3}
        stroke="#c41e3a"
        strokeWidth="2"
        strokeLinecap="round"
        className="transition-all duration-700"
      />
      {/* Right eyebrow */}
      <line
        x1={72}
        y1={35 + eyebrowTilt * 0.3}
        x2={88}
        y2={35 - eyebrowTilt * 0.3}
        stroke="#c41e3a"
        strokeWidth="2"
        strokeLinecap="round"
        className="transition-all duration-700"
      />

      {/* Left eye */}
      <circle cx="42" cy="48" r={4 + sadness * 2} fill="#c41e3a" className="transition-all duration-700" />
      {/* Right eye */}
      <circle cx="78" cy="48" r={4 + sadness * 2} fill="#c41e3a" className="transition-all duration-700" />

      {/* Left tear */}
      <ellipse
        cx="42"
        cy={58 + sadness * 4}
        rx="3"
        ry={4 + sadness * 3}
        fill="#6cacda"
        opacity={tearOpacity}
        className="transition-all duration-700 animate-tear-drip"
      />
      {/* Right tear */}
      <ellipse
        cx="78"
        cy={58 + sadness * 4}
        rx="3"
        ry={4 + sadness * 3}
        fill="#6cacda"
        opacity={tearOpacity}
        className="transition-all duration-700 animate-tear-drip"
        style={{ animationDelay: "0.5s" }}
      />

      {/* Sad mouth - curves more with sadness */}
      <path
        d={`M 35 ${80 + sadness * 5} Q 60 ${80 - mouthCurve + sadness * 5} 85 ${80 + sadness * 5}`}
        fill="none"
        stroke="#c41e3a"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="transition-all duration-700"
      />

      {/* Quivering lip effect when very sad */}
      {stage >= 5 && (
        <path
          d={`M 42 ${83 + sadness * 5} Q 60 ${83 - mouthCurve * 0.3 + sadness * 5} 78 ${83 + sadness * 5}`}
          fill="none"
          stroke="#c41e3a"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.3"
          className="animate-quiver"
        />
      )}
    </svg>
  );
}

/* ═══════════════════════════════════════════════════
   ENTRANCE PAGE COMPONENT
   ═══════════════════════════════════════════════════ */
export default function EntrancePage({ onAccept }: { onAccept: () => void }) {
  const [stage, setStage] = useState(0);
  const [isShaking, setIsShaking] = useState(false);
  const [noButtonOffset, setNoButtonOffset] = useState({ x: 0, y: 0 });
  const [showConfetti, setShowConfetti] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const currentStage = stages[Math.min(stage, stages.length - 1)];

  // Yes button grows bigger with each "No" click
  const yesScale = 1 + stage * 0.15;
  const yesPadding = `${12 + stage * 2}px ${32 + stage * 4}px`;
  const yesFontSize = `${16 + stage * 1.5}px`;

  // No button shrinks with each click
  const noScale = Math.max(1 - stage * 0.06, 0.4);
  const noOpacity = Math.max(1 - stage * 0.06, 0.3);

  // Background gets darker/more dramatic
  const bgDarkness = Math.min(stage * 0.02, 0.15);

  const handleNo = () => {
    setStage((prev) => prev + 1);
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 600);

    // After stage 6, the No button starts running away
    if (stage >= 5) {
      const maxX = 150;
      const maxY = 80;
      setNoButtonOffset({
        x: (Math.random() - 0.5) * maxX * 2,
        y: (Math.random() - 0.5) * maxY * 2,
      });
    }
  };

  const handleYes = () => {
    setShowConfetti(true);
    setAccepted(true);
    setTimeout(() => {
      onAccept();
    }, 2000);
  };

  // Falling hearts confetti on accept
  useEffect(() => {
    if (!showConfetti) return;
    // Confetti effect is handled via CSS
  }, [showConfetti]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden transition-all duration-700"
      style={{
        background: `radial-gradient(ellipse at center, ${currentStage.bg}, rgba(10,10,10,${0.97 + bgDarkness}))`,
      }}
    >
      {/* Background grain */}
      <div className="absolute inset-0 grain-overlay opacity-20 pointer-events-none" />

      {/* Falling tears when sad */}
      {stage >= 2 && !accepted && <FallingTears count={stage} />}

      {/* Broken hearts floating up */}
      {!accepted && <BrokenHearts count={stage} />}

      {/* Confetti hearts when accepted */}
      {showConfetti && <ConfettiHearts />}

      {/* Main card */}
      <div
        className={`relative z-50 text-center px-6 sm:px-12 py-10 sm:py-14 max-w-lg mx-4 rounded-sm
          ${isShaking ? "animate-shake" : ""}
          ${accepted ? "animate-scale-up" : "animate-fade-in-entrance"}
        `}
        style={{
          background: `linear-gradient(135deg, rgba(240,235,226,${0.95 - bgDarkness}), rgba(245,240,232,${0.9 - bgDarkness}))`,
          boxShadow: `0 20px 60px rgba(0,0,0,${0.3 + stage * 0.03}), 0 0 ${20 + stage * 5}px rgba(196,30,58,${0.05 + stage * 0.02})`,
        }}
      >
        {/* Torn paper texture */}
        <div className="absolute inset-0 paper-texture rounded-sm" />
        <div className="absolute inset-0 grain-overlay opacity-20 pointer-events-none rounded-sm" />

        {/* Corner decorations */}
        <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#c41e3a]/30" />
        <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[#c41e3a]/30" />
        <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-[#c41e3a]/30" />
        <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[#c41e3a]/30" />

        {accepted ? (
          /* ── ACCEPTED STATE ── */
          <div className="relative z-10">
            <div className="text-6xl sm:text-7xl mb-6 animate-heartbeat-fast">❤️</div>
            <h1
              className="font-script text-valentine mb-4"
              style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
            >
              Yay!!! You said Yes!
            </h1>
            <p className="font-elegant text-[#555] text-lg sm:text-xl tracking-wide">
              I knew you would! 💕
            </p>
            <p className="font-elegant text-[#777] text-sm mt-4 tracking-wider uppercase">
              Opening your surprise...
            </p>
          </div>
        ) : (
          /* ── QUESTION STATE ── */
          <div className="relative z-10">
            {/* Sad face illustration */}
            <div className="flex justify-center mb-6">
              <SadFace stage={stage} />
            </div>

            {/* Emoji */}
            <div
              className="text-4xl sm:text-5xl mb-5 transition-all duration-500"
              style={{ transform: `scale(${1 + stage * 0.05})` }}
            >
              {currentStage.emoji}
            </div>

            {/* Question text */}
            <h1
              className={`font-script text-valentine mb-8 leading-snug transition-all duration-500 ${
                stage >= 6 ? "animate-pulse-slow" : ""
              }`}
              style={{
                fontSize: `clamp(${1.5 + stage * 0.05}rem, ${4 + stage * 0.3}vw, ${2.5 + stage * 0.1}rem)`,
              }}
            >
              {currentStage.question}
            </h1>

            {/* Stage counter */}
            {stage > 0 && (
              <p className="font-elegant text-[#999] text-xs mb-6 tracking-wider">
                Attempt #{stage + 1} • {stage === 1 ? "Come on..." : stage <= 3 ? "Really?" : stage <= 6 ? "I'm getting sadder..." : stage <= 9 ? "This is torture!" : "PLEASE!!!"}
              </p>
            )}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 relative">
              {/* YES BUTTON — grows bigger */}
              <button
                onClick={handleYes}
                className="relative font-serif uppercase tracking-[0.2em] text-white bg-[#c41e3a] 
                  hover:bg-[#a01830] active:scale-95 rounded-sm
                  transition-all duration-500 hover:shadow-lg hover:shadow-[#c41e3a]/30
                  z-10"
                style={{
                  transform: `scale(${yesScale})`,
                  padding: yesPadding,
                  fontSize: yesFontSize,
                }}
              >
                Yes! ❤️
              </button>

              {/* NO BUTTON — shrinks and runs away */}
              <button
                onClick={handleNo}
                className="relative font-serif uppercase tracking-[0.2em] text-[#888] 
                  border border-[#ccc] bg-white/50 hover:bg-white/70
                  rounded-sm transition-all duration-300 active:scale-95
                  cursor-pointer select-none"
                style={{
                  transform: `scale(${noScale}) translate(${noButtonOffset.x}px, ${noButtonOffset.y}px)`,
                  opacity: noOpacity,
                  padding: `${Math.max(10 - stage, 4)}px ${Math.max(24 - stage * 2, 10)}px`,
                  fontSize: `${Math.max(14 - stage * 0.5, 9)}px`,
                }}
              >
                {currentStage.noText}
              </button>
            </div>

            {/* Hint text that appears later */}
            {stage >= 4 && (
              <p
                className="font-elegant text-valentine/40 text-xs mt-6 italic animate-fade-in"
                style={{ animationDelay: "0.5s" }}
              >
                {stage >= 8
                  ? "The yes button is right there... it's so big now... just click it..."
                  : stage >= 6
                  ? "Psst... the right answer is Yes 😉"
                  : "Hint: Try the other button... 💕"}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Dramatic vignette that increases */}
      <div
        className="fixed inset-0 pointer-events-none z-30 transition-all duration-700"
        style={{
          background: `radial-gradient(ellipse at center, transparent ${60 - stage * 3}%, rgba(0,0,0,${0.3 + stage * 0.04}) 100%)`,
        }}
      />
    </div>
  );
}

/* ─── Confetti hearts on accept ─── */
function ConfettiHearts() {
  const confetti = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 1.5,
    duration: 2 + Math.random() * 2,
    size: 12 + Math.random() * 20,
    rotation: Math.random() * 360,
    emoji: ["❤️", "💕", "💗", "💖", "🌹", "✨", "💘"][Math.floor(Math.random() * 7)],
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-[200] overflow-hidden">
      {confetti.map((c) => (
        <div
          key={c.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${c.left}%`,
            top: "-30px",
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`,
            fontSize: `${c.size}px`,
            transform: `rotate(${c.rotation}deg)`,
          }}
        >
          {c.emoji}
        </div>
      ))}
    </div>
  );
}
