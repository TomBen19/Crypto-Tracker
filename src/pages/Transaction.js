import {useState} from 'react'
import AddTransaction from '../components/AddTransaction';
import CoinList from '../components/CoinList';
import Button from 'react-bootstrap/Button';
import Header from '../components/Header'
import Container from 'react-bootstrap/Container'

const Transaction = () => {
    const [coinsList, setCoinsList] = useState([]);
  const [price, setPrice] = useState();
  const [value, setValue] = useState(0);

  async function saveTransaction(coin) {
    const respone = await fetch('https://crypto-tracker-c3d8d-default-rtdb.europe-west1.firebasedatabase.app/coins.json', {
    method: 'POST',
    body: JSON.stringify(coin)
  
  });
}

  const addCoinHandler = (uName,uQuantity,  uPreis) => {
   
    const roundPortValue = (Number(value) + uQuantity* uPreis).toFixed(2);
    setValue(roundPortValue);
    setCoinsList((prevCoinList) => {
      return [
        ...prevCoinList,
         {name: uName, quantity: uQuantity, preis: uPreis, id: Math.random().toString()},
      ]
    })
    
    saveTransaction(coinsList[coinsList.length -1])
    console.log(coinsList[coinsList.length -1])
    }
  
    return (
        <div>
        <Header></Header>
        <Container>
        <AddTransaction onNewCoin= {addCoinHandler} />
        <h2>Portfolio Value: {value} $</h2>
        <CoinList coins ={coinsList}/>
        </Container>
        
        
        
        
        
        
      </div>
    )

}
export default Transaction;