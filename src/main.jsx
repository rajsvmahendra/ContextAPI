import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { AppProvider } from "./context/AppContext";
import { SearchProvider } from "./context/SearchContext";

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <SearchProvider>
      <App />
    </SearchProvider>
  </AppProvider>
);

