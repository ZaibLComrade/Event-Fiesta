import dummyImage from "../assets/dummyUser.jpeg";
import { NavLink, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Headroom from "react-headroom";

const listItems = (
  <>
    <li>
      <NavLink className="underlay-parent" to="/">
        <span className="underlay"></span>Home
      </NavLink>
    </li>
    <li>
      <NavLink className="underlay-parent" to="/register">
        <span className="underlay"></span>Register
      </NavLink>
    </li>
    <li>
      <NavLink className="underlay-parent" to="/aboutus">
        <span className="underlay"></span>About Us
      </NavLink>
    </li>
    <li>
      <NavLink className="underlay-parent" to="/gallery">
        <span className="underlay"></span>Gallery
      </NavLink>
    </li>
    <li>
      <NavLink className="underlay-parent" to="/blog">
        <span className="underlay"></span>Blog
      </NavLink>
    </li>

  </>
);

export default function Navbar() {
  const { user, signOutUser } = useAuth();

  return (
    <Headroom>
      <div className="py-4 navbar bg-primary text-custom-grey-1">
        <div className="navbar-start font-montserrat">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost xl:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 lg:w-10 lg:h-10 md:h-7 md:w-7"
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
              className="menu menu-sm text-primary font-medium dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {listItems}
            </ul>
          </div>
          <Link to="/" className="text-4xl font-bold normal-case md:text-5xl lg:text-6xl font-great-vibes btn btn-ghost">
            Event Fiesta
          </Link>
        </div>
        <div className="hidden navbar-center xl:flex">
          <ul className="px-1 menu-horizontal menu underlay-gp">{listItems}</ul>
        </div>
        <div className="navbar-end font-montserrat md:mr-4">
          <div className="block dropdown dropdown-end md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL ? user.photoURL : dummyImage} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <div className="md:text-right h-max">
                  {user ? (
                    <div className="font-bold text-primary">
                      <p className="text">{user.displayName}</p>
                      <p className="text-sm">{user.email}</p>
                    </div>
                  ) : (
                    <p>Not logged in</p>
                  )}
                </div>
              </li>
              <li className="text-accent">
						{user ? (
							<a onClick={signOutUser}>
								Sign Out
							</a>
						) : (
							<Link to="/login">
								Login
							</Link>
						)}
              </li>
            </ul>
          </div>

          <div className="items-center hidden md:flex gap-3">
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
						<label className="btn btn-ghost btn-circle avatar">
							<div className="w-12 rounded-full">
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
					<div className="items-center hidden md:flex">
						{user ? (
							<button className="ml-2 btn btn-secondary" onClick={signOutUser}>
								Sign Out
							</button>
						) : (
							<Link to="/login" className="ml-2 btn btn-secondary">
								Login
							</Link>
						)}
					</div>
        </div>
      </div>
    </Headroom>
  );
}
