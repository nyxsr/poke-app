import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailPoke from "./Components/Pokelist/DetailPoke";
import Header from "./Components/Header/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <>
    <Header />
  <Router>
    {/* <App /> */}
    <Routes>
      <Route path="/">
        <Route index element={<App />} />
        <Route path="pokemon/:name" element={<DetailPoke />} />
      </Route>
    </Routes>
  </Router>
  </>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
