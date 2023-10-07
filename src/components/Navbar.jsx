import dummyImage from "../assets/dummyUser.jpeg";
import { NavLink, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const listItems = (
	<>
		<li>
			<NavLink to="/">Home</NavLink>
		</li>
		<li>
			<NavLink to="/register">Register</NavLink>
		</li>
		<li>
			<NavLink to="/path2">Item 3</NavLink>
		</li>
	</>
);

export default function Navbar() {
	const { user, signOutUser } = useAuth();
	console.log(user);
	
	return (
		<>
			<div className="navbar bg-base-100">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-5 h-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							{listItems}
						</ul>
					</div>
					<a className="text-xl normal-case btn btn-ghost">
						Event Fiesta
					</a>
				</div>
				<div className="hidden navbar-center lg:flex">
					<ul className="px-1 menu-horizontal menu">{listItems}</ul>
				</div>
				<div className="navbar-end">
					<div className="flex items-center gap-2">
						<div className="text-right h-max">
							{
								user ? <div>
									<p className="text">{ user.displayName }</p>
									<p className="text-sm">{ user.email }</p>
								</div> :
								<p>Not Logged In</p>
							}
						</div>
						<label className="btn btn-circle avatar">
							<div className="w-10 rounded-full">
								<img src={ user?.photoURL ? user.photoURL : dummyImage } />
							</div>
						</label>
					</div>
					<div className="flex items-center">
					{
						user ? 
							<button
								className="ml-2 btn"
								onClick={ signOutUser }
							>
								Sign Out
							</button>
							:
							<Link to="/login" className="ml-2 btn">Login</Link>
					}
					</div>
				</div>
			</div>
		</>
	);
}
