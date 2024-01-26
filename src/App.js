import React from "react";
import "./App.css";
import BankAccount from "./components/BankAccount/BankAccount";
import BidderControl from "./components/BidderControl/BidderControl";
function App() {

  const [bidderList, setBidderList] = React.useState([100]);

  const addBid = () => {
    const amount = 5;
    const lastElement = bidderList[bidderList.length - 1];
    const newBidList = [...bidderList, lastElement + amount];
    console.log(newBidList)
    setBidderList(newBidList);
  };


  return (
    <div className="app">
      <h1>Cuenta bancaria:</h1>
      <BankAccount></BankAccount>
      <h1>Listado de pujas:</h1>

      {bidderList.map(bidder =><li>{bidder}</li>)}

      <h1>Pujadores:</h1>
      <BidderControl addBid={addBid} name="Pedro"></BidderControl>
      <BidderControl addBid={addBid} name="Gonzalo"></BidderControl>
      <BidderControl addBid={addBid} name="Edu"></BidderControl>
    </div>
  );
}

export default App;
