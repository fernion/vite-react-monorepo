import React from "react";
import { useAuth } from "../../auth";

export const Panel = () => {
  const { userName } = useAuth();
  return <div>Hello, {userName}</div>;
};
