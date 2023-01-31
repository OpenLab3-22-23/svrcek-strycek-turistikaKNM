import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "./Auth";
import "./LogSign.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp, session } = useAuth();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const { error } = await signUp(email, password);
      if (error) throw error;
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
    }
  }

  return !session ? (
    <div className="all" id="SignUp-background">
      <form onSubmit={handleSubmit} className="form">
        <div className="frame">
          <h2 className="signup-text">
            Sign Up
          </h2>
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input3"
        />
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input4"
        />
        <button className="btn" id="signup-btn">
            <span>Sign Up</span>
        </button>
        <p className="text">
          Already have an account?{" "}
          <Link to="/login" className="text-Login">
            LogIn
          </Link>
        </p>
        </div>
      </form>
    </div>
  ) : (
    <Navigate to="/" />
  );
}
