import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "./Auth";
import "./LogSign.css";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, session } = useAuth();

  async function handleLogIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const { error } = await signIn(email, password);
      if (error) throw error;
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
    }
  }

  return !session ? (
    <div className="all" id="Login-background">
      <form onSubmit={handleLogIn} className="form">
        <div className="frame">
          <h2 className="login-text">
            Login
          </h2>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input1"
          />
          <input
            id="password"
            type="password"
            placeholder="Heslo"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input2"
          />
          <button className="btn" id="login-btn">
            <span>Login</span>
          </button>
          <p className="text">
            Ešte nemáte účet?{" "}
            <Link to="/signup" className="text-SignUp">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  ) : (
    <Navigate to="/" />
  );
}
