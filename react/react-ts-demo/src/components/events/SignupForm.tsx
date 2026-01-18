import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { signupSchema } from "./schemas/signupSchema";
import { z } from "zod";

export type SignupData = z.infer<typeof signupSchema>;
const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupData) => {
    console.log("Signup data", data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Signup form</h2>
      <div>
        <input placeholder="Username" {...register("username")}></input>
        {errors.username && (
          <p style={{ color: "red" }}>{errors.username?.message}</p>
        )}
      </div>
      <div>
        <input placeholder="Email" {...register("email")}></input>
        {errors.email && (
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        )}
      </div>
      <div>
        <input placeholder="Password" {...register("password")}></input>
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        )}
      </div>
      <div>
        <input placeholder="Confirm Password" {...register("confirmPassword")}></input>
        {errors.confirmPassword && (
          <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
        )}
      </div>

      <button type="submit">Create Account</button>
    </form>
  );
};

export default SignupForm;
