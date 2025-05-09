"use client";

import Layout from "../components/Layout";

export default function Join() {
  return (
    <Layout>
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-[90vh] p-8">
        <h1
          className="text-4xl md:text-6xl font-extrabold mb-8 text-center"
          style={{
            background:
              "linear-gradient(to right, #ff9966, #ff5e62, #00f2fe, #4facfe)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 10px 30px rgba(0,0,0,0.15)",
          }}
        >
          Join the Utsav Community
        </h1>

        <div className="max-w-md w-full bg-gray-900/50 backdrop-blur-lg p-8 rounded-xl shadow-2xl border border-gray-800/50">
          <form className="space-y-6">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                placeholder="Tell us why you want to join"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold hover:opacity-90 transition-all duration-300"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
