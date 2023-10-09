import { useEffect, useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import AOS from "aos";
AOS.init();

const createSlider = (contents) => {
	const { name, position, testimonial, id, img } = contents;
	return (
		<SplideSlide key={ id }>
			<div className="absolute w-full h-full bg-black/60"></div>
			<img 
				src={`${"https://picsum.photos/3000/1500"}`}
				className="object-cover w-full h-full"
			/>
			<div className="absolute text-secondary text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<p data-aos="fade-up" id="trigger-aos" className="mb-5 text-2xl">{ `"${testimonial}"` }</p>
				<div data-aos="fade-right" data-aos-anchor="#trigger-aos">
					<img 
						data-aos="zoom-in-up"
						data-aos-delay="400"
						data-aos-anchor="#trigger-aos"
						className="mx-auto w-[60px] h-[60px] object-cover mb-2 rounded-full" 
						src={img} 
						alt=""
					/>
					<h3 className="text-lg">{name}</h3>
					<p  className="text-sm">{position}</p>
				</div>
			</div>
		</SplideSlide>
	);
};

export default function Testimonials() {
	const [testimonials, setTestimonials] = useState([]);
	useEffect(() => {
		fetch("testimonials.json")
			.then((response) => response.json())
			.then((resource) => setTestimonials(resource))
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className="relative z-[1] mt-14">
			<p className="absolute top-[150px] text-white/30 left-1/2 -translate-x-1/2 text-7xl z-[2]">Testimonials</p>
			<h2 className="absolute z-[3] mx-auto text-white font-playfair-display text-[180px] top-[40px] left-1/2 -translate-x-1/2 w-max">&rdquo;</h2>
			<Splide
				hasTrack={ false }
				aria-label="Testimonials"
				options= {{
					rewind: true,
					type: "fade",
					height: "100vh",
					width: "100%",
				}}
			>
				<SplideTrack>
				{testimonials.map(elem =>
					createSlider(elem)
				)}
				</SplideTrack>
			</Splide>
		</div>
	);
}
