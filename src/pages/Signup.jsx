import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();const { handleSignup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await handleSignup(email, password, name);
      console.log(email, name, password);
      setName("");
      setEmail("");
      setPassword("");
      setTimeout(() => {
        toast.success("Signup successful!");
        navigate("/profile");
      }, 2000);
    } catch (error) {
      console.log("Error", error);
      setError(error);
      toast.error("Signup failed. Please try again.");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md  backdrop-blur-md rounded-2xl shadow-2xl border-[1px] border-amber-400 py-8 px-28 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Create Account</h1>
          <p className="text-sm opacity-70">Join us and start your journey</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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

          <Button text="Sign Up" type="submit" className="w-full" />
        </form>

        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="font-medium text-amber-500 hover:underline transition-colors"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
