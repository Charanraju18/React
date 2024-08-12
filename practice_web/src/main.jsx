import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./header.jsx"
import Content from "./content.jsx"
import Footer from "./footer.jsx"


createRoot(document.getElementById("root")).render(
  <>
    {/* <Header /> */}
    <Content/>
    {/* <Footer/> */}
  </>
);
