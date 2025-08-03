// src/Components/Login.jsx
import React, { useState } from "react";
import { Bolt } from "lucide-react";

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLoginSuccess(); // Notify parent component
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md">
        {/* Replace logo with Bolt icon */}
        <div className="flex justify-center mb-6">
          <Bolt className="text-orange-500" size={48} />
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-900">Sign in to your account</h2>
        <p className="text-center text-gray-500 mb-6">Welcome back</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-full font-medium hover:bg-gray-50"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            Sign in with Google
          </button>

          <input
            type="email"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none"
          />

          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none"
          />

          <div className="text-right text-sm text-gray-500">
            <a href="#" className="hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-300 text-white py-2 rounded-full font-medium hover:bg-orange-400"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
