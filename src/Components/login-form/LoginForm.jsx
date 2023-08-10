import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function LoginForm() {
  return (
    <Card
      shadow={false}
      className=" flex items-center max-w-screen max-h-screen text-center text-black"
    >
      <Typography className="m-1" variant="h4">
        Sign In
      </Typography>
      <Typography className="m-1 font-normal">
        Enter your details to Log in.
      </Typography>
      <form className=" text-white mt-8 m-2 w-80 max-w-screen-lg sm:w-70">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" />
          <Input size="lg" label="Email" />
          <Input type="password" size="lg" label="Password" />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-white"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth>
          Log In
        </Button>
      </form>
    </Card>
  );
}
