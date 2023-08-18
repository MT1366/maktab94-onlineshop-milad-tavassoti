import PageNav from "../../Components/pagenav/PageNav";
import AppNav from "../../Components/appnav/AppNav";
import SuperMenu from "../../Components/super-menu/SuperMenu";
import Goods from "../../Components/products/Goods";

export default function HomePage() {
  return (
    <>
      <PageNav />
      <AppNav />
      <SuperMenu />
      <Goods />
    </>
  );
}
