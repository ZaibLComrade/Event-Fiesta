import { CircleLoader, ClimbingBoxLoader, ClockLoader, HashLoader } from "react-spinners";

const loaderProps = {
	color: "#36d7b7",
	number: 1,
}

const circleLoader = <CircleLoader
	color={loaderProps.color}
	loading={true}
	size={100}
	aria-label="Loading Spinner"
	data-testid="loader"
	number={loaderProps.number}
/>

const climbingLoader = <ClimbingBoxLoader
	size={15}
	loading={true}
	aria-label="Loading Spinner"
	data-testid="loader"
	number={ loaderProps.number }
	color={ loaderProps.color }
/>

const clockLoader = <ClockLoader
	size={100}
	loading={true}
	aria-label="Loading Spinner"
	data-testid="loader"
	number={ loaderProps.number }
	color={ loaderProps.color }
/>

const hashLoader = <HashLoader
	size={100}
	loading={true}
	aria-label="Loading Spinner"
	data-testid="loader"
	number={ loaderProps.number }
	color={ loaderProps.color }
/>

const loaderArr = [
	clockLoader,
	climbingLoader,
	circleLoader,
	hashLoader,
];


export default function LoadingScreen() {
	let random = Math.floor((Math.random() * loaderArr.length));
	const currLoader = loaderArr[random];
	
	return <div className="fixed top-0 w-screen h-screen bg-black/70">
		<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
			{ currLoader }
		</div>
	</div>
}
