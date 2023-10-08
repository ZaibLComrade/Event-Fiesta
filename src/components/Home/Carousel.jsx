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
	
	// return (
	// 	<div className="relative">
	// 		<div className="w-full carousel h-[90vh]">
	// 			<div id="item1" className="w-full carousel-item">
	// 				<img
	// 					src={ landscapeImage }
	// 					className="w-full"
	// 				/>
	// 			</div>
	// 			<div id="item2" className="w-full carousel-item">
	// 				<img
	// 					src={ landscapeImage2 }
	// 					className="w-full"
	// 				/>
	// 			</div>
	// 			<div id="item3" className="w-full carousel-item">
	// 				<img
	// 					src={ landscapeImage }
	// 					className="w-full"
	// 				/>
	// 			</div>
	// 			<div id="item4" className="w-full carousel-item">
	// 				<img
	// 					src={ landscapeImage2 }
	// 					className="w-full"
	// 				/>
	// 			</div>
	// 		</div>
	// 		<div className="absolute flex justify-center w-full py-2 bottom-5 gap-2">
	// 			<a href="#item1" className="btn btn-xs">
	// 				1
	// 			</a>
	// 			<a href="#item2" className="btn btn-xs">
	// 				2
	// 			</a>
	// 			<a href="#item3" className="btn btn-xs">
	// 				3
	// 			</a>
	// 			<a href="#item4" className="btn btn-xs">
	// 				4
	// 			</a>
	// 		</div>
	// 	</div>
	// );
}
