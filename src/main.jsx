import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import "./index.css";

import SuperTokens, {
  getSuperTokensRoutesForReactRouterDom,
} from "supertokens-auth-react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";

// For supertokens auth component
import * as reactRouterDom from "react-router-dom";

import axiosI from "./api/axios";
import Home from "./components/Home/Home";

// Supertokens init
SuperTokens.init({
  appInfo: {
    appName: "newsscraperauth",
    apiDomain: "http://localhost:8080",
    websiteDomain: "http://localhost:3000",
    apiBasePathL: "/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [EmailPassword.init(), Session.init()],
});

Session.addAxiosInterceptors(axiosI);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
