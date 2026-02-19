import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    console.log("Reset link sent to:", email);
    alert(`Reset link sent to ${email}`);
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

      {/* Reset Password Card */}
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-8 flex flex-col gap-6">
        {/* Card Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1b1b1b] mb-2">
            Reset your password
          </h1>
          <p className="text-[#8a8a8a] text-sm">
            Enter your email address and we'll send you a link to reset your
            password.
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

          <button
            onClick={handleReset}
            className="bg-[#ff6a3d] text-white rounded-lg py-2 font-semibold hover:opacity-90 transition mt-2"
          >
            Send reset link
          </button>
        </div>

        {/* Footer */}
        <div className="text-center text-sm">
          <a
            href="#"
            className="text-[#ff6a3d] flex items-center justify-center gap-1 hover:underline mt-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l-7-7 7-7m7 7H5"
              />
            </svg>
            <Link to="/Auth">Back to Login</Link>
          </a>
        </div>
      </div>
    </div>
  );
}
