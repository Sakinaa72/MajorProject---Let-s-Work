import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";

import App from "./App";
import Login from "./pages/authentication/Login/Login";
import SignIn from "./pages/authentication/Signin/SignIn";
import UserDetailForm from "./pages/authentication/userDetailForms/UserDetailForm";

import { queryClient } from "./http";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
