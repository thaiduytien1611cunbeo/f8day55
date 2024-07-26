import React from "react";
import CardBodyLeft from "./CardBodyLeft";
import CardBodyRight from "./CardBodyRight";

const CardBodyContent = () => {
  return (
    <div className="container flex gap-10 p-5">
      <CardBodyLeft />
      <CardBodyRight />
    </div>
  );
};

export default CardBodyContent;
