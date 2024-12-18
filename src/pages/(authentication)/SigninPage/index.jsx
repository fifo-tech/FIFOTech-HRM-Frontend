// src/Pages/Login/Login.js
import { useState } from "react";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both fields are required");
    } else {
      setError("");
      // Process the login (e.g., authenticate with backend)
      console.log("Login successful", { email, password });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-700">
          Login
        </h2>

        {/* Error message */}
        {error && <div className="mb-4 text-sm text-red-500">{error}</div>}

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-border mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border-border mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        {/* Links */}
        <div className="mt-4 text-center">
          <a
            href="/resetPass"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
          </a>
        </div>
        <div className="mt-2 text-center">
          <span className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/signUp" className="text-blue-600 hover:underline">
              Sign Up
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
