import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc"

const loggedInToast = () =>
  toast.success("Successfully logged in!", {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  }
);

const userAlreadyLoggedIn = () => 
  toast.info("User already logged in", {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  }
);

export default function RegisterForm() {
  // Getting customized firebase functions from context
  const { signInUser, user, setLoading, googleSignInUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");

  // Runs when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents reload when submitted
    // Collecting form input data
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    if (email === user?.email) {
	  navigate("/");
	  userAlreadyLoggedIn();
      return;
    }

    // Loggin in firebase user
    signInUser(email, password)
      .then(() => {
        navigate(location?.state || "/");
		loggedInToast();
        setLoading(false);
      })
      .catch((err) => {
        setError(err.code);
        console.log(error);
        setLoading(false);
      }); // TODO: Errors to be manipulated later
  };

  return (
    <div>
      <div className="flex-shrink-0 w-full font-montserrat max-w-sm pb-5 mx-auto border-red-500 shadow-2xl card bg-base-100">
        <form className="card-body" onSubmit={handleSubmit}>
          <h1 className="w-max mx-auto text-3xl font-semibold font-playfair-display">
            Login
          </h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="mt-6 form-control">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
		<div className="mx-auto text-center w-full px-8 mb-4">
			<hr className="border w-full"/>
			<p className="font-bold  w-8 mx-auto bg-base-100 relative -top-3"> Or</p>
			<button onClick={ googleSignInUser } className="flex items-center btn btn-accent w-full gap-2"><FcGoogle className="text-xl"/><div>Login with Google</div></button>
		</div>
        <div className="mx-auto text-sm md:text-base text-center">
          <p>
            Don't have an account?{" "}
            <Link
              className="text-blue-600 underline hover:text-blue-500"
              to="/register"
            >
              Register
            </Link>{" "}
            here
          </p>
        </div>
      </div>
    </div>
  );
}
