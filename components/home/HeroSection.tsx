"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_BASE_URL } from "@/lib/whatsapp";

// ─── Typewriter configuration ───────────────────────────────────────────────
const PHRASE_1 = "Discover Your";
const PHRASE_2 = "Signature Style.";
const FULL_HEADLINE = `${PHRASE_1} ${PHRASE_2}`;

// Timing parameters
const START_DELAY = 400; // 0.4s initial delay
const BASE_SPEED = 72;   // ~72ms per character
const INTER_PHRASE_PAUSE = 360; // pause between phrase 1 and 2
const CURSOR_LINGER_MS = 1400;  // cursor fades after headline finishes

// Deterministic natural typing variance (60ms - 90ms)
function getCharDelay(index: number): number {
  const variations = [0, 10, -8, 14, -4, 16, -10, 8, 12, -6];
  return Math.max(58, BASE_SPEED + variations[index % variations.length]);
}

// Build schedule of character timestamps
function buildSchedule(): { ms: number; isPhrase1: boolean; count: number }[] {
  const steps: { ms: number; isPhrase1: boolean; count: number }[] = [];
  let currentMs = START_DELAY;

  for (let i = 0; i < PHRASE_1.length; i++) {
    currentMs += getCharDelay(i);
    steps.push({ ms: currentMs, isPhrase1: true, count: i + 1 });
  }

  currentMs += INTER_PHRASE_PAUSE;

  for (let i = 0; i < PHRASE_2.length; i++) {
    currentMs += getCharDelay(PHRASE_1.length + i);
    steps.push({ ms: currentMs, isPhrase1: false, count: i + 1 });
  }

  return steps;
}

const SCHEDULE = buildSchedule();
const TOTAL_TYPING_TIME = SCHEDULE[SCHEDULE.length - 1].ms;

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  // ── State ─────────────────────────────────────────────────────────────────
  const [p1Count, setP1Count] = useState(prefersReducedMotion ? PHRASE_1.length : 0);
  const [p2Count, setP2Count] = useState(prefersReducedMotion ? PHRASE_2.length : 0);
  const [cursorBlink, setCursorBlink] = useState(true);
  const [cursorFaded, setCursorFaded] = useState(!!prefersReducedMotion);
  const [typingDone, setTypingDone] = useState(!!prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) {
      setP1Count(PHRASE_1.length);
      setP2Count(PHRASE_2.length);
      setTypingDone(true);
      setCursorFaded(true);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];

    // Schedule character reveals
    SCHEDULE.forEach((step) => {
      const t = setTimeout(() => {
        if (step.isPhrase1) {
          setP1Count(step.count);
        } else {
          setP2Count(step.count);
        }
      }, step.ms);
      timers.push(t);
    });

    // Blinking cursor interval
    const blinkInterval = setInterval(() => {
      setCursorBlink((v) => !v);
    }, 500);

    // Typing completion
    const completeTimer = setTimeout(() => {
      setTypingDone(true);

      // Stop blink and let cursor linger before fading
      const lingerTimer = setTimeout(() => {
        clearInterval(blinkInterval);
        setCursorFaded(true);
      }, CURSOR_LINGER_MS);
      timers.push(lingerTimer);
    }, TOTAL_TYPING_TIME);
    timers.push(completeTimer);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(blinkInterval);
    };
  }, [prefersReducedMotion]);

  // Slices
  const p1Text = PHRASE_1.slice(0, p1Count);
  const p2Text = PHRASE_2.slice(0, p2Count);

  // Active cursor placement
  const isPhrase1Typing = p1Count < PHRASE_1.length;
  const showCursor = !cursorFaded && cursorBlink;

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #FDFCFA 0%, #FAF8F5 100%)",
      }}
    >
      {/* ─────────────────────────────────────────────────────────────────
          MOBILE ONLY: Full-bleed editorial background image + overlay
          Hidden on lg+ (desktop keeps the off-white gradient above)
      ───────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 lg:hidden" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(18,8,6,0.45) 0%, rgba(18,8,6,0.52) 40%, rgba(18,8,6,0.72) 75%, rgba(12,4,3,0.88) 100%)",
          }}
        />
      </div>

      {/* Smooth bottom fades */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-10 hidden lg:block"
        style={{ background: "linear-gradient(to bottom, transparent 0%, #FAF8F5 100%)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-10 lg:hidden"
        style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(12,4,3,0.60) 100%)" }}
      />

      {/* Main Editorial Hero Grid */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── Left Column: Typography & CTAs ── */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">

            {/* ── 1. Brand label (starts after 0.2s, duration 0.7s) ── */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.7,
                ease: "easeOut",
                delay: prefersReducedMotion ? 0 : 0.2,
              }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs uppercase tracking-widest font-medium jc-hero-pill"
            >
              <span>Timeless Luxury • Judith&apos;s Closet</span>
            </motion.div>

            {/* ── 2. Main Headline (Typewriter) ── */}
            <div className="space-y-3">
              <h1
                className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.08] min-h-[2.2em]"
                aria-label={FULL_HEADLINE}
              >
                {/* Line 1: Discover Your */}
                <span className="block jc-hero-heading-1 min-h-[1.1em]" aria-hidden="true">
                  {p1Text}
                  {isPhrase1Typing && (
                    <span
                      className="jc-hero-cursor"
                      style={{ opacity: showCursor ? 1 : 0 }}
                      aria-hidden="true"
                    >
                      |
                    </span>
                  )}
                </span>

                {/* Line 2: Signature Style. */}
                <span className="block italic font-light jc-hero-heading-2 min-h-[1.1em]" aria-hidden="true">
                  {p2Text}
                  {!isPhrase1Typing && !cursorFaded && (
                    <span
                      className="jc-hero-cursor not-italic font-normal"
                      style={{ opacity: showCursor ? 1 : 0 }}
                      aria-hidden="true"
                    >
                      |
                    </span>
                  )}
                </span>
              </h1>

              {/* ── 3. Supporting Description (enters after headline finishes) ── */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={typingDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.65,
                  ease: "easeOut",
                }}
                className="text-base sm:text-xl font-light max-w-xl leading-relaxed jc-hero-body"
              >
                Premium fashion for men and women. Look good. Feel amazing. Handcrafted tailoring and statement silhouettes designed to empower every moment.
              </motion.p>
            </div>

            {/* ── 4. Call-to-Action Buttons (enter after headline with stagger) ── */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">

              {/* Explore Collection */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={typingDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.5,
                  ease: "easeOut",
                  delay: prefersReducedMotion ? 0 : 0.15,
                }}
              >
                <Link
                  href="/shop"
                  className="jc-btn-primary inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest font-semibold shadow-md transition-all duration-300 group"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>

              {/* Shop Women */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={typingDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.5,
                  ease: "easeOut",
                  delay: prefersReducedMotion ? 0 : 0.28,
                }}
              >
                <Link
                  href="/women"
                  className="jc-btn-ghost inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest font-semibold transition-all duration-300"
                >
                  <span>Shop Women</span>
                </Link>
              </motion.div>

              {/* Shop Men */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={typingDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.5,
                  ease: "easeOut",
                  delay: prefersReducedMotion ? 0 : 0.40,
                }}
              >
                <Link
                  href="/men"
                  className="jc-btn-ghost inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest font-semibold transition-all duration-300"
                >
                  <span>Shop Men</span>
                </Link>
              </motion.div>
            </div>

            {/* WhatsApp Callout */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={typingDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.5,
                ease: "easeOut",
                delay: prefersReducedMotion ? 0 : 0.52,
              }}
              className="pt-3 md:pt-4 flex items-center gap-4 text-xs jc-hero-whatsapp-row"
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(37,211,102,0.15)",
                  border: "1px solid rgba(37,211,102,0.45)",
                  color: "#25D366",
                }}
              >
                <MessageCircle className="w-4 h-4" />
              </div>

              <p className="jc-hero-whatsapp-text">
                Browse online &amp; order instantly on WhatsApp:{" "}
                <Link
                  href={WHATSAPP_BASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold transition-colors hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78172D] focus-visible:ring-offset-1 jc-hero-whatsapp-link"
                >
                  +233 54 763 1900
                </Link>
              </p>
            </motion.div>

          </div>

          {/* ── Right Column: Images — desktop only, unchanged ── */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Main image */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#DCCABD]/40">
                <Image
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
                  alt="Judith's Closet Luxury Fashion Editorial"
                  fill
                  priority
                  sizes="500px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-[11px] uppercase tracking-widest text-[#E8DFD2] font-semibold">
                    New Season Couture
                  </p>
                  <p className="font-serif text-lg font-medium">Autumn / Evening Edit</p>
                </div>
              </div>

              {/* Floating secondary card */}
              <div className="absolute -bottom-8 -left-6 sm:-left-10 w-44 sm:w-56 aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border-2 border-[#E8DFD2]/40">
                <Image
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop"
                  alt="Men's Bespoke Tailoring"
                  fill
                  sizes="220px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">
                    Men&apos;s Tailoring
                  </p>
                  <p className="font-serif text-xs font-semibold">Italian Wool Overcoat</p>
                </div>
              </div>

              {/* Floating seal */}
              <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-[#641526] border-2 border-[#C5A059] flex flex-col items-center justify-center text-center text-white shadow-xl rotate-12">
                <span className="text-[9px] uppercase tracking-widest font-bold text-[#E8DFD2]">Judith&apos;s</span>
                <span className="text-[8px] uppercase tracking-wider font-light">Elegance</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────────
          Scoped hero styles — preserving all existing colours exactly
      ───────────────────────────────────────────────────────────────── */}
      <style>{`
        /* ── Tagline pill ── */
        .jc-hero-pill {
          border: 1px solid rgba(255,255,255,0.40);
          color: rgba(255,255,255,0.90);
          background: rgba(255,255,255,0.08);
        }

        /* ── Headline colours ── */
        .jc-hero-heading-1 { color: #ffffff; }
        .jc-hero-heading-2 { color: #F2C4CE; }

        /* ── Typing cursor ── */
        .jc-hero-cursor {
          display: inline-block;
          margin-left: 2px;
          font-weight: 300;
          transition: opacity 0.12s ease;
          color: inherit;
          user-select: none;
        }

        /* ── Body paragraph ── */
        .jc-hero-body { color: rgba(255,255,255,0.85); }

        /* ── WhatsApp row ── */
        .jc-hero-whatsapp-row  {
          border-top: none;
          color: rgba(255,255,255,0.80);
        }
        @media (min-width: 768px) {
          .jc-hero-whatsapp-row {
            border-top: 1px solid rgba(255,255,255,0.25);
          }
        }
        .jc-hero-whatsapp-text { color: rgba(255,255,255,0.80); }
        .jc-hero-whatsapp-link { color: #F2C4CE; }

        /* ── Primary CTA ── */
        .jc-btn-primary {
          background-color: #78172D;
          color: #ffffff;
        }
        .jc-btn-primary:hover {
          background-color: #661226;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(120,23,45,0.35);
        }
        .jc-btn-primary:focus-visible {
          outline: 2px solid #78172D;
          outline-offset: 2px;
        }

        /* ── Ghost buttons ── */
        .jc-btn-ghost {
          background-color: transparent;
          border: 1px solid rgba(255,255,255,0.65);
          color: rgba(255,255,255,0.90);
        }
        .jc-btn-ghost:hover {
          background-color: rgba(255,255,255,0.15);
          color: #ffffff;
          border-color: rgba(255,255,255,0.90);
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(255,255,255,0.12);
        }
        .jc-btn-ghost:focus-visible {
          outline: 2px solid #ffffff;
          outline-offset: 2px;
        }

        /* ── Desktop overrides (lg and up) ── */
        @media (min-width: 1024px) {
          .jc-hero-pill {
            border: 1px solid #DCCABD;
            color: #57443B;
            background: transparent;
          }
          .jc-hero-heading-1 { color: #30201C; }
          .jc-hero-heading-2 { color: #78172D; }
          .jc-hero-body      { color: #57443B; }
          .jc-hero-whatsapp-row  { border-top: 1px solid #DCCABD; color: #57443B; }
          .jc-hero-whatsapp-text { color: #57443B; }
          .jc-hero-whatsapp-link { color: #78172D; }

          .jc-btn-ghost {
            border: 1px solid #30201C;
            color: #30201C;
            background-color: transparent;
          }
          .jc-btn-ghost:hover {
            background-color: #30201C;
            color: #ffffff;
            border-color: #30201C;
            box-shadow: 0 6px 18px rgba(48,32,28,0.18);
          }
          .jc-btn-ghost:focus-visible {
            outline: 2px solid #78172D;
            outline-offset: 2px;
          }
        }
      `}</style>
    </section>
  );
}
