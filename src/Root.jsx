import {Outlet} from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import useAuth from "./hooks/useAuth";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Root() {
	const { loading } = useAuth();
	if(loading) return <LoadingScreen/>
	return <>
		<Navbar/>
		<Outlet/>
		<ToastContainer/>
	</>
}
