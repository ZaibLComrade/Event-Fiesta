import {Outlet} from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import useAuth from "./hooks/useAuth";

export default function Root() {
	const { loading } = useAuth();
	if(loading) return <LoadingScreen/>
	return <>
		<Navbar/>
		<Outlet/>
	</>
}
