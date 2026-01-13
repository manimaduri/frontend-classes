//key rules of hooks
// 1. Hook name must start with use
// 2. Can ony call hooks at top level
// 3. Can only call hooks inside react functions or other custom hooks
// TODO : Explore rules of hooks

import { useState } from "react";

export function useToggle(initialValue: boolean = false) {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = () => {
    //! learn about  operators ! , || , && etc
    setValue((prev) => !prev);
  };
  
  return {
    value,
    toggle,
  };
}
