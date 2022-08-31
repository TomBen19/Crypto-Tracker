import { useState, useEffect } from "react";

import TransactionList from "../components/TransactionList";
import Button from "react-bootstrap/Button";
import Header from "../components/Header";
import Container from "react-bootstrap/Container";
import AddTransaction from "../components/AddTransaction";

const Transactions = () => {
  const [coinsList, setCoinsList] = useState([]);
  const [price, setPrice] = useState();
  const [value, setValue] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const closeModalHandler = () => {
    setModalOpen(false);
  };

  const openModalHandler = () => {
    setModalOpen(true);
  };

  useEffect(() => {
    if (coinsList != "") {
      saveTransaction(coinsList[coinsList.length - 1]);
    }
  }, [coinsList]);

  async function saveTransaction(coin) {
    const respone = await fetch(
      "https://crypto-tracker2-4493f-default-rtdb.firebaseio.com/.json",
      {
        method: "POST",

        body: JSON.stringify(coin),
      }
    );
  }

  const addCoinHandler = (uName, uQuantity, uPreis) => {
    setModalOpen(false);
    const roundPortValue = (Number(value) + uQuantity * uPreis).toFixed(2);
    setValue(roundPortValue);
    setCoinsList((prevCoinList) => {
      return [
        ...prevCoinList,
        {
          name: uName,
          quantity: uQuantity,
          preis: uPreis,
          id: Math.random().toString(),
        },
      ];
    });

    saveTransaction(coinsList[coinsList.length - 1]);
    console.log(coinsList[coinsList.length - 1]);
  };

  return (
    <div>
      <Header></Header>
      <Container>
        <AddTransaction
          onNewCoin={addCoinHandler}
          isModalOpen={modalOpen}
          closeModal={closeModalHandler}
        />

        <TransactionList coins={coinsList} />
        <Button onClick={openModalHandler}>Add</Button>
      </Container>
    </div>
  );
};
export default Transactions;
