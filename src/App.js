import React from "react";
import "./App.css";
import { Toaster } from "sonner";

//^ component
import Router from "./routes/Router";

function App() {
  return (
    <>
      <Router />
      <Toaster richColors />
    </>
  );
}

export default App;
