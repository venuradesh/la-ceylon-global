//dependencies
import { createRoot } from "react-dom/client";

//components
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <>
    <App />
  </>
);
