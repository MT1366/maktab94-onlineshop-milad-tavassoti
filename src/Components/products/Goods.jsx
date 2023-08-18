import { Card } from "@material-tailwind/react";
import { Breadcrumbs } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
// import axios from "axios";

export default function Goods() {
  //  async function getData () {
  //  await axios.get("http://localhost:8000/api/products");

  return (
    <>
      <Breadcrumbs>
        <NavLink className="opacity-60">Docs</NavLink>
        <NavLink className="opacity-60">Components</NavLink>
        <NavLink>Breadcrumbs</NavLink>
      </Breadcrumbs>
      <h4>Products Name</h4>
      <Card className="flex flex-row flex-wrap gap-2">
        <Card>
          <p>Title</p>
          <p>Image</p>
        </Card>
        <Card>
          <p>Title</p>
          <p>Image</p>
        </Card>
      </Card>
    </>
  );
}
