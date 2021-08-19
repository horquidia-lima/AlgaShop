import { StrictMode } from "react";
import ReactDOM from "react-dom";

import HomeView from "./views/Home.view";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <HomeView />
  </StrictMode>,
  rootElement
);
