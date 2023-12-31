import Carousel from "./Carousel";
import Footer from "./Footer";
import Services from "./Services";
import Team from "./Team";
import Testimonials from "./Testimonials";

export default function Home() {
	return <div className="overflow-x-hidden">
		<Carousel/>
		<Services/>
		<Team/>
		<Testimonials/>
		<Footer/>
	</div>
}
