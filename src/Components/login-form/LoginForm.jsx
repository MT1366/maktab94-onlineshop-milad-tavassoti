import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";

// import { useState } from "react";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function LoginForm() {
  const { register, handleSubmit, formState } = useForm();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  // WRITE A FUNCTION FOR LOGOUT BTN WITH THIS

  // removeCookie("user", "20:14:00");
  // const date = new Date();

  const navigate = useNavigate();
  const { errors } = formState;

  // THIS PART IS FOR CONDITIONAL RENDERING FOR BETTER UI - CHECK IT LATER
  // const [isLogin, setIsLogin] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  function onSubmit(data) {
    // POST DATA USING AXIOS AND COMPARE WITH DATA BASE
    // console.log(data);

    axios
      .post("http://localhost:8000/api/auth/login", data)
      .then(function (response) {
        // setIsLoading(true);
        // console.log(token);

        console.log(response);
        const { accessToken, refreshToken } = response.data.token;

        setCookie("accessToken", accessToken);
        setCookie("refreshToken", refreshToken);
        navigate("/dashboard");
      })
      .catch(function () {
        // setIsLogin(false);
        // const errorMessage = error.message;
        alert("You Are Not Authorized for accessing this page,please signup");
        navigate("/signup-page");
      });
  }

  function onError(errors) {
    console.log(errors.message);
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center p-auto p-40 sm:flex-row sm:items-center ">
        <Card className="w-80 h-96 bg-blue-700 md:w-96">
          <div className="flex flex-col p-5">
            <Typography variant="h4" color="white">
              Log In To Admin Panel
            </Typography>
            <Typography color="white" className="mt-1 font-normal">
              Enter your Authorized Usernam and Password.
            </Typography>
            <CookiesProvider>
              <form
                onSubmit={handleSubmit(onSubmit, onError)}
                className=" text-white mt-6 m-2"
              >
                <div className=" flex flex-col gap-5">
                  <Input
                    {...register("username", {
                      required: "this field is reqired",
                      min: {},
                    })}
                    id="username"
                    size="lg"
                    label="Username"
                    type="text"
                    color="white"
                    icon={<i className="fas fa-heart" />}
                  />
                  {errors?.username && (
                    <p className="text-red-600 text-xs font-light relative animate-bounce">
                      This field is required
                    </p>
                  )}

                  <Input
                    {...register("password", {
                      required: "this field is reqired",
                    })}
                    type="password"
                    id="password"
                    size="lg"
                    label="Password"
                    color="white"
                  />
                  {errors?.password && (
                    <>
                      <p className="text-red-600 text-xs font-light absoulute animate-bounce">
                        This field is required
                      </p>
                    </>
                  )}
                </div>
                <Checkbox
                  label={
                    <Typography
                      variant="small"
                      className="flex items-center font-normal"
                      color="white"
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
                <Button type="submit" fullWidth>
                  Log In
                </Button>
              </form>
            </CookiesProvider>
          </div>
        </Card>
        <Card className="w-80 h-96 border bg-[url('src/images/loginformimage.jpg')] bg-center bg-contain bg-no-repeat md:w-96">
          {" "}
        </Card>
      </div>
    </>
  );
}
