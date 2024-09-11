import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import image from "./assets/godzilla.jpeg";
import "./App.css";
import Post from "./post";
import Card from "./card";
import PostFunction from "./PostFunction";
import StateInClass from "./StateInClass";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card name="I HERE FLUKE" image={image} />
      <Card name="I HERE FLUKE" image={image} />
      <StateInClass name="i'm so handsome" counter="0" />
    </>
  );
}

export default App;
