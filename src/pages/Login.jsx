import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";
import { useNavigate } from "react-router";
import useAuth from "@/hooks/useAuth";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { handleLogin } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await handleLogin(email, password);
      console.log(email, password);

      setEmail("");
      setPassword("");
      setTimeout(() => {
        toast.success("Login successful!");
        navigate("/profile");
      }, 2000);
    } catch (error) {
      toast.error("Login failed. Please try again.");
      console.log("Error", error);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md  backdrop-blur-md rounded-2xl shadow-2xl border-[1px] border-amber-400 py-8 px-28 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Welcome Back!</h1>
          <p className="text-sm opacity-70">Join us and start your journey</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
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

          <Button text="Login" type="submit" className="w-full" />
        </form>

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
