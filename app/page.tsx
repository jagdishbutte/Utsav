"use client";

import Link from "next/link";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[90vh] p-8 overflow-hidden relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 70%)`,
                transform: `scale(${Math.random() * 0.8 + 0.2})`,
                animation: `float ${Math.random() * 10 + 20}s infinite linear`,
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="flex flex-col items-center justify-center z-10 text-center space-y-8 mt-10">
          <h1
            className="text-[clamp(5rem,20vw,20rem)] font-extrabold leading-none tracking-tighter"
            style={{
              background:
                "linear-gradient(to right, #ff9966, #ff5e62, #00f2fe, #4facfe)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 10px 30px rgba(0,0,0,0.15)",
            }}
          >
            Utsav.life:)
          </h1>

          <p
            className="text-2xl md:text-3xl font-bold max-w-xl px-6 py-3"
            style={{
              background: "linear-gradient(to right, #76f8ee, #c9ffbf)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 2px 10px rgba(0,0,0,0.2)",
            }}
          >
            {"Don't Just Exist, Utsav."}
          </p>

          <Link href="/syndicate">
            <button className="mt-10 px-10 py-5 text-lg font-bold rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-xl transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl border-none cursor-pointer">
              Our Syndicate {">"}
            </button>
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
          100% {
            transform: translateY(0) rotate(360deg);
          }
        }
      `}</style>
    </Layout>
  );
}
