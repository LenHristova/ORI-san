import { StatusBar } from "expo-status-bar";
import React from "react";
import { Business } from "./src/containers/Business/Business";
import { Home } from "./src/containers/Home/Home";

export default function App() {
  return <Business />;
  // return <Home onClickBusiness={() => null} />;
}
