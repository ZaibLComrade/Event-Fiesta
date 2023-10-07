import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function RegisterForm() {
	const { user, createUser, updateProfile } = useAuth();
	
	const handleSubmit = e => {

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
							className="input input-bordered"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Email <span className="relative text-red-500 top-[3.5px]">*</span></span>
						</label>
						<input
							type="email"
							placeholder="email"
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
