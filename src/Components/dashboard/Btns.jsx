import { ButtonGroup, Button } from "@material-tailwind/react";

export function Btns() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <h2>List of Products</h2>
      <div className="flex w-max flex-col gap-2">
        <ButtonGroup size="lg" color="blue">
          <Button>Products</Button>
          <Button>Inventory and Prices</Button>
          <Button>Orders</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
