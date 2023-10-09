import { useLoaderData } from "react-router-dom" 
import NotFound from "../NotFound"

export default function TeamDetails() {
    const details = useLoaderData();
    if(!details) return <NotFound/>;
    const { name, position, bio, img } = details;

    return <div className="relative h-screen w-screen">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img src={ img } className="w-full h-[500px] object-cover rounded-xl" alt="" />
            <h2 className="font-great-vibes text-5xl mt-5 text-bold text-center">{ name }</h2>
            <p className="font-playfair-display text-lg text-center">{ position }</p>
            <p className="text-center font-lato text-xl mt-4">{ bio }</p>
        </div>
    </div>
}