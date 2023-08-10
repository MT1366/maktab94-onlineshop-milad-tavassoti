import { Button } from "@material-tailwind/react";

export default function Products() {
  return (
    <div className="flex justify-around p-5 items-center">
      <h2>Product management</h2>
      <Button variant="outlined">Add</Button>
    </div>
  );
}
