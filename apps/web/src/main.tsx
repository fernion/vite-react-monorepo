import React from "react";
import "./style.css";
import typescriptLogo from "/typescript.svg";
import { Panel } from "@repo/ui/panel";

import { createRoot } from "react-dom/client";
import { AuthProvider } from "../../../packages/auth";

const container = document.getElementById("root");
const root = createRoot(container!);

const App = () => {
  return (
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img
          src={typescriptLogo}
          className="logo vanilla"
          alt="TypeScript logo"
        />
      </a>
      <Panel></Panel>
    </div>
  );
};

root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);