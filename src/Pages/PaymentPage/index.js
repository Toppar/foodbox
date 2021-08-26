import React from "react";
import "./index.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class PaymentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      shippingAddress: "",
      shippingCity: "",
      shippingState: "",
      shippingZipcode: "",
      creditCardName: "",
      billingAddress: "",
      creditCardNumber: "",
      expirationDate: "",
      securityCode: "",
      shippingfirstName: "",
      shippinglastName: "",
      billingfirstName: "",
      billinglastName: "",
      billingCity: "",
      billingState: "",
      billingZipcode: "",
      displayBilling: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let name = target.name;
    let value = target.value;

    this.setState({
      ...this.state,
      [name]: value,
    });
  }

  handleCheck() {
    console.log("this should work");
    let currentCheckValue = this.state.displayBilling;
    this.setState({
      ...this.state,
      displayBilling: !currentCheckValue,
    });
  }

  render() {
    let shippingHelper = [
      {
        fieldName: "First Name",
        type: "first name",
        name: "firstName",
        placeholder: "Enter first name",
      },
      {
        fieldName: "Last Name",
        type: "last name",
        name: "lastName",
        placeholder: "Enter Last Name",
      },
      {
        fieldName: "Address",
        type: "address",
        name: "Address",
        placeholder: "Enter address",
      },
      {
        fieldName: "City",
        type: "city",
        name: "City",
        placeholder: "Enter city",
      },
      {
        fieldName: "State",
        type: "state",
        name: "State",
        placeholder: "Enter state",
      },
      {
        fieldName: "Zip code",
        type: "zipcode",
        name: "Zipcode",
        placeholder: "Enter zip code",
      },
    ];

    let shippingForm = shippingHelper.map((x) => (
      <Form.Group className="mb-3">
        <Form.Label>{x.fieldName}</Form.Label>
        <Form.Control
          type={`shipping ${x.type}`}
          placeholder={x.placeholder}
          value={this.state["shipping"[x.name]]}
          name={`shipping${x.name}`}
          onChange={this.handleChange}
        />
      </Form.Group>
    ));

    let billingForm = shippingHelper.map((x) => (
      <Form.Group className="mb-3">
        <Form.Label>{x.fieldName}</Form.Label>
        <Form.Control
          type={`billing ${x.type}`}
          placeholder={x.placeholder}
          value={this.state["billing"[x.name]]}
          name={`billing${x.name}`}
          onChange={this.handleChange}
        />
      </Form.Group>
    ));

    let paymentForm = (
      <div className="payment-container field2-container">
        <Form>
          <Form.Group className="mb-3" controlId="formCreditCardName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="credit card name"
              placeholder="Enter name"
              value={this.state.creditCardName}
              name="creditCardName"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCreditCardNumber">
            <Form.Label>Credit Card Number</Form.Label>
            <Form.Control
              type="credit card number"
              placeholder="Enter credit card number"
              value={this.state.creditCardNumber}
              name="creditCardNumber"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formExpirationDate">
            <Form.Label>Expiration Date</Form.Label>
            <Form.Control
              type="expiration date"
              placeholder="Enter expiration date"
              value={this.state.expirationDate}
              name="expirationDate"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formSecurityCode">
            <Form.Label>Security Code</Form.Label>
            <Form.Control
              type="security code"
              placeholder="Enter security code"
              value={this.state.securityCode}
              name="securityCode"
              onChange={this.handleChange}
            />
          </Form.Group>
        </Form>
      </div>
    );

    return (
      <div className="submit-container">
        <div className="address-container">
          <div className="shipping-form">
            <h1 className="address-heading">Shipping Address</h1>
            {shippingForm}
            <div>
              <input
                type="checkbox"
                id="billing-checkbox"
                name="billingCheckbox"
                value={this.state.displayBilling}
                onChange={this.handleCheck}
              ></input>
              <label for="billing-checkbox">
                Use different billing address
              </label>
            </div>
          </div>
          <div className="billing-container">
            {this.state.displayBilling ? (
              <div className="billing-form">
                <h1 className="address-heading">Billing Address</h1>{" "}
                {billingForm}{" "}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="creditcard-container">{paymentForm}</div>
        <Button variant="dark" type="submit" onClick={this.handleSubmit}>
          Submit order
        </Button>
      </div>
    );
  }
}

export default PaymentPage;
