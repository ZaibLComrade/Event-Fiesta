import { useEffect, useState } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'
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

	return <div className="container mx-auto my-14 space-y-10">
		<h2 className="mx-auto text-5xl w-max">Our Team</h2>
		<div className="flex flex-wrap justify-center gap-16">
			{members.map((member, idx) => (
				<div data-aos={ (idx % 2 === 0) ? "fade-up" : "fade-down" } key={member.id} className="space-y-4">
					<img
						src={ member.img }
						className="rounded-full w-[200px] h-[200px] object-cover"
						alt=""
					/>
					<div className="mx-auto text-center w-max">
						<p>{member.name}</p>
						<p>{member.position}</p>
					</div>
				</div>
			))}
		</div>
	</div>
}
