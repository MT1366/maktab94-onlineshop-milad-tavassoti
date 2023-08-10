import PageNav from "../../Components/pagenav/PageNav";
import LoginForm from "../../Components/login-form/LoginForm";
export default function Login() {
  return (
    <div className="bg-[url('/src/images/loginformimage.jpg')]">
      <PageNav />
      <LoginForm />
    </div>
  );
}
