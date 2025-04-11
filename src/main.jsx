import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
// import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter } from "react-router-dom";
import { CartProvider } from "./contexts/cart";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <CartProvider>
          <App />
        </CartProvider>
      </HashRouter>
      {/* <BrowserRouter basename="/jfashion-webshop">
        <App />
      </BrowserRouter> */}
    </QueryClientProvider>
  </StrictMode>
);
