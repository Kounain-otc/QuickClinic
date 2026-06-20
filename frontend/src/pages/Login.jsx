import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 relative overflow-hidden">

      {/* Background Blur */}
      <div className="absolute w-72 h-72 bg-primary/20 blur-3xl rounded-full -left-10 top-20 -z-10"></div>
      <div className="absolute w-72 h-72 bg-primary/10 blur-3xl rounded-full -right-10 bottom-0 -z-10"></div>

      <form
        onSubmit={onSubmitHandler}
        className="
        w-full
        max-w-md
        bg-white
        rounded-[32px]
        p-8
        border border-slate-100
        shadow-[0_15px_50px_rgba(0,0,0,0.12)]
        "
      >
        {/* Heading */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-800">
            {state === "Sign Up" ? "Create Account" : "Welcome Back"}
          </h1>

          <p className="text-sm text-slate-500 mt-1">
            {state === "Sign Up"
              ? "Create an account to book appointments."
              : "Login to continue your appointments."}
          </p>
        </div>

        {/* Name */}
        {state === "Sign Up" && (
          <div className="mb-4">
            <p className="text-sm font-medium text-slate-700">
              Full Name
            </p>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
              className="
              w-full
              mt-2
              px-4
              py-3
              rounded-2xl
              border border-slate-200
              outline-none
              focus:border-primary
              transition
              "
            />
          </div>
        )}

        {/* Email */}
        <div className="mb-4">
          <p className="text-sm font-medium text-slate-700">
            Email
          </p>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="
            w-full
            mt-2
            px-4
            py-3
            rounded-2xl
            border border-slate-200
            outline-none
            focus:border-primary
            transition
            "
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <p className="text-sm font-medium text-slate-700">
            Password
          </p>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
            className="
            w-full
            mt-2
            px-4
            py-3
            rounded-2xl
            border border-slate-200
            outline-none
            focus:border-primary
            transition
            "
          />
        </div>

        {/* Button */}
        <button
          className="
          w-full
          py-3
          rounded-2xl
          bg-primary
          text-white
          font-medium
          hover:scale-[1.02]
          transition-all
          duration-300
          "
        >
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {/* Bottom */}
        <div className="mt-5 text-center text-sm text-slate-500">
          {state === "Sign Up" ? (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => setState("Login")}
                className="text-primary font-semibold cursor-pointer hover:underline"
              >
                Login
              </span>
            </p>
          ) : (
            <p>
              New here?{" "}
              <span
                onClick={() => setState("Sign Up")}
                className="text-primary font-semibold cursor-pointer hover:underline"
              >
                Create Account
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;