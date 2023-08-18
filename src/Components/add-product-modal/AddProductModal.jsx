import {
  Input,
  Card,
  Button,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";
export default function AddProductModal() {
  return (
    <Card className="relative m-auto z-10 w-fill sm:w-fill text-center bg-blue-900 text-white p-5 gap-3">
      <p>Add/Edit Product</p>

      <div className="text-left flex gap-2">
        <Input label="Products Image" className="text-white" />
        <Button type="">Browse</Button>
      </div>
      <Input label="Product Name" />
      <Select label="Products Category">
        <Option>Mobile</Option>
        <Option>Sport</Option>
        <Option>Food</Option>
      </Select>
      <div className="w-auto">
        <Textarea label="Desctiption" />
      </div>
      <Button type="submit">Save</Button>
    </Card>
  );
}
