import React, { useState, type ChangeEvent, type FormEvent } from "react";

type Errors = {
  email?: string;
  password?: string;
};
const LoginFormBasics = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: Errors = {};

    if (!email.includes("@")) {
      newErrors.email = "Invalid email address";
    }
    if (password.length < 6) {
      newErrors.password = "Pasword must be atleast 6 characters";
    }

    setErrors(newErrors);

    if(Object.keys(newErrors).length === 0){
      console.log("Form is valid");
    }else{
      console.log(`Invalid form fix errors`)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter email.."
        />
        {errors.email &&<p style={{color:"red"}}>{errors.email}</p>}
      </div>
      <div>
        <input
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter password.."
        />
        {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginFormBasics;
