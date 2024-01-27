"use client";

import { useCallback, useState } from "react";
import RegisterInput from "./inputs/register-input";
import { Button } from "../ui/button";

type Variant = "Login" | "Register";

const RegisterForm: React.FC = () => {
  const [variant, setVariant] = useState<Variant>("Register");
  const [error, setError] = useState<string | any>(null);
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const toggleVariant = useCallback(() => {
    if (variant === "Login") {
      setVariant("Register");
    } else {
      setVariant("Login");
    }
  }, [variant]);

  const handleSubmit = async (e: any) => {

    if (variant === "Register") {
      if (!name || !email || !username || !password || !phoneNumber) {
        setError("All fields are necessary. 😔")
      }

      try {
        
        const resUserExists = await fetch("api/register")
      } catch (error) {
        
      }
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" bg-slate-900 rounded-sm p-4  w-96 max-md:w-full"
    >
      <div className=" flex items-center justify-center w-full">
        <h2 className=" flex text-center text-xl font-bold text-rose-600 w-full">
          {variant === "Login" ? "LOGIN" : "REGISTER"}
        </h2>
      </div>
      <div className=" mt-3">
        {variant === "Register" && (
          <RegisterInput
            label="Full name"
            placeholder="Your name"
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <RegisterInput
          label="Email"
          id="email"
          placeholder="email@example.com"
          type="email"
          className=" mt-2"
          onChange={(e) => setEmail(e.target.value)}
        />
        {variant === "Register" && (
          <RegisterInput
            label="user_name"
            placeholder="try to use ig username"
            type="text"
            id="name"
            className=" mt-2"
            onChange={(e) => setUsername(e.target.value)}
          />
        )}
        {variant === "Register" && (
          <RegisterInput
            label="phone number"
            placeholder="+250 7925 3727"
            type="text"
            id="name"
            className=" mt-2"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        )}
        <RegisterInput
          label="Password"
          id="email"
          placeholder="password"
          type="password"
          className=" mt-2 "
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div onClick={toggleVariant} className=" cursor-pointer mt-3">
        <p className=" text-gray-500 text-sm">
          {variant === "Login" ? (
            <span>
              if you do not have account you can{" "}
              <span className=" text-rose-600">create account</span>
            </span>
          ) : (
            <span>
              if you have account <span className=" text-rose-600">Login </span>
            </span>
          )}
        </p>
      </div>
      {/* errors */}
      <div>
        {error && <div className=" mt-3 text-rose-600 text-sm">{error}</div>}
      </div>
      <Button
        type="submit"
        className=" mt-4 bg-rose-600 w-full text-center h-8 rounded-sm hover:bg-rose-800 duration-300"
      >
        {variant === "Login" ? "LOGIN" : "Create Account"}
      </Button>
    </form>
  );
};

export default RegisterForm;
