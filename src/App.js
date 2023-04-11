// This is the example for useContext
// This component is Main component WHich has child1 component

import React from "react";
import Child2 from "./Child";
import "./styles.css";

const Child1 = () => {
  return <Child2 />;
};

export default function App() {
  return (
    <div className="app">
      <h1>Main Component</h1>
      <Child1 />
    </div>
  );
}
