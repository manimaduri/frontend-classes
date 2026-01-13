import { useToggle } from "../../hooks/useToggle"

const ToggleExample = () => {
    const {value, toggle} = useToggle(true);

  return (
    <div>
        <p>Status : {value ? "ON" : "OFF"}</p>
        <button onClick={toggle}>Toggle</button>
    </div>
  )
}

export default ToggleExample