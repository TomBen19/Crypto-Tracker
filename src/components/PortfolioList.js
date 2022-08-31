import classes from "./TransactionList.module.css";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import Table from "react-bootstrap/Table";

const PortfolioList = (props) => {
  const x = 0;
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {x > 0 && <th>Coisn Name</th>}
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
      {x > 0 && <p>sd</p>}
    </div>
  );
};
export default PortfolioList;
