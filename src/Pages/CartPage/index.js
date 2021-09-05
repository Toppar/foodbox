import React from "react";
import "./index.css";
import { Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtotal: 0,
      taxRate: .0825,
      tax: 0,
      total: 0,
      selectedItemDetails: []
    };

    this.getItemArr = this.getItemArr.bind(this);
    this.handleCalculations = this.handleCalculations.bind(this)
    this.removeLineItem = this.removeLineItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  getItemArr() {
    //Take the selected item array and get the arr of objects
    let tempItemDetails = []

    for (let i = 0; i < this.props.rows.length; i++) {
      for (let j = 0; j < this.props.selectedItems.length; j++) {
        if (this.props.rows[i].id === this.props.selectedItems[j]) {
          tempItemDetails.push(this.props.rows[i]);
        }
      }
    }

    this.setState({
      ...this.state,
      selectedItemDetails: tempItemDetails
    })
  }

  handleCalculations() {
    console.log('handleCalculations')
    let tempSubtotal = 0
    let tempTax = 0
    let tempTotal = 0


    for (let i = 0; i < this.state.selectedItemDetails.length; i++) {
      console.log('inside loop: ' + this.state.selectedItemDetails[i].price)
      tempSubtotal += this.state.selectedItemDetails[i].price
    }

    console.log('tempSubtotal: ' + tempSubtotal)

    tempTax = tempSubtotal * this.state.taxRate
    tempTotal = tempSubtotal + tempTax

    this.props.getTotalPrice(tempTotal)

    this.setState({
      ...this.state,
      total: tempTotal.toFixed(2),
      subtotal: tempSubtotal.toFixed(2),
      tax: tempTax.toFixed(2)
    })

  }

  async componentDidMount() {
    await this.getItemArr();
    await this.handleCalculations();
  }

  removeLineItem(event) {
    console.log('removeItem')
    const target = event.target
    const id = target.name
    this.props.removeItem(id)
    let tempArr = []
    const tempSelectedItems = this.state.selectedItemDetails

    for (let i = 0; i < tempSelectedItems.length; i++) {
      if (id != tempSelectedItems[i].id) {
        console.log('id: ' + id)
        console.log('tempSelectedId: ' + tempSelectedItems[i].id)
        tempArr.push(tempSelectedItems[i])
      }
    }

    this.setState({
      ...this.state,
      selectedItemDetails: tempArr
    })


  }

  async removeItem(event) {
    console.log(event)
    await this.removeLineItem(event);
    await this.handleCalculations()
  }

  render() {

    let tableRows
    

    if (this.state.selectedItemDetails.length >= 1) {
      tableRows = this.state.selectedItemDetails.map((x) => (
        <tr key={x.id}>
          <td>{x.id}</td>
          <td>{x.dish}</td>
          <td>{x.cuisine}</td>
          <td>{x.price}</td>
          <td>
            <Button name={x.id} onClick={this.removeItem} variant="danger">Remove Item</Button>
          </td>
        </tr>
      ));
    }
    
    
    return (
      <div className="cart-page">
        <div className="table-container">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Item number</th>
                <th>Dish</th>
                <th>Cuisine</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{tableRows}</tbody>
          </Table>
        </div>
        <div className="cart-summary-container">
          <div className="cart-subtotal">Subtotal: ${this.state.subtotal} </div>
          <div className="cart-tax">Tax: ${this.state.tax} </div>
          <div className="cart-total">Total: ${this.state.total} </div>
          <Button as={Link} to="/payment" className="checkout-button" variant="dark">Checkout</Button>
        </div>

      </div>
    );
  }
}

export default CartPage;
