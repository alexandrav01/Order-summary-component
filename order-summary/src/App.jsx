import { useState } from "react";
import Hero from "./hero-header";
import OrderSummary from "./order-summary";
import Price from "./price";
import Payment from "./payment";
import "./App.css";


function App() {
  return (
    <>
      <Hero />
      <OrderSummary />
      <Price />
      <Payment />
    </>
  );
}

export default App;
