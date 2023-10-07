import Root from "./Root";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root/>,
		children: [
			{
				path: "/*",
				element: <div>404 Route</div>
				
			},
			{
				path: "/",
				element: <Home/>,
				loader: async () => {
					const response = await fetch("/services.json");
					const resource = await response.json();
					return resource;
				}
			},
			{
				path: "/register",
				element: <RegisterForm/>,
			},
			{
				path: "/login",
				element: <LoginForm/>,
			}
		]
	}
])

export default router;
