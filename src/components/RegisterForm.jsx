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
  }
);

const errorPass = statement => 
	toast.warn(statement, {
	position: "bottom-center",
	autoClose: 1000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: "colored",
})



const validatePassword = (password) => {
	const minLength = 6;
	const lengthExp = new RegExp(`^.{1,${minLength}}$`);
	const capitalExp = /[A-Z]/;
	const specialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
	
	if (lengthExp.test(password)) {
	  	errorPass('Password is too short');
		return false;
	} 
	if(!capitalExp.test(password)) {
		errorPass("Password does not contain at least 1 capital letter")
		return false;
	}
	if(!specialChar.test(password)) {
		errorPass("Password must contain at last 1 special character");
		return false
	}
	return true
}


export default function RegisterForm() {
	// Getting customized firebase functions from context
	const { createUser, updateProfile } = useAuth();
	const navigate = useNavigate()
	const [error, setError] = useState("");
	
	// Runs when form is submitted
	const handleSubmit = e => {
		e.preventDefault(); // Prevents reload when submitted
		
		// Collecting form input data
		const form = new FormData(e.currentTarget);
		const userProfile = {
			displayName: form.get("name"),
			photoURL: form.get("url"),
		}
		const email = form.get("email");
		const password = form.get("password");
		if(!validatePassword(password)) {
			return;
		}
		
		// Creating firebase user
		createUser(email, password)
			.then(userCredential => {
				updateProfile(userCredential.user, userProfile);
				console.log(userCredential);
				navigate("/");
				registered();
			})
		.catch(err => console.error(err)); // TODO: Errors to be manipulated later
	}
	
	return (
		<div>
			<div className="flex-shrink-0 font-montserrat w-full max-w-sm pb-5 mx-auto shadow-2xl card bg-base-100">
				<form className="card-body" onSubmit={ handleSubmit }>
					<h1 className="w-max mx-auto text-3xl font-semibold font-playfair-display">Register</h1>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Name <span className="relative text-red-500 top-[3.5px]">*</span></span>
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
							<span className="label-text">Email <span className="relative text-red-500 top-[3.5px]">*</span></span>
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
							<span className="label-text">Password <span className="relative text-red-500 top-[3.5px]">*</span></span>
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
						<button className="btn btn-primary">
							Sign Up
						</button>
					</div>
				</form>
				<div className="mx-auto text-sm md:text-base text-center">
					<p>Already registered? <Link className="text-blue-600 underline hover:text-blue-500" to="/login">Login</Link> here</p>
				</div>
			</div>
		</div>
	);
}
