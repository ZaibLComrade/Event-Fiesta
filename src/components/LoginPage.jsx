import LoginForm from "./LoginForm";
import crowd from "../assets/crowd.jpg"

export default function LoginPage() {
  return (
    <div className="h-screen relative top-0">
      <div className="absolute z-[3] w-full h-full top-0 bg-black/30"></div>
      <div className="absolute z-[2] w-full h-full top-0 bg-primary/10"></div>
      <img
        src={ crowd }
        alt=""
        className="z-[1] absolute top-0 w-full h-screen object-cover"
      />
      <div className="absolute z-[4] w-full top-1/2 -translate-y-1/2 px-4">
        <LoginForm />
      </div>
    </div>
  );
}
