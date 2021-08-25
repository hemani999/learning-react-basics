/* 

Understanding Hooks :
Hooks help us to use class component features in functional components such as state life cycle. 
For example: a class component has a life cycle... functional component can use hook to develop that 
using useEffect hook

*/

import React, { useState } from "react";

const [data, setData] = useState("Hello");
function demoHook() {
  return (
    <div className="DemoHook">
      <h1> {data} </h1>
      <button onClick={() => setData("World")}> Update Data</button>
    </div>
  );
}

export default demoHook
