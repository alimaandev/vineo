import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimationProvider from "./components/providers/AnimationProvider";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "vineo",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ClerkProvider  afterSignOutUrl="/">
          <AnimationProvider>{children}</AnimationProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
