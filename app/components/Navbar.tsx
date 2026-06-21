"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <div className="flex items-center justify-between rounded-2xl border border-border bg-card/80 backdrop-blur-xl px-6 py-4">

          <Link
            href="/"
            className="text-xl font-semibold tracking-tight"
          >
            Vineo
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-text-secondary">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Testimonials</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:block px-4 py-2 text-sm">
              Sign In
            </button>

            <button className="rounded-xl bg-white text-black px-5 py-2.5 text-sm font-medium">
              Start Free
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}