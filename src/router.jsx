import Root from "./Root";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "./NotFound";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root/>,
		children: [
			{
				path: "/*",
				element: <NotFound/>,
			},
			{
				path: "/",
				element: <Home/>,
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
