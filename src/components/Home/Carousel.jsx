import banner from "../../assets/banner.jpg";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import AOS from "aos";
AOS.init();

// "https://i.ibb.co/sK8B3S2/wedding2.jpg"
// "https://i.ibb.co/kqmn5Jb/wedding1.jpg"

const slider1 = (
  <SplideSlide>
    <div className="absolute w-full h-full z-[0] bg-primary/30"></div>
    <div className="absolute w-full h-full z-[1] bg-black/40"></div>
    <img src={banner} alt="" className="z-0 object-cover w-full h-full" />

    <div>
      <div className="absolute top-0 z-[3] h-full w-full">
		  <div className="absolute text-center md:text-left font-playfair-display text-secondary top-1/2 -translate-y-1/2 left-1/2 max-lg:-translate-x-1/2 lg:left-[80px] space-y-3">
          <h1 data-aos="fade-down-right" className="text-5xl" id="header-data">Creating Unforgettable Moments</h1>
			<p data-aos="fade-right" data-aos-anchor="#header-data" data-aos-duration="500" data-aos-delay="300" className="font-lato text-base md:text-xl max-w-[500px]">
            A simple and elegant statement that emphasizes the goal of your
            event management services.
          </p>
          <div data-aos="fade-up-right" data-aos-anchor="#header-data" data-aos-duration="1200" data-aos-delay="500" className="">
            <button className="mx-auto w-max btn btn-accent font-montserrat">
              Celebrate Now!
            </button>
          </div>
        </div>
      </div>
      <div className="absolute w-[300px] hidden xl:block top-1/2 z-10 rounded-md -translate-y-1/2 border-2 border-white right-[300px]">
        <img data-aos="fade-up-right" data-aos-duration="600" className="relative rounded-md -top-20 -right-20" src="https://i.ibb.co/kqmn5Jb/wedding1.jpg" alt="" />
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
        {/* {slider2} */}
        {/* {slider3} */}
      </SplideTrack>
    </Splide>
  );
}
