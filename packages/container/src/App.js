import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { MarketingApp } from "./components/MarketingApp";
import Header from "./components/Header";

export function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
}
