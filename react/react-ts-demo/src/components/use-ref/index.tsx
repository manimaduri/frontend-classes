import { useEffect, useRef } from "react"
import ToggleExample from "../custom-hooks";

const UseRefBasics = () => {
    const counteRef = useRef(0);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        inputRef.current?.focus();
    },[])
    // 1. use useRef for mutable storage but without state or rerender
    // 2. Typing dom Refs / Accessing DOM Elements like inputs buttons divs
    const handleIncrement = ()=>{
        counteRef.current +=1;
        console.log("Ref value", counteRef.current);
    }

  return (
    <>

    <input ref={inputRef} placeholder="Type here...."/>
    <button onClick={handleIncrement}>Increment Ref -</button>
    <ToggleExample/>
    </>
  )
}

export default UseRefBasics