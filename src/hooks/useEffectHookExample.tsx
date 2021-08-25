/* 

Understanding Hooks :
Hooks help us to use class component features in functional components such as state life cycle. 
For example: a class component has a life cycle... functional component can use hook to develop that 
using useEffect hook

*/

import React, { useState, useEffect } from "react";

export const useEffectDemoHook: React.FC = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.warn("Using Effect");
  });
  return (
    <div className="useEffectDemoHook">
      <h1> Use Effect in React {count} </h1>
      <button onClick={() => setCount(count + 1)}> Update Data</button>
    </div>
  );
};
