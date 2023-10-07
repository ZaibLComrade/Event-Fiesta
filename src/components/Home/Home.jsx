import Carousel from "./Carousel";
import Footer from "./Footer";
import Services from "./Services";
import { useLoaderData } from "react-router-dom";

export default function Home() {
	const services = useLoaderData();
	console.log(services);
	return <div className="container mx-auto">
		<Carousel/>
		<Services services={ services }/>
		<Footer/>
	</div>
}
