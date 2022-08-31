import { useState } from "react";
import ExchangeList from "../components/ExchangeList";
import Button from "react-bootstrap/esm/Button";
import Header from "../components/Header";

const List = () => {
  const [coinsList, setCoinsList] = useState([]);
  async function coinHandler() {
    const respone = await fetch(
      "https://api.coingecko.com/api/v3/exchanges?per_page=50&page=1"
    );
    const data = await respone.json();
    for (let i = 0; i < 50; i++) {
      setCoinsList((prevCoinList) => {
        return [
          ...prevCoinList,
          {
            name: data[i].name,
            volume: data[i].trade_volume_24h_btc.toFixed(2),
            id: Math.random().toString(),
          },
        ];
      });
    }
  }
  return (
    <div>
      <Header></Header>

      <Button variant="dark" onClick={coinHandler}>
        Get Exchange List
      </Button>

      <ExchangeList exchanges={coinsList}></ExchangeList>
    </div>
  );
};
export default List;
