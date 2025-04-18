import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

const registered = () =>
  toast.success("Successfully registered user", {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

const warnPass = (statement) =>
  toast.warn(statement, {
    position: "bottom-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});

const errorPass = (statement) =>
  toast.error(statement, {
    position: "bottom-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});


const validatePassword = (password) => {
  const minLength = 6;
  const lengthExp = new RegExp(`^.{1,${minLength}}$`);
  const capitalExp = /[A-Z]/;
  const specialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;

  if (lengthExp.test(password)) {
    warnPass("Password is too short");
    return false;
  }
  if (!capitalExp.test(password)) {
    warnPass("Password does not contain at least 1 capital letter");
    return false;
  }
  if (!specialChar.test(password)) {
    warnPass("Password must contain at last 1 special character");
    return false;
  }
  return true;
};

export default function RegisterForm() {
  // Getting customized firebase functions from context
  const { createUser, updateProfile, setLoading, user } = useAuth();
  const navigate = useNavigate();
  // Runs when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents reload when submitted

    // Collecting form input data
    const form = new FormData(e.currentTarget);
	  const name = form.get("name");
	  const image = form.get('url');
    const userProfile = {
      displayName: name,
      photoURL: image,
    };
    const email = form.get("email");
    const password = form.get("password");
    if (!validatePassword(password)) {
      return;
    }

    // Creating firebase user
    createUser(email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, userProfile);
		 user.displayName = name;
		 user.photoURL = image;
        navigate("/");
        registered();
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use")
          errorPass("Email is already in use");
		  setLoading(false);
      });
  };

  return (
    <div>
      <div className="flex-shrink-0 w-full max-w-sm pb-5 mx-auto shadow-2xl font-montserrat card bg-base-100">
        <form className="card-body" onSubmit={handleSubmit}>
          <h1 className="mx-auto text-3xl font-semibold w-max font-playfair-display">
            Register
          </h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Name{" "}
                <span className="relative text-red-500 top-[3.5px]">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="url"
              name="url"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Email{" "}
                <span className="relative text-red-500 top-[3.5px]">*</span>
              </span>
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
              <span className="label-text">
                Password{" "}
                <span className="relative text-red-500 top-[3.5px]">*</span>
              </span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="mt-6 form-control">
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </form>
        <div className="mx-auto text-sm text-center md:text-base">
          <p>
            Already registered?{" "}
            <Link
              className="text-blue-600 underline hover:text-blue-500"
              to="/login"
            >
              Login
            </Link>{" "}
            here
          </p>
        </div>
      </div>
    </div>
  );
}
