import { NavLink } from "react-router-dom";
import { ButtonGroup, Button } from "@material-tailwind/react";

export function Btns() {
  return (
    <div className="flex flex-row pt-5 align-center justify-around">
      <h2>List of Products</h2>

      <ButtonGroup variant="outlined">
        <Button>
          <NavLink to="orders">Orders</NavLink>
        </Button>
        <Button>
          <NavLink to="inventory">Pricing And Inventory</NavLink>
        </Button>
        <Button>
          <NavLink to="products">Products</NavLink>
        </Button>
      </ButtonGroup>
    </div>
  );
}
