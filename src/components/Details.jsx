import { useLoaderData } from "react-router-dom"
import NotFound from "../NotFound";

export default function Details() {
	const details = useLoaderData();
	if(!details) return <NotFound/>
	const { title, long_description, img } = details;
	
	return <div className="justify-between mx-auto relative top-0 overflow-x-hidden h-screen lg:grid grid-cols-2 w-full">
		<div className="shrink-0 fixed top-0 w-full h-screen lg:relative">
			<div className="absolute w-full h-full z-[0] lg:bg-primary/30"></div>
			<div className="absolute w-full h-full z-[0] bg-black/70 lg:bg-black/10"></div>
			<img src={ img } className="w-full h-full object-cover"  alt="" />
		</div>
		<div className="shrink-0 absolute h-full w-full lg:relative p-4">
			<div className="absolute top-1/2  text-secondary lg:text-black  -translate-y-1/2">
				<h1 className="w-max mx-auto font-playfair-display font-semibold text-5xl mt-6">{ title }</h1>
				<p className="mt-4 font-open-sans text-sm md:text-md lg:text-lg text-center font-medium">{ long_description }</p>
			</div>
		</div>
	</div>
}
