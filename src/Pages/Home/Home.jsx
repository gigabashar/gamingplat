import React from "react";
import "./Home.css";
import TrandingGame from "../../Componentes/TrandingGames/TrandingGame";
import rectangle1 from "./assets/Rectangle1.jpg";
import rectangle2 from "./assets/rectangle2.jpg";
import rectangle3 from "./assets/Rectangle3.png";
import rectangle4 from "./assets/Rectangle4.png";
import Costumer from "../../Componentes/Costumer/Costumer";
import Data from "../../costumerReview";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//required modules
import { Pagination, Navigation } from "swiper";

const Home = () => {
  const { reviews } = Data;

  return (
    <>
      <main className="main d-flex">
        <div className="main-content">
          <p className="fw-700 c-white ff-poppins threedgame ">3D game Dev </p>
          <h1 className="fw-700 c-white ff-poppins mainheading">
            Work that we produce for our clients
          </h1>
          <p className="fw-500 c-white ff-poppins">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
          <div className="fw-500 c-white ff-poppins more-details-button button">
            Get more details
          </div>
        </div>
        <div className="images">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/game-controller-4035922-3342601.png"
            alt="joystick"
            className="joystick"
          />
          {/* <div>
            <img src={cry} alt="cry" className="cry" />
          </div>
          <div>
            <img src={unity} alt="unity" className="unity" />
          </div>
          <div>
            <img src={unreal} alt="unreal" className="unreal" />
          </div> */}
        </div>
      </main>
      <section className="trading-games">
        <div className="trading-games__container d-flex">
          <h2 className="c-white ff-poppins fw-700">
            Currently Tranding Games
          </h2>
          <div className="see-all ff-poppins fw-500 c-white">See All</div>
        </div>
        <div className="games d-flex">
          <TrandingGame image={rectangle1} followers={234} />
          <TrandingGame image={rectangle2} followers={222} />
          <TrandingGame image={rectangle3} followers={215} />
          <TrandingGame image={rectangle4} followers={198} />
        </div>
      </section>
      <section className="costumer-reviews">
        <div className="cosutmer-reviews-heading">
          <h1 className="fw-500 c-white ff-poppins">
            Trusted by Thousand of <br /> Happy Costumers
          </h1>
          <p className="fw-400 c-white ff-poppins">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            voluptate quae cum repudiandae natus.
          </p>
        </div>
        <div className="costumer-review-cards">
          <Swiper
            slidesPerView={3}
            spaceBetween={45}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            centerSlide={true}
            grabCursor={true}
            fade={true}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {reviews.map((element, index) => {
              return (
                <SwiperSlide>
                  <Costumer
                    image={element.image}
                    name={element.name}
                    location={element.location}
                    star={element.star}
                    text={element.review}
                    key={index}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Home;
