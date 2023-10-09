import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";


export default function RegisterForm() {
	// Getting customized firebase functions from context
	const { signInUser, user, setLoading } = useAuth();
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
		if(email === user?.email) {
			setError("User already logged in");
			return;
		};
		
		// Loggin in firebase user
		signInUser(email, password)
			.then(() => {
				navigate(location?.state || "/");
				setLoading(false);
			})
		.catch(err => {
			toast.error("Invalid email or password")
			setError(err.code);
			console.log(error);
			setLoading(false);
		}); // TODO: Errors to be manipulated later
	}
	
	return (
		<div>
			<div className="flex-shrink-0 w-full font-montserrat max-w-sm pb-5 mx-auto border-red-500 shadow-2xl card bg-base-100">
				<form className="card-body" onSubmit={ handleSubmit }>
					<h1 className="w-max mx-auto text-3xl font-semibold font-playfair-display">Login</h1>
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
				<div className="w-max mx-auto mt-4">
					{error} 
				</div>
			</div>
		</div>
	);
}
