import Root from "./Root";
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
				path: "/path",
				element: <div>This is path 1</div>,
			},
			{
				path: "/path2",
				element: <div>This is path 2</div>,
			}
		]
	}
])

export default router;
