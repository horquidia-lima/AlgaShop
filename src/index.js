import { StrictMode } from "react";
import ReactDOM from "react-dom";

function App() {
  return <div>Ola, mundo</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
