import Root from "./Root";
import Home from "./components/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "./NotFound";
import Details from "./components/Details";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage"
import TeamDetails from "./components/TeamDetails";

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
				element: <RegisterPage/>,
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
			{
				path: "/team/:member",
				element: <TeamDetails/>,
				loader: async ({ params }) => {
					const response = await fetch("/team.json");
					const resource = await response.json();
					const idInt = parseInt(params.member);
					return resource.find(res => res.id === idInt) || null;
				},
			},
			// {
			// 	path: "team/:member",
			// 	element: <PrivateRoute><TeamDetails/></PrivateRoute>,
			// 	loader: async ({ params }) => {
			// 		const response = await fetch("/team.json");
			// 		const resource = await response.json();
			// 		console.log(resource);
			// 		const memberInt = parseInt(params.id);
			// 		return resource.find(res => res.id === memberInt) || null;
			// 	}
			// }
		]
	}
])

export default router;

