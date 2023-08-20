import PageNav from "../../Components/pagenav/PageNav";
import AppNav from "../../Components/appnav/AppNav";
import SuperMenu from "../../Components/super-menu/SuperMenu";
import Goods from "../../Components/products/Goods";
import { ToastContainer } from "react-toastify";

export default function HomePage() {
  return (
    <div>
      <div>
        <ToastContainer />
      </div>
      <PageNav />
      <AppNav />
      <SuperMenu />
      <Goods />
    </div>
  );
}
