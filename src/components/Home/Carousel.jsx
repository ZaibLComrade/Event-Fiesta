import landscapeImage from "../../assets/dummyLandscape.jpg";
import landscapeImage2 from "../../assets/dummyLandscape2.jpg";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import AOS from "aos";
AOS.init();

const slider1 = (
	<SplideSlide>
		<img 
			src={ landscapeImage } 
			alt=""
			className="z-0 object-cover w-full h-full"
		/>
		
		<div className="absolute top-0 w-full h-full text-5xl">
			<h1 className="absolute top-1/2 -translate-y-1/2 left-[80px]">Turn Moments Into Memories</h1>
		</div>
	</SplideSlide>
)
const slider2 = (
	<SplideSlide>
		<img 
			src={ landscapeImage2 } 
			alt=""
			className="z-0 object-cover w-full h-full"
		/>
		
		<div className="absolute top-0 w-full h-full text-5xl">
			<h1 className="absolute top-1/2 -translate-y-1/2 left-[80px]">Turn Moments Into Memories</h1>
		</div>
	</SplideSlide>
)

export default function Carousel() {
	return <Splide 
		hasTrack={ false } 
		aria-label="Banner"
		options= {{
			rewind: true,
			type: "loop",
			height: "100vh",
			autoplay: "pause",
			width: "100%",
			perPage: 1,
			gap: '1rem',
		}}
	>
		<SplideTrack>
			{ slider1 }
			{ slider2 }

		</SplideTrack>
	</Splide>
}
