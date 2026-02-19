import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen bg-[#fff9f6] flex flex-col items-center justify-center p-4">
      {/* Centered Header */}
      <header className="flex  items-center gap-2 mb-8">
        <div className="w-12 h-12 bg-[#ff6a3d] rounded-md flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7"
            />
          </svg>
        </div>
        <span className="text-2xl font-bold text-[#1b1b1b]">CraveBite</span>
      </header>
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-8">
        {/* Card Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-[#1b1b1b] mb-2">
            Welcome back
          </h1>
          <p className="text-[#8a8a8a]">
            Enter your details to access your account
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-[#1b1b1b] mb-1">
              Email address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full border border-[#00000014] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff6a3d]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1b1b1b] mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-[#00000014] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff6a3d]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="text-right">
            <a href="#" className="text-sm text-[#ff6a3d] hover:underline">
              <Link to="/passwordReset">Forgot password?</Link>
            </a>
          </div>

          <button
            onClick={handleLogin}
            className="bg-[#ff6a3d] text-white rounded-lg py-2 font-semibold hover:opacity-90 transition"
          >
            Log in
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-[#8a8a8a]">
          Don't have an account?{" "}
          <a href="#" className="text-[#ff6a3d] hover:underline">
            <Link to="/Signup">Sign up</Link>
          </a>
        </div>
      </div>
    </div>
  );
}
