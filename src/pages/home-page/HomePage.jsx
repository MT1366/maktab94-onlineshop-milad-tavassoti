import { Link } from "react-router-dom";
import PageNav from "../../Components/pagenav/PageNav";
// import AppNav from "../../Components/appnav/AppNav";

export default function HomePage() {
  return (
    <div>
      <PageNav />
      {/* <AppNav /> */}
      <div
        style={{ border: "2px solid grey", marginTop: "50px", padding: "10px" }}
      >
        <Link to="/dashboard">Go to dashboard</Link>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          sequi eaque eius cum modi error earum architecto a consequatur quasi.
        </h2>
      </div>
    </div>
  );
}
