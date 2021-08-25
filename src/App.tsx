import React from "react";
import { TextField } from "./components/TextFieldComponent";

const App: React.FC = () => {
  return (
    <div>
      <TextField
        text="hello"
        num={33}
        option={true}
        obj={{ firstName: "Hello", lastName: "TypeScript" }}
      />
    </div>
  );
};

export default App;
