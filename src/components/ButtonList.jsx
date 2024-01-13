import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Computers",
  "Gaming",
  "Politics",
  "News",
  "Sports",
  "Education",
  "Beauty",
  "Kids",
  "Cooking",
  "India",
  "BattleGrounds",
  "Scout",
];
const ButtonList = () => {
  return (
    <div className="flex ">
      {list.map((name, index) => (
        <Button name={name} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
