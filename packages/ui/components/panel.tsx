import React from "react";
import { useAuth } from "../../auth";

export const Panel = () => {
  const { userName } = useAuth();

  console.log("useAuth on package", userName);

  return <div>Hello, {userName}</div>;
};
