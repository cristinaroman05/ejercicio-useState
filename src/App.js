import React from "react";
import "./App.css";
import BankAccount from "./components/BankAccount/BankAccount";
import BidderControl from "./components/BidderControl/BidderControl";
function App() {
  const [bidderList, setBidderList] = React.useState({
    total: 0,
  });
  const addBid = () => {
    const newBidderList = {
      ...bidderList, 
      total: bidderList.total +5,
    };
    setBidderList(newBidderList);
  };
  return (
    <div className="app">
      <h1>Cuenta bancaria:</h1>
      <BankAccount></BankAccount>
      <h1>Listado de pujas:</h1>
      <ul>
      {/* {bidderList.map(bidder => <li>{bidder}</li>)} */}
      </ul>
      <h1>Pujadores:</h1>
      <BidderControl addBid={addBid} name="Pedro"></BidderControl>
      <BidderControl addBid={addBid} name="Gonzalo"></BidderControl>
      <BidderControl addBid={addBid} name="Edu"></BidderControl>
    </div>
  );
}

export default App;
