import React from "react";
import "./index.css";
import { DataGrid } from "@material-ui/data-grid";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

class MenuPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu:this.props.rows
    };
    
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ menu: nextProps.rows });  
  }

  render() {
    const columns = [
      { field: "id", headerName: "Item number", width: 157 },
      {
        field: "dish",
        headerName: "Dish",
        width: 150,
        editable: true,
      },
      {
        field: "cuisine",
        headerName: "Cuisine",
        width: 150,
        editable: true,
      },
      {
        field: "price",
        headerName: "Price",
        type: "number",
        width: 110,
        editable: true,
      },
    ];

    return (
      <div className="menu-container">
        <DataGrid
          rows={this.state.menu}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
          onSelectionModelChange={(newSelection) => {
            this.props.handleSelection(newSelection);
          }}
        />
        <div className="button-container">
          
          <Button as={Link} to="/cart" variant="dark" type="submit">
            Add To Cart
          </Button>
        </div>
      </div>
    );
  }
}

export default MenuPage;
