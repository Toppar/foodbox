import React from "react";
import "./index.css";
import { Table, Button } from "react-bootstrap";

class SubmitOrderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      purchasedItems: [1, 3],
      totalAmount: this.props.totalPrice,
      shippedAddress: this.props.shippingAddress,
      confirmationNumber: null,
      selectedItemDetails: [],
    };
    this.generateConfirmationNumber =
      this.generateConfirmationNumber.bind(this);
  }

  getItemArr() {
    //Take the selected item array and get the arr of objects
    let tempItemDetails = [];

    for (let i = 0; i < this.props.rows.length; i++) {
      for (let j = 0; j < this.props.selectedItems.length; j++) {
        if (this.props.rows[i].id === this.props.selectedItems[j]) {
          tempItemDetails.push(this.props.rows[i]);
        }
      }
    }

    this.setState({
      ...this.state,
      selectedItemDetails: tempItemDetails,
    });
  }

  async componentDidMount() {
    await this.getItemArr();
    await this.generateConfirmationNumber();
  }

  generateConfirmationNumber() {
    let tempNumber = Math.floor(Math.random() * (9999999 - 1000000) + 1000000);
    this.setState({
      ...this.state,
      confirmationNumber: tempNumber,
    });
  }

  render() {
    let tableRows;

    if (this.state.selectedItemDetails.length >= 1) {
      tableRows = this.state.selectedItemDetails.map((x) => (
        <tr key={x.id}>
          <td>{x.id}</td>
          <td>{x.dish}</td>
          <td>{x.cuisine}</td>
          <td>{x.price}</td>
        </tr>
      ));
    }

    return (
      <div className="submit-order-page">
        <h1>Order Successful!</h1>
        <div className="order-details">
          <div className="detail-item">
            <h3>Confirmation Number:</h3>
            <p>{this.state.confirmationNumber}</p>
          </div>
          <div className="detail-item">
            <h3>Shipping Address:</h3>
            <p>{this.state.shippedAddress}</p>
          </div>
          <div className="detail-item">
            <h3>Total Amount:</h3>
            <p>${this.state.totalAmount}</p>
          </div>
        </div>
        <div className="order-items">
          <h3>Items Purchased</h3>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Item number</th>
                <th>Dish</th>
                <th>Cuisine</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>{tableRows}</tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default SubmitOrderPage;
