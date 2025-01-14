import { useState, useContext } from "react"; // Ensure useContext is imported
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/providers/AuthProvider"; // Import AuthContext
import Swal from "sweetalert2";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useContext(AuthContext); // Get signIn function from AuthProvider
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if fields are empty
    if (!email || !password) {
      setError("Both fields are required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Use the signIn function from AuthProvider
      await signIn(email, password);

      // Show success notification
      Swal.fire({
        title: "Success!",
        text: "Login successful!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      // Navigate to the dashboard
      navigate("/dashboard", { replace: true });
    } catch (err) {
      // Handle login errors
      setError(err.message || "Login failed. Please try again.");
      Swal.fire({
        title: "Error!",
        text: err.message || "An error occurred during login.",
        icon: "error",
        confirmButtonText: "Okay",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">


        <h2 className="mb-6 text-center text-2xl font-bold text-blue-700">
          WeTech HUB
        </h2>

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
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
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
            Don&apos;t have an account?{" "}
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
