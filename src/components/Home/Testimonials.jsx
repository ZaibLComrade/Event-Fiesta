import { useEffect, useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import img1 from "../../assets/balloon2.jpg";
import img2 from "../../assets/birthday2.jpg";
import img3 from "../../assets/decoration3.jpg";
import img4 from "../../assets/party3.jpg";
import img5 from "../../assets/ven4.jpg";
import img6 from "../../assets/ven5.jpg";
import img7 from "../../assets/wedding3.jpg";
import AOS from "aos";
AOS.init();

const imgArr = [img1, img2, img3, img4, img5, img6, img7];

const createSlider = (contents, idx) => {
	const { name, position, testimonial, id, img } = contents;
	return (
		<SplideSlide key={ id }>
			<div className="absolute w-full h-full bg-black/60"></div>
			<img 
				src={imgArr[idx]}
				className="object-cover w-full h-full"
			/>
			<div className="absolute text-center text-secondary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<p data-aos="fade-up" id="trigger-aos" className="mb-5 text-lg md:text-2xl lg:text-3xl font-dancing-script">{ `"${testimonial}"` }</p>
				<div data-aos="fade-right" data-aos-anchor="#trigger-aos">
					<img 
						data-aos="zoom-in-up"
						data-aos-delay="400"
						data-aos-anchor="#trigger-aos"
						className="mx-auto xl:w-[80px] xl:h-[80px] w-[60px] h-[60px] object-cover mb-2 rounded-full" 
						src={img} 
						alt=""
					/>
					<h3 className="text-lg lg:text-xl xl:text-2xl font-playfair-display">{name}</h3>
					<p  className="text-sm lg:text-lg xl:text-xl font-lato">{position}</p>
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
		<div className="relative z-[1] mt-14 overflow-hidden">
			<div className="absolute xl:top-[100px] -top-[10px] lg:top-[70px] md:top-[0px] z-[1] text-center w-full h-full">
			<h2 className="mx-auto text-white font-playfair-display text-[180px]  w-max">&rdquo;</h2>
			</div>
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
				{testimonials.map((elem, idx) =>
					createSlider(elem, idx)
				)}
				</SplideTrack>
			</Splide>
		</div>
	);
}
