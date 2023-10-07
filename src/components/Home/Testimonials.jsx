import { useEffect, useState } from "react";

const createSlider = (currSlider, totalSliders, contents) => {
	const { name, position, testimonial } = contents;
	const prevSlider = ((currSlider - 2 + totalSliders) % totalSliders) + 1;
	const nextSlider = (currSlider % totalSliders) + 1;
	return (
		<div
			id={`${"slide" + currSlider}`}
			className="relative w-full carousel-item"
		>
			<div className="absolute w-full h-full bg-black/60"></div>
			<img
				src={`${"https://picsum.photos/3000/150" + currSlider}`}
				className="object-cover w-full"
			/>
			<div className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<p className="mb-5 text-2xl">{ `${testimonial}"` }</p>
				<img className="mx-auto w-[60px] object-cover mb-2 rounded-full" src={ `${"https://picsum.photos/60" + currSlider}` } alt=""/>
				<h3 className="text-lg">{name}</h3>
				<p className="text-sm">{position}</p>
			</div>
			<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				<a href={`${"#slide" + prevSlider}`} className="btn btn-circle">
					❮
				</a>
				<a href={`${"#slide" + nextSlider}`} className="btn btn-circle">
					❯
				</a>
			</div>
		</div>
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
		<div className="mt-14 space-y-10">
			<h2 className="mx-auto text-5xl w-max">Testimonials</h2>
			<div className="w-full carousel h-[500px]">
				{testimonials.map((elem, idx) =>
					createSlider(idx + 1, testimonials.length, elem)
				)}
			</div>
		</div>
	);
}
