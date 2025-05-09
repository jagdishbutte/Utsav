"use client";

import Layout from "../components/Layout";

export default function Gallery() {
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
          Gallery Coming Soon
        </h1>
        <p className="text-white text-xl">
         {" We're working on something amazing!"}
        </p>
      </div>
    </Layout>
  );
}
