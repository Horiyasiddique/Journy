import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login with:", { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md  backdrop-blur-md rounded-2xl shadow-2xl border-[1px] border-amber-400 py-8 px-28 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Welcome Back!</h1>
          <p className="text-sm opacity-70">Join us and start your journey</p>
        </div>

        <div className="space-y-4 ">
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button text="Login" onClick={handleLogin} className="w-full" />

        <p className="text-sm text-center">
          Don't have an account?{" "}
          <Link
            to="/auth/signup"
            className="font-medium text-amber-500 hover:underline transition-colors"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
