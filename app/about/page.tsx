"use client";

import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-[90vh]">
        <h1
          className="text-4xl md:text-6xl font-extrabold mb-8"
          style={{
            background:
              "linear-gradient(to right, #ff9966, #ff5e62, #00f2fe, #4facfe)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 10px 30px rgba(0,0,0,0.15)",
          }}
        >
          About Utsav
        </h1>
        <p className="text-white text-xl max-w-2xl text-center">
          <p className="text-white text-xl max-w-2xl text-center">
            We&apos;re a community of adventurers, creators, and dreamers who
            believe in living life to the fullest. Join us as we explore the
            world and create unforgettable experiences together.
          </p>
        </p>
      </div>
    </Layout>
  );
}
