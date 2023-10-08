import Root from "./Root";
import RegisterForm from "./components/RegisterForm";
import Home from "./components/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "./NotFound";
import Details from "./components/Details";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./components/LoginPage";

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
				element: <LoginPage/>,
			},
			{
				path: "/details/:id",
				element: <PrivateRoute><Details/></PrivateRoute>,
				loader: async ({ params }) => {
					const response = await fetch("/services.json");
					const resource = await response.json();
					const idInt = parseInt(params.id);
					return resource.find(res => res.id === idInt) || null;
				},
			},
		]
	}
])

export default router;

