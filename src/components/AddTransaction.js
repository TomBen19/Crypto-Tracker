import { useRef, useState } from "react";
import classes from "./AddTransaction.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useInput from "../hooks/useInput";

const AddTransaction = (props) => {
  const testInput = useInput(2);
  //const setName = useRef('');
  const setQuantity = useRef("");

  //const setPreis = useRef('');
  const [value, setValue] = useState(0);
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");
  const [marketPrice, setMarketPrice] = useState();
  const [enteredCoinValid, setenteredCoinValid] = useState(false);
  const [enteredCoinTouched, setenteredCoinTouched] = useState(false);

  const invalidName = enteredCoinTouched && !enteredCoinValid;

  async function marketHandler() {
    setenteredCoinTouched(true);

    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${name}&vs_currencies=usd`
    );
    const data = await response.json();
    if (name == "bitcoin") {
      setenteredCoinValid(true);
      setMarketPrice(data.bitcoin.usd);

      setPrice(data.bitcoin.usd);
    } else if (name == "ethereum") {
      setenteredCoinValid(true);
      setMarketPrice(data.ethereum.usd);

      setPrice(data.ethereum.usd);
    } else if (name == "cardano") {
      setenteredCoinValid(true);
      setMarketPrice(data.cardano.usd);

      setPrice(data.cardano.usd);
    } else {
      setenteredCoinValid(false);
    }
  }
  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newQuantity = setQuantity.current.value;

    //const newPreis = setPreis.current.value;
    props.onNewCoin(name, newQuantity, price);
    
    async function addBuy() {
    fetch('https://crypto-tracker-c3d8d-default-rtdb.europe-west1.firebasedatabase.app/')
    }
  };

  const blurHandler = (event) => {
    setenteredCoinTouched(true);


    
  };
  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Coin {testInput.testReturn}</Form.Label>
        <Form.Control
          type="text"
          placeholder="Coin Name"
          onChange={nameChangeHandler}
          onBlur={blurHandler}
          value={name}
        />
        {invalidName && (
          <p className={classes.error}>Bitte gültigen Coin Namen eingeben</p>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="number" placeholder="Quantity" ref={setQuantity} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Price in $"
          onChange={priceChangeHandler}
          value={price}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Button variant="dark" size="sm" onClick={marketHandler}>
          Get Market Price
        </Button>
      </Form.Group>

      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddTransaction;
