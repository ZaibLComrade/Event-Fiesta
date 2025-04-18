import RegisterForm from "./RegisterForm";
import balloons from "../assets/balloons.jpg"

export default function RegisterPage() {
  return (
    <div className="relative top-0 h-screen">
      <div className="absolute z-[3] w-full h-full top-0 bg-black/10"></div>
      <div className="absolute z-[2] w-full h-full top-0 bg-primary/10"></div>
      <img
        src={ balloons }
        alt=""
        className="absolute z-[1] top-0 w-full h-full object-cover"
      />
      <div className="absolute z-[4] w-full top-1/2 -translate-y-1/2">
        <RegisterForm/>
      </div>
    </div>
  );
}
