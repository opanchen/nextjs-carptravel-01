"use client";

import { useRef, useState } from "react";
import { addLeadingZero } from "@helpers";
import { services } from "@data";

import { Container, ServicePicture } from "@components";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";

const Services: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<any>(null);

  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveSlide(swiper.realIndex);
  };

  const handleSlideButtonClick = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.swiper.slideTo(index);
    }
  };

  return (
    <section id="services" className=" min-h-[500px] bg-overlay-burger">
      <Swiper
        ref={sliderRef}
        onInit={(core: SwiperCore) => {
          sliderRef.current = core.el;
        }}
        slidesPerView={1}
        effect="fade"
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        onSlideChange={handleSlideChange}
      >
        {services.map((service) => {
          const { name, shortcut, desc, tagline, order } = service;

          const totalSlides = addLeadingZero(services.length);
          const currentSlide = addLeadingZero(activeSlide + 1);

          return (
            <SwiperSlide key={shortcut}>
              <div
                className={`background-overlay service-${shortcut} section w-full h-full bg-red`}
              >
                <Container>
                  {/* Content inner div */}
                  <div className="flex flex-col gap-[16px] tablet:gap-[36px] desktop:gap-[24px]">
                    {/* Heading & Order div */}
                    <div className="flex flex-col tablet:flex-row tablet:items-center gap-[24px] tablet:gap-[170px]">
                      <h2 className="text-heading">
                        We <span className="font-medium">offer</span>
                      </h2>

                      <p className="text-right text-[43px] tablet:text-[67px] desktop:text-[98px] font-thin tablet:leading-[1.164] desktop:leading-normal">
                        {currentSlide}/
                        <span className="text-gray-strong">{totalSlides}</span>
                      </p>
                    </div>

                    {/* Inner div */}
                    <div className="flex flex-col tablet:flex-row tablet:items-center desktop:items-stretch gap-[12px] tablet:gap-[20px]">
                      <ServicePicture
                        order={order}
                        shortcut={shortcut}
                        name={name}
                      />

                      {/* Controls & text-content div */}
                      <div className="flex flex-col h-[370px] desktop:h-auto desktop:justify-between desktop:grow">
                        {/* tagline & control-buttons div */}
                        <div className="flex flex-col-reverse tablet:flex-col gap-[24px]">
                          <ul className="flex flex-col gap-[16px]">
                            {services.map(({ order, shortcut, name }) => {
                              const isActive = activeSlide === order - 1;
                              return (
                                <li
                                  key={`${order}-${shortcut}`}
                                  className="desktop:relative"
                                >
                                  <button
                                    className={`transition_prop opacity-[0.5] text-[20px] tablet:text-[22px] desktop:text-[28px] font-extralight leading-[0.85] tablet:leading-[0.82] desktop:leading-[0.857] uppercase hover:opacity-[1] ${
                                      isActive &&
                                      "opacity-[1] relative active-slider-tab pl-[16px] font-medium"
                                    }`}
                                    type="button"
                                    onClick={() =>
                                      handleSlideButtonClick(order - 1)
                                    }
                                  >
                                    {order != 3 ? (
                                      name
                                    ) : (
                                      <span className="block text-left">
                                        Hot air
                                        <br />
                                        ballooning
                                      </span>
                                    )}
                                  </button>

                                  {isActive && (
                                    <p className="absolute top-[-6px] left-[312px] hidden desktop:block text-[12px] font-extralight leading-[2.0] tracking-[2.4px]">
                                      {tagline}
                                    </p>
                                  )}
                                </li>
                              );
                            })}
                          </ul>

                          <p className="text-right tablet:text-left text-[12px] font-extralight leading-[2.0] tracking-[2.4px] desktop:hidden">
                            {tagline}
                          </p>
                        </div>

                        <p className="mt-auto desktop:w-[294px] desktop:self-end text-[14px] tablet:text-[13px] desktop:text-[18px] font-extralight leading-[1.428] tablet:leading-[1.538] desktop:leading-[1.333] tablet:text-justify">
                          {desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Services;
