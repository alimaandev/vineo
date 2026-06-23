"use client";

import Link from "next/link";
import {


  SignInButton,
  SignUpButton,

} from "@clerk/nextjs";

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
            <a href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
           
            <SignInButton forceRedirectUrl="/dashboard" mode="modal">
                <button className="text-text-secondary">
                  Sign in
                </button>
              </SignInButton>
             <SignUpButton forceRedirectUrl="/dashboard" mode="modal">
                <button className="bg-white text-black px-4 py-2 rounded-xl">
                  Get Started
                </button>
              </SignUpButton>
            
          </div>
        </div>
      </div>
    </header>
  );
}