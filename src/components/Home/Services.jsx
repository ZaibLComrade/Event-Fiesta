import {useEffect, useState} from "react"
import {Link} from "react-router-dom";

export default function Services() {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("services.json")
			.then(response => response.json())
			.then(resource => {
				setServices(resource)
			})
		.catch(err => console.error(err));
	}, [])
	
	return <div className="container mx-auto my-14 px-4 space-y-10">
		<h2 className="mx-auto text-5xl font-playfair-display w-max">Services</h2>
		<div className="w-full mx-auto grid md:grid-cold-2 grid-cols-1 lg:grid-cols-3 gap-8">
			{services.map((service) => (
				<div key={service.id} className="card hover:-translate-y-3 duration-200 ease-in-out transition-transform glass">
					<figure className="">
						<img
							className="w-full object-cover h-[250px]"
							src={ service.img }
						/>
					</figure>
					<div className="text-left card-body">
						<h2 className=" card-title font-lato font-bold">{ service.title }</h2>
						<p className="mx-auto my-5 font-open-sans text-lg font-medium">{ service.short_description }</p>
						<p className=" font-montserrat text-xl font-semibold">Price: { service.price }</p>
						<div className="justify-end card-actions">
							<Link
								to={ `/details/${service.id}` }
								className="btn montserrat btn-primary"
							>
								Details
							</Link>
						</div>
					</div>
				</div>
			))}
		</div>
	</div>
}
