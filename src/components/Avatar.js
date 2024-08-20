import React from "react";
import man from "../Assets/man.png";
import woman from "../Assets/woman.png";
export const MaleAvatar = () => {
  return (
    <div>
      <img src={man} alt="" width={"50px"} />
    </div>
  );
};

export const FemaleAvatar = () => {
  return (
    <div>
      <img src={woman} alt="" width={"50px"} />
    </div>
  );
};
