import landscapeImage from "../../assets/dummyLandscape.jpg";
import landscapeImage2 from "../../assets/dummyLandscape2.jpg";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

export default function Carousel() {
	return <Splide 
		hasTrack={ false } 
		aria-label="Banner"
		options= {{
			rewind: true,
			type: "fade",
			height: "100vh",
			width: "100%",
			gap: '1rem',
		}}
	>
		<SplideTrack>
			<SplideSlide>
				<img src={ landscapeImage } className="object-cover w-full h-full" alt="Image 1"/>
			</SplideSlide>
			<SplideSlide>
				<img src={ landscapeImage2 } className="object-cover w-full h-full" alt="Image 2"/>
			</SplideSlide>
		</SplideTrack>
	</Splide>
}
