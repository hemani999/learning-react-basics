import React from "react";

// declaring another object to pass as props
interface anotherObject {
  firstName: string;
  lastName: string;
  age?: number;
}

//Props we define parameters that this component is expecting
interface Props {
  text: string;
  num: number;
  option: boolean;
  //accept function with string as return type
  fn?: (name: string) => string;
  // can also pass the objects
  obj: anotherObject;
}

// declaring a component called textfield
// React.FC = function component
export const TextField: React.FC<Props> = () => {
  return (
    <div>
      <input />
    </div>
  );
};
