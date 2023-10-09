import RegisterForm from "./RegisterForm";
import balloons from "../assets/balloons.jpg"

export default function RegisterPage() {
  return (
    <div className="z-[0] border">
      <div className="absolute z-[3] w-full h-full top-0 bg-black/10"></div>
      <div className="absolute z-[2] w-full h-full top-0 bg-primary/10"></div>
      <img
        src={ balloons }
        alt=""
        className="absolute z-[1] top-0 w-full h-full object-cover"
      />
      <div className="absolute w-full z-[4] top-[120px]">
        <RegisterForm/>
      </div>
    </div>
  );
}