import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import AOS from "aos";
AOS.init();

const slider1 = (
  <SplideSlide>
    <div className="absolute w-full h-full z-[0] bg-primary/30"></div>
    <div className="absolute w-full h-full z-[1] bg-black/40"></div>
    <img src={banner1} alt="" className="z-0 object-cover w-full h-full" />

	<div className="absolute top-0 z-[3] h-full w-full">
		<div className="absolute text-center font-playfair-display text-secondary top-1/2 -translate-y-1/2 left-1/2 max-lg:-translate-x-1/2 lg:left-[80px] space-y-3">
		<h1 className=" text-5xl">Creating Unforgettable Moments</h1>
		<p className="font-lato text-xl max-w-[500px] mx-auto">
			A simple and elegant statement that emphasizes the goal of your event
			management services.
		</p>
		</div>
	</div>
  </SplideSlide>
);
const slider2 = (
  <SplideSlide>
    <div className="absolute w-full h-full z-[0] bg-primary/30"></div>
    <div className="absolute w-full h-full z-[1] bg-black/40"></div>
    <img src={banner2} alt="" className="z-0 object-cover w-full h-full" />

    <div className="absolute z-[3] top-0 w-full h-full text-5xl">
      <h1 className="absolute text-secondary top-1/2 -translate-y-1/2 left-[80px]">
        Turn Moments <br />
        Into Memories
      </h1>
    </div>
  </SplideSlide>
);
const slider3 = (
  <SplideSlide>
    <div className="absolute w-full h-full z-[0] bg-primary/30"></div>
    <div className="absolute w-full h-full z-[1] bg-black/40"></div>
    <img src={banner3} alt="" className="z-0 object-cover w-full h-full" />

    <div className="absolute z-[3] top-0 w-full h-full text-5xl">
      <h1 className="absolute text-secondary top-1/2 -translate-y-1/2 left-[80px]">
        Turn Moments <br />
        Into Memories
      </h1>
    </div>
  </SplideSlide>
);

export default function Carousel() {
  return (
    <Splide
      hasTrack={false}
      aria-label="Banner"
      options={{
        rewind: true,
        type: "loop",
        height: "100vh",
        autoplay: "pause",
        width: "100%",
        perPage: 1,
      }}
    >
      <SplideTrack>
        {slider1}
        {slider2}
        {slider3}
      </SplideTrack>
    </Splide>
  );
}
