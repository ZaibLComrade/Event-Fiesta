import PropTypes from "prop-types";

export default function Services({ services }) {
	return <>
		<h2 className="mx-auto w-max">Services</h2>
		<div className="w-full mx-auto grid grid-cols-3 gap-8">
			{services.map((service) => (
				<div key={service.id} className="card glass">
					<figure className="">
						<img
							className="w-full object-cover h-[250px]"
							src="https://picsum.photos/200"
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
	</>
}

Services.propTypes = {
	services: PropTypes.array.isRequired,
};
