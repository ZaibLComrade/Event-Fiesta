import LoginForm from "./LoginForm";
import crowd from "../assets/crowd.jpg"

export default function LoginPage() {
  return (
    <div className="z-[0]">
      <div className="absolute z-[3] w-full h-full top-0 bg-black/30"></div>
      <div className="absolute z-[2] w-full h-full top-0 bg-primary/10"></div>
      <img
        src={ crowd }
        alt=""
        className="absolute z-[1] top-0 w-full h-full object-cover"
      />
      <div className="relative z-[4] top-[100px]">
        <LoginForm />
      </div>
    </div>
  );
}
