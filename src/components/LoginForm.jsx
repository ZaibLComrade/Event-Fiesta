import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function RegisterForm() {
	// Getting customized firebase functions from context
	const { signInUser } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const [error, setError] = useState("");
	
	// Runs when form is submitted
	const handleSubmit = e => {
		e.preventDefault(); // Prevents reload when submitted
		
		// Collecting form input data
		const form = new FormData(e.currentTarget);
		const email = form.get("email");
		const password = form.get("password");
		
		// Loggin in firebase user
		signInUser(email, password)
			.then(() => navigate(location?.state || "/"))
		.catch(err => console.error(err)); // TODO: Errors to be manipulated later
	}
	
	return (
		<div>
			<div className="flex-shrink-0 w-full max-w-sm pb-5 mx-auto border-red-500 shadow-2xl card bg-base-100">
				<form className="card-body" onSubmit={ handleSubmit }>
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
							Login
						</button>
					</div>
				</form>
				<div className="mx-auto w-max">
					<p>Don't have an account? <Link className="text-blue-600 underline hover:text-blue-500" to="/register">Register</Link> here</p>
				</div>
			</div>
		</div>
	);
}
