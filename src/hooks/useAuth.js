import { getCurrentUser, login, logout, signup } from "@/api/auth";
import { useEffect, useState } from "react";

export default function useAuth() {
  const [user, setUser] = useState();

  useEffect(() => {
    async function fetchUser() {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch {
        setUser(null);
      }
    }
    fetchUser();
  }, []);

  async function handleSignup(email, password, name) {
    await signup(email, password, name);
    await login(email, password);
    const currentUser = await getCurrentUser();
    setUser(currentUser);
  }

  async function handleLogin(email, password) {
    await login(email, password);
    const currentUser = await getCurrentUser();
    setUser(currentUser);
  }

  async function handleLogout() {
    await logout();
    setUser(null);
  }

  return { user, handleLogin, handleSignup, handleLogout };
}
