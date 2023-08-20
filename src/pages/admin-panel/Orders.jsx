import RightSide from "../../Components/rightside/RightSide";
import Main from "../../Components/main/Main";
// import axios from "axios";

export default function Orders() {
  // const [order, setOrder] = useState({});

  // const getData = async () => {
  //   const response = await axios.get("http://localhost:8000/api/categories");
  //   const { data } = response;
  //   console.log(data);
  // };

  // getData();

  return (
    <>
      <Main />
      <RightSide />
    </>
  );
}
