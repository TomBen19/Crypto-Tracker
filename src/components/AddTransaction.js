import { useState } from "react";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import useInput from "../hooks/useInput";

import ReactModal from "react-modal";
import classes from "./AddTransaction.module.css";
import Container from "react-bootstrap/esm/Container";

const AddTransaction = (props) => {
  const testInput = useInput(2);
  //const setName = useRef('');

  //const setPreis = useRef('');

  const [value, setValue] = useState(0);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [name, setName] = useState("");
  const [marketPrice, setMarketPrice] = useState();
  const [enteredCoinValid, setenteredCoinValid] = useState(false);
  const [enteredCoinTouched, setenteredCoinTouched] = useState(false);
  const [enteredQuantityValid, setenteredQuantityValid] = useState(false);
  const [enteredQuantityTouched, setenteredQuantityTouched] = useState(false);

  const invalidName = enteredCoinTouched && !enteredCoinValid;
  const invalidQuantity = enteredQuantityTouched && !enteredQuantityValid;

  async function marketHandler(event) {
    setName(event.target.value);
    setenteredCoinTouched(true);
    const newName = event.target.value;
    

    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${newName}&vs_currencies=usd`
    );
    const data = await response.json();
    if (newName == "Bitcoin") {
      setenteredCoinValid(true);
      setMarketPrice(data.bitcoin.usd);

      setPrice(data.bitcoin.usd);
    } else if (newName == "Ethereum") {
      setenteredCoinValid(true);
      setMarketPrice(data.ethereum.usd);

      setPrice(data.ethereum.usd);
    } else if (newName == "Cardano") {
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
    setName("Bitcoin");
    console.log(name);
    marketHandler();
  };

  const quantityChangeHandler = (event) => {
    setenteredQuantityTouched(true);
    setQuantity(event.target.value);
    if (quantity != 0 && quantity != null) {
      setenteredQuantityValid(true);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    //if (quantity != 0 && quantity != null) {
    //const newPreis = setPreis.current.value;
    props.onNewCoin(name, quantity, price);
    setPrice(0);
    setQuantity(0);

    async function addBuy() {
      fetch(
        "https://crypto-tracker-c3d8d-default-rtdb.europe-west1.firebasedatabase.app/"
      );
    }
  };

  const blurHandler = (event) => {
    setenteredCoinTouched(true);
  };
  return (
    <ReactModal isOpen={props.isModalOpen}>
      <Container>
        <Button onClick={props.closeModal} variant="dark">
          Close
        </Button>

        <Form onSubmit={submitHandler}>
          <Form.Select
            onChange={marketHandler}
            className={classes.formInput}
            aria-label="Default select example"
          >
            <option>Select Coin</option>
            <option value="Bitcoin">Bitcoin</option>
            <option value="Ethereum">Ethereum</option>
            <option value="Cardano">Cardano</option>
          </Form.Select>

          <Form.Group
            className={classes.formInput}
            controlId="formBasicPassword"
          >
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder="Quantity"
              value={quantity}
              onChange={quantityChangeHandler}
            />
            {invalidQuantity && (
              <p className={classes.error}>
                Bitte eine Menge größer als 0 eingeben!
              </p>
            )}
          </Form.Group>

          <Form.Group
            className={classes.formInput}
            controlId="formBasicPassword"
          >
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Price in $"
              onChange={priceChangeHandler}
              value={price}
            />
          </Form.Group>

          <Form.Group
            className={classes.formInput}
            controlId="formBasicCheckbox"
          >
            <Button
              variant="dark"
              type="submit"
              className={classes.centerButton}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </ReactModal>
  );
};

export default AddTransaction;
