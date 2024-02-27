import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="shadow-md rounded-md py-4 px-8">{children}</div>;
};

export default Card;
