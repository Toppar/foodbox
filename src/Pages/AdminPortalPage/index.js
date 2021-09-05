import React from "react";
import "./index.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class AdminPortalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dish: "",
      price: "",
      cuisine: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDish = this.handleDish.bind(this);
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


  handleSubmit(event) {
    event.preventDefault();

    const body = {
      dish: this.state.dish,
      price: this.state.price,
    };

    const data = JSON.stringify(body);
    this.props.changePrice(data);
  }

  handleDish(event){
    event.preventDefault();

    const body = {
      cuisine: this.state.cuisine,
      dish: this.state.dish,
    };

    const data = JSON.stringify(body);
    this.props.changeDish(data);
  }
  
  render() {
    let changePriceForm = (
      <div className="change-price-container field-container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label>Dish</Form.Label>
            <Form.Control
              type="dish"
              placeholder="Enter dish"
              value={this.state.dish}
              name="dish"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="price"
              placeholder="Enter new price"
              value={this.state.price}
              name="price"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button onClick={this.handleSubmit} variant="dark">
            Change Price
          </Button>
        </Form>
      </div>
    );

    let changeDishForm = (
      <div className="change-dish-container field-container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label>Enter cuisine</Form.Label>
            <Form.Control
              type="cuisine"
              placeholder="Enter item number"
              value={this.state.cuisine}
              name="cuisine"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label>Enter new dish</Form.Label>
            <Form.Control
              type="dish"
              placeholder="Enter new dish"
              value={this.state.dish}
              name="dish"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button onClick={this.handleDish} variant="dark">
            Change Dish
          </Button>
        </Form>
      </div>
    );

    return <div className="admin-portal-container"><h3>Admin Portal</h3>{changePriceForm} {changeDishForm}</div>;
  }
}

export default AdminPortalPage;
