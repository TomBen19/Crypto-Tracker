import classes from "./TransactionList.module.css";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import Table from "react-bootstrap/Table";

const TransactionList = (props) => {
  return (
    <div className={classes.container}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Coin Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {props.coins.map((coin) => (
            <tr key={coin.id}>
              <th>{coin.name} </th>
              <th>{coin.quantity}</th>
              <th>{coin.preis} $</th>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default TransactionList;
