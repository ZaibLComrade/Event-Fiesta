import { useLoaderData } from "react-router-dom"
import NotFound from "../NotFound";

export default function Details() {
	const details = useLoaderData();
	if(!details) return <NotFound/>
	const { title, long_description, img } = details;
	
	return <div>
		<div className="h-[600px] container mx-auto mt-5">
			<h1 className="mx-auto my-5 text-5xl w-max">{ title }</h1>
			<img 
				className="object-cover w-full h-full rounded-lg"
				src={ img } 
				alt=""
			/>
			<p className="my-5">{ long_description }</p>
		</div>
	</div>
}
