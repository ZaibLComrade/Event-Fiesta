import LoginForm from "./LoginForm";
import balloons from "../assets/balloons.jpg"

export default function LoginPage() {
  return (
    <div>
      <img
        src={ balloons}
        alt=""
        className="absolute top-0 w-full h-full object-cover"
      />
      <div className="relative top-[100px]">
        <LoginForm />
      </div>
    </div>
  );
}
