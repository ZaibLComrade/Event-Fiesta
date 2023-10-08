import dummyImage from "../assets/dummyUser.jpeg";
import { NavLink, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Headroom from "react-headroom";

const listItems = (
	<>
		<li>
			<NavLink className="underlay-parent" to="/"><span className="underlay"></span>Home</NavLink>
		</li>
		<li>
			<NavLink className="underlay-parent" to="/register"><span className="underlay"></span>Register</NavLink>
		</li>
		<li>
			<NavLink className="underlay-parent" to="/path1"><span className="underlay"></span>About</NavLink>
		</li>
		<li>
			<NavLink className="underlay-parent" to="/path2"><span className="underlay"></span>Gallery</NavLink>
		</li>
		<li>
			<NavLink className="underlay-parent" to="/path3"><span className="underlay"></span>Blog</NavLink>
		</li>
	</>
);

export default function Navbar() {
	const { user, signOutUser } = useAuth();

	return (
		<Headroom>
			<div className="navbar bg-base-100 h-[100px]">
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
					<a className="text-4xl normal-case btn btn-ghost">
						Event Fiesta
					</a>
				</div>
				<div className="hidden navbar-center lg:flex">
					<ul className="px-1 menu-horizontal menu underlay-gp">{listItems}</ul>
				</div>
				<div className="navbar-end">
					<div className="flex items-center gap-3">
						<div className="text-right h-max">
							{user ? (
								<div>
									<p className="text">{user.displayName}</p>
									<p className="text-sm">{user.email}</p>
								</div>
							) : (
								<p>Not logged in</p>
							)}
						</div>
						<label className="btn btn-circle avatar">
							<div className="w-10 rounded-full">
								<img
									src={
										user?.photoURL
											? user.photoURL
											: dummyImage
									}
								/>
							</div>
						</label>
					</div>
					<div className="flex items-center">
						{user ? (
							<button className="ml-2 btn" onClick={signOutUser}>
								Sign Out
							</button>
						) : (
							<Link to="/login" className="ml-2 btn">
								Login
							</Link>
						)}
					</div>
				</div>
			</div>
		</Headroom>
	);
}
