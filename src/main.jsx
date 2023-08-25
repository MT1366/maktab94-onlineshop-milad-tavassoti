import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import store from "./store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-tailwind/react";

import "./index.css";

store.dispatch({ type: "order/show" });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
