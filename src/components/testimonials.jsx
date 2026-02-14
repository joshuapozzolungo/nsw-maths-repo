import React from "react";
import Slider from "react-slick";
import testimonials from "./testimonials.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  
  const setting = {
    dots : true,
    arrow : true,
    infinite : true,
    speed : 500,
    slidesToShow: 3,
    slidesToScroll : 1,
    autoplaySpeed : 2000,
    cssEase : "linear",
    pauseOnHover : true,
    pauseOnFocus : true,
    responsive : [
      {
        breakpoint : 1024,
        settings: {
          slidesToShow : 3,
          slidesToScroll : 1,
          infinite : true,
        },
      },
      {
        breakpoint : 768,
        settings: {
          slidesToShow : 2,
          slidesToScroll : 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint : 640,
        settings: {
          slidesToShow : 1,
          slidesToScroll : 1,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="relative overflow-hidden min-h-screen my-30 w-full max-w-full overflow-hidden">
      <div className="mx-auto max-w-5xl space-y-6 text-center">
        <p className="header-text">Real Success Stories</p>
        <p className="paragraph-text">See what our clients say about our tutoring.</p>
      </div>

      <div className="pt-10">
        <Slider {...setting}>
          {testimonials.map((item) => (
            <div key={item.id} className="p-4 h-full">
              <div className="flex flex-col gap-5 p-10 rounded-2xl h-full bg-secondary ">
                <div className="flex gap-3">
                  <img className="h-14 w-14 Iv2Hbb" src={item.profileURL} referrerPolicy="no-referrer" alt="Profile photo"/>
                  <div className="self-center">
                    <div className="text-white">{item.name}</div>
                    <div>⭐ ⭐ ⭐ ⭐ ⭐</div>
                  </div>
                </div>
                <div className="paragraph-text flex-grow">{item.description}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

    </section>
  ); 
};
