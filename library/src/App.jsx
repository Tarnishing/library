import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Hero from "./Hero";
function App() {
  const [count, setCount] = useState(0);

  return <Hero />;
}

export default App;