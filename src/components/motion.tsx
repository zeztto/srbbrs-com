"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl tracking-[0.25em] text-espresso"
        >
          SRBBRS
        </Link>
        <div className="hidden md:flex items-center gap-10 text-[13px] tracking-[0.15em] uppercase text-warm-brown">
          <Link
            href="/#menu"
            className="hover:text-espresso transition-colors duration-300"
          >
            메뉴
          </Link>
          <Link
            href="/story"
            className="hover:text-espresso transition-colors duration-300"
          >
            스토리
          </Link>
          <Link
            href="/#about"
            className="hover:text-espresso transition-colors duration-300"
          >
            소개
          </Link>
          <Link
            href="/#visit"
            className="hover:text-espresso transition-colors duration-300"
          >
            방문
          </Link>
        </div>
        <button
          className="md:hidden relative w-6 h-4"
          onClick={() => setOpen(!open)}
          aria-label="메뉴 열기"
        >
          <span
            className={`absolute left-0 right-0 h-px bg-espresso transition-all duration-300 ${
              open ? "top-1/2 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 right-0 h-px bg-espresso transition-all duration-300 ${
              open ? "top-1/2 -rotate-45" : "bottom-0"
            }`}
          />
        </button>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-48" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-4 text-sm tracking-[0.15em] uppercase text-warm-brown bg-cream/95 backdrop-blur-xl">
          <Link href="/#menu" onClick={() => setOpen(false)}>
            메뉴
          </Link>
          <Link href="/story" onClick={() => setOpen(false)}>
            스토리
          </Link>
          <Link href="/#about" onClick={() => setOpen(false)}>
            소개
          </Link>
          <Link href="/#visit" onClick={() => setOpen(false)}>
            방문
          </Link>
        </div>
      </div>
    </nav>
  );
}
