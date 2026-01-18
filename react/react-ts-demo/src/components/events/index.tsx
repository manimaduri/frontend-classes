import { useState, type ChangeEvent, type FormEvent } from "react";

const TypedInput = () => {
  const [email, setEmail] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("Setting letter",e.target.value)
    setEmail(e.target.value);
  };
  const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log("Form Submitted")
  }
  return (
    <form onSubmit={handleSubmit}>
    <input
      type="email"
      value={email}
      onChange={handleChange}
      placeholder="Enter email.."
    />
    </form>
  );
};

export default TypedInput;
