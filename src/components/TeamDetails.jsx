import { useLoaderData } from "react-router-dom" 
import NotFound from "../NotFound"

export default function TeamDetails() {
    const details = useLoaderData();
    if(!details) return <NotFound/>;
    const { name, position, bio, img } = details;

    return <div className="relative w-screen h-screen">
        <div className="absolute px-4 max-md:w-full top-4 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 -translate-y-0">
            <img src={ img } className="w-full h-[200px] md:h-[300px] lg:h-[500px] object-cover rounded-xl" alt="" />
            <h2 className="mt-5 mb-2 text-5xl text-center font-great-vibes text-bold">{ name }</h2>
            <p className="text-lg text-center font-playfair-display">{ position }</p>
            <p className="relative mt-4 text-xl text-center font-lato">{ bio }</p>
        </div>
    </div>
}
