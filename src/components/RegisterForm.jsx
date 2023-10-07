import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function RegisterForm() {
	// Getting customized firebase functions from context
	const { createUser, updateProfile } = useAuth();
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
		
		// Creating firebase user
		createUser(email, password)
			.then(userCredential => updateProfile(userCredential.user, userProfile))
		.catch(err => console.error(err)); // TODO: Errors to be manipulated later
	}
	
	return (
		<>
			<div className="flex-shrink-0 w-full max-w-sm pb-5 border border-red-500 shadow-2xl card bg-base-100">
				<form className="card-body" onSubmit={ handleSubmit }>
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
						<label className="label">
							<a
								href="#"
								className="label-text-alt link link-hover"
							>
								Forgot password?
							</a>
						</label>
					</div>
					<div className="mt-6 form-control">
						<button className="btn btn-primary">
							Sign Up
						</button>
					</div>
				</form>
				<div className="mx-auto w-max">
					<p>Already registered? <Link className="text-blue-600 underline hover:text-blue-500" to="/login">Login</Link> here</p>
				</div>
			</div>
		</>
	);
}
