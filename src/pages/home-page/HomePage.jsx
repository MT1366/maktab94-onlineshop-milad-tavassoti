import { Link } from "react-router-dom";
import PageNav from "../../Components/pagenav/PageNav";
import { Footer } from "../../Components/footer/Footer";
import { Cards } from "../../Components/cards/Cards";

export default function HomePage() {
  return (
    <>
      <div>
        <PageNav />
        {/* <AppNav /> */}
        <div
          style={{
            marginTop: "50px",
            padding: "10px",
          }}
        >
          <Link to="/dashboard">Go to dashboard</Link>
          <div className="flex flex-row gap-5">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
