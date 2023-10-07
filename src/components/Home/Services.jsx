import {useEffect, useState} from "react"

export default function Services() {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("services.json")
			.then(response => response.json())
			.then(resource => setServices(resource))
		.catch(err => console.error(err));
	}, [])
	
	return <div className="my-14 space-y-10">
		<h2 className="mx-auto text-5xl w-max">Services</h2>
		<div className="w-full mx-auto grid grid-cols-3 gap-8">
			{services.map((service) => (
				<div key={service.id} className="card glass">
					<figure className="">
						<img
							className="w-full object-cover h-[250px]"
							src="https://picsum.photos/600"
							alt="car!"
						/>
					</figure>
					<div className="text-center card-body">
						<h2 className="mx-auto card-title w-max">{ service.title }</h2>
						<p className="mx-auto">{ service.short_description }</p>
						<div className="justify-end mx-auto w-max card-actions">
							<button className="btn btn-primary">
								Learn now!
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	</div>
}
