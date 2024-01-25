import React from "react";
import "../BankAccount/BankAccount.css";

const BankAccount = () => {
  const [account, setAccount] = React.useState({
    name: "Fran",
    savings: 5000,
    founds: 1000,
  });
  const takeMoney = () => {
    const TotalSavings = account.savings;
    if (TotalSavings >= 50) {
      setAccount(account);
    } else {
      return alert("Amigo... aún no has ahorrado 50€...");
    }
    const newAccount = {
      ...account,
      savings: account.savings - 50,
    };
    setAccount(newAccount);
  };

  const addMoney = () => {
    const newAccount = {
      ...account,
      savings: account.savings + 100,
    };
    setAccount(newAccount);
  };

  const addMoneyToFounds = () => {
    const TotalSavings = account.savings;
    if (TotalSavings >= 1000) {
      setAccount(account);
    } else {
      return alert("Primero tienes que ahorrar al menos 1000€");
    }
    const newAccount = {
      ...account,
      savings: account.savings - 1000,
      founds: account.founds + 1000,
    };
    setAccount(newAccount);
  };

  return (
    <div>
      <p>El titular de la cuenta es: {account.name}</p>
      <p>El saldo de la cuenta de ahorros es: {account.savings} €</p>
      <p>El total del fondo de inversión es: {account.founds} €</p>

      <button onClick={takeMoney}>Retirar 50€</button>
      <button onClick={addMoney}>Ingresar 100€</button>
      <button onClick={addMoneyToFounds}>Meter en fondos 1000€</button>
    </div>
  );
};

export default BankAccount;
