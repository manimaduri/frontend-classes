import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

type GreetingProps = {
  name: string;
  country?: string;
};

const Greeting = ({ name, country = "India" }: GreetingProps) => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("ThemeSwitcher must be used inside ThemeProvider");
  }
  const { theme } = context;
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#ffff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      Greeting {name} from {country}! and <strong>{theme}</strong>{" "}
    </div>
  );
};

export default Greeting;
