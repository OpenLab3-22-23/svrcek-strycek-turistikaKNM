import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "./Auth";
import './SignUp.css';

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
    <div className="w-screen h-screen flex flex-col justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <h2>Sign Up</h2>
        <input
          id="email"
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-64 my-2"
        />
        <input
          id="password"
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-64 my-2"
        />
        <div className="frame">
          <button className="custom-btn btn-5"><span>Sign Up</span></button>
        </div>
        <p className="mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-emerald-300">
            LogIn
          </Link>
        </p>
      </form>
    </div>
  ) : (
    <Navigate to="/" />
  );
}
