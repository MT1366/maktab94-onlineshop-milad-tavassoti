import PageNav from "../../Components/pagenav/PageNav";
import { ToastContainer } from "react-toastify";
import LandingPage from "../../Components/landing-page/LandingPage";

// import AppNav from "../../Components/appnav/AppNav";
// import SuperMenu from "../../Components/super-menu/SuperMenu";
// import Goods from "../../Components/products/Goods";

export default function HomePage() {
  return (
    // <div className="bg-pale-blue h-full w-full">
    <div>
      <div>
        <ToastContainer />
      </div>
      <PageNav />
      <LandingPage />
    </div>
  );
}
