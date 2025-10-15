import React from "react";
import { createRoot } from "react-dom/client";
import Page from "./Page";

// Only mount with BrowserRouter when running standalone
const isStandalone = !window.__MFS__;

const root = createRoot(document.getElementById("root"));
if (isStandalone) {
   import("react-router-dom").then(({ BrowserRouter }) => {
      root.render(
         <BrowserRouter>
            <Page />
         </BrowserRouter>
      );
   });
} else {
   root.render(<Page />);
}
