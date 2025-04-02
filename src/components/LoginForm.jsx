import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

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
	});

const infoToast = (statement) =>
	toast.info(statement, {
		position: "bottom-right",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "colored",
	});

const errorToast = (statement) =>
	toast.error(statement, {
		position: "bottom-right",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "colored",
	});

export default function RegisterForm() {
	// Getting customized firebase functions from context
	const { signInUser, user, setLoading, googleSignInUser } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	// Runs when form is submitted
	const handleSubmit = (e) => {
		e.preventDefault(); // Prevents reload when submitted
		// Collecting form input data
		const form = new FormData(e.currentTarget);
		const email = form.get("email");
		const password = form.get("password");
		if (email === user?.email) {
			navigate("/");
			infoToast("User already logged in");
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
				errorToast("Invalid email or password");
				setLoading(false);
			}); // TODO: Errors to be manipulated later
	};

	const handleGoogleSignIn = (e) => {
		e.preventDefault();
		googleSignInUser()
			.then(() => navigate(location?.state || "/"))
			.catch((err) => console.error(err));
	};

	return (
		<div>
			<div className="flex-shrink-0 w-full max-w-sm pb-5 mx-auto border-red-500 shadow-2xl font-montserrat card bg-base-100">
				<form className="card-body" onSubmit={handleSubmit}>
					<h1 className="mx-auto text-3xl font-semibold w-max font-playfair-display">
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
							<a
								href="#"
								className="label-text-alt link link-hover"
							>
								Forgot password?
							</a>
						</label>
					</div>
					<div className="mt-6 form-control">
						<button className="btn btn-primary">Login</button>
					</div>
				</form>
				<div className="w-full px-8 mx-auto mb-4 text-center">
					<hr className="w-full border" />
					<p className="relative w-8 mx-auto font-bold bg-base-100 -top-3">
						{" "}
						Or
					</p>
					<button
						onClick={handleGoogleSignIn}
						className="flex items-center w-full btn btn-accent gap-2"
					>
						<FcGoogle className="text-xl" />
						<div>Login with Google</div>
					</button>
				</div>
				<div className="mx-auto text-sm text-center md:text-base">
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
