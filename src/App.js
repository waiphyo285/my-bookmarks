import * as React from "react";
import "react-toastify/dist/ReactToastify.css";

import AppBarComponent from "./components/AppBarComponent";
import BodyComponent from "./components/BodyComponent";

export default function App() {
  return (
    <>
      <AppBarComponent />
      <BodyComponent />
    </>
  );
}
