import Root from "./Root";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
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
