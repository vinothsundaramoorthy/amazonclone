import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <div className="relative">
        <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="https://m.media-amazon.com/images/I/51Xlhw1szOL._SX3000_.jpg" alt="" />
        </div>
        <div><img loading="lazy" src="https://m.media-amazon.com/images/I/71auG3j68fL._SX3000_.jpg" /></div>
        <div><img loading="lazy" src="https://m.media-amazon.com/images/I/71L036mPLZL._SX3000_.jpg" /></div>
        <div><img loading="lazy" src="https://m.media-amazon.com/images/I/61S+9ZHVhaL._SX3000_.jpg" /></div>
        <div><img loading="lazy" src="https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg" /></div>
        <div><img loading="lazy" src="https://m.media-amazon.com/images/I/71B3vqT2TWL._SX3000_.jpg" /></div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
