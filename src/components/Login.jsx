import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!role) {
      alert("Please select a role");
      return;
    }

    setLoading(true);

    // 🔹 Dummy login logic (backend will come later)
    setTimeout(() => {
      if (role === "farmer") navigate("/farmer");
      if (role === "buyer") navigate("/buyer");
      if (role === "monitor") navigate("/monitor/overview");
      setLoading(false);
    }, 600);
  };

  return (
    <div className="login-container">
      {/* LEFT SECTION */}
      <div className="login-left">
        <h1>Sun-Vault Hive</h1>
        <p>
          Intelligent Solar Cold Storage
          <br />
          Preserve freshness. Prevent losses.
        </p>
      </div>

      {/* RIGHT SECTION */}
      <div className="login-right">
        <form className="login-card" onSubmit={handleLogin}>
          <h2>Welcome Back</h2>

          {/* Email */}
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Role Selection */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="" disabled hidden>
              Select Role
            </option>
            <option value="farmer">Farmer / Seller</option>
            <option value="buyer">Buyer</option>
            <option value="monitor">Monitoring / Admin</option>
          </select>

          <div className="forgot">Forgot password?</div>

          <button type="submit" disabled={loading || !role}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
