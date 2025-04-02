import { useEffect, useState } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
AOS.init();

export default function Team() {
	const [members, setMembers] = useState([]);
	useEffect(() => {
		fetch("team.json")
			.then((response) => response.json())
			.then((resource) => setMembers(resource))
			// .then(resource => console.log(resource))
			.catch((err) => console.err(err));
	}, []);

	return <div className="container px-4 mx-auto my-14 space-y-10">
		<h2 className="mx-auto text-5xl w-max font-playfair-display">Our Team</h2>
		<div className="flex flex-wrap justify-center gap-16">
			{members.map((member, idx) => (
				<div data-aos={ (idx % 2 === 0) ? "fade-up" : "fade-down" } key={member.id} className="space-y-4">
					<div className="relative overflow-hidden rounded-full group">
						<Link className="text-center rounded-full w-full h-full hidden group-hover:block absolute z-[2] text-white" to={`/team/${member.id}`}>
							<span className="absolute flex flex-col items-center text-2xl font-medium top-1/2 -translate-x-1/2 font-montserrat -translate-y-1/2 left-1/2">Visit Bio <BiSearchAlt/></span>
						</Link>
						<div className="bg-black z-[1] transition-opacity opacity-0 group-hover:opacity-40 w-full h-full absolute top-0"></div>
						<img
								src={ member.img }
								className="rounded-full z-0 transition-transform group-hover:scale-105 duration-[0.6s] w-[200px] h-[200px] object-cover"
								alt=""
						/>
					</div>
					<div className="mx-auto text-center w-max">
						<p className="font-bold font-playfair-display">{member.name}</p>
						<p className="font-lato">{member.position}</p>
					</div>
				</div>
			))}
		</div>
	</div>
}
