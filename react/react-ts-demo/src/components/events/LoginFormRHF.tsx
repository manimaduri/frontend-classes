import React from "react";
import { useForm } from "react-hook-form";

type LoginFormData = {
  email: string;
  password: string;
};
const LoginFormRHF = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log("Login data", data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          placeholder="Email..."
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid Email",
            },
          })}
        />

        {errors.email && <p style={{color:"red"}}>{errors.email?.message}</p>}
      </div>

      <div>
        <input
          placeholder="Password..."
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength:{
                value :6,
                message :"Minimum 6 characters",
            }
          })}
        />

        {errors.password && <p style={{color:"red"}}>{errors.password?.message}</p>}
      </div>

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginFormRHF;
