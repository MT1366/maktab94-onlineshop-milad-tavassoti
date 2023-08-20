import RightSide from "../../Components/rightside/RightSide";
import Main from "../../Components/main/Main";

export default function Products() {
  // const [modal, setModal] = useState(true);

  // axios.get("http://localhost:8000/api/products").then((response) => {
  //   console.log(response.data);
  // });

  // function modalHandler() {
  //   setModal((m) => !m);
  //   console.log(modal);
  // }

  return (
    <>
      <RightSide />
      <Main />
    </>
  );
}
