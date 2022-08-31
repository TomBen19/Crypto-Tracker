import { Component, useState } from "react";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import CoinList from "./components/TransactionList";
import Button from "react-bootstrap/Button";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import ViewPortfolio from "./pages/ViewPortfolio";
import List from "./pages/List";
import Transactions from "./pages/Transactions";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<ViewPortfolio />} />
          <Route path="exchanges/*" element={<List />} />
          <Route path="transactions/*" element={<Transactions />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
