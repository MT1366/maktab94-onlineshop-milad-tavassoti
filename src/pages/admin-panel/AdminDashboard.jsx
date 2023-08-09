import Dashboard from "../../Components/dashboard/Dashboard";
import PageNav from "../../Components/pagenav/PageNav";

export default function AdminDashboard() {
  return (
    <div>
      <PageNav />

      <Dashboard />
      <h1>Table of products</h1>
    </div>
  );
}
