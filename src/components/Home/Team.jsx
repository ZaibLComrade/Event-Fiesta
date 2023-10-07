import { useEffect, useState } from "react";

export default function Team() {
	const [members, setMembers] = useState([]);
	useEffect(() => {
		fetch("team.json")
			.then((response) => response.json())
			.then((resource) => setMembers(resource))
			// .then(resource => console.log(resource))
			.catch((err) => console.err(err));
	}, []);

	return <div className="my-14 space-y-10">
		<h2 className="mx-auto text-5xl w-max">Our Team</h2>
		<div className="flex flex-wrap justify-center gap-16">
			{members.map((member) => (
				<div key={member.id} className="space-y-4">
					<img
						src="https://picsum.photos/200"
						className="rounded-full"
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
