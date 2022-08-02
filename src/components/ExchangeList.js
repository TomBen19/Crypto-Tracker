import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import Table from 'react-bootstrap/Table'

const ExchangeList = (props) => {
    return (
        
            <div >
                <Table striped bordered hover >
      <thead>
        <tr>
         
          <th>Coin Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
     
            
            <tbody >
                
                {props.exchanges.map((exchange) => (
                    <tr key = {exchange.id}>
                    <th >{exchange.name} </th>
                    <th>{exchange.volume}</th>
                    
                    </tr>
                ))}
                
            </tbody>
            </Table>
            </div>
            
        )
    

};

export default ExchangeList;