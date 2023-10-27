"use client";

import { useRef } from "react";
import { gallery } from "@data/gallery";

import { Container, GalleryPicture } from "@components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const Gallery: React.FC = () => {
  const sliderRef = useRef<any>(null);
  const sliderItems = [...gallery, ...gallery, gallery[2]];

  return (
    <section
      id="gallery"
      className="background-overlay section-gallery section"
    >
      <Container>
        <h2 className="text-heading mb-[24px] tablet:mb-[72px] desktop:mb-[24px]">
          Our <span className="font-medium">gallery</span>
        </h2>

        {/* Static gallery for mobile */}
        <ul className="flex tablet:hidden flex-col items-center gap-[24px] ">
          {gallery.map(({ name, order, desc }) => (
            <li key={`view-${order}-${name}`}>
              <GalleryPicture name={name} order={order} desc={desc} />
            </li>
          ))}
        </ul>
      </Container>

      {/* Slider carousel for tablet & desktop */}
      <div className="relative hidden tablet:block mx-auto tablet:px-[32px] desktop:px-0 tablet:w-[768px] desktop:w-[1280px]">
        <Swiper
          className="gallery-carousel"
          ref={sliderRef}
          onInit={(core: SwiperCore) => {
            sliderRef.current = core.el;
          }}
          loop={true}
          speed={1000}
          spaceBetween={24}
          slidesPerView={3}
          centeredSlides
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
        >
          {sliderItems.map(({ name, order, desc }, index) => {
            return (
              <div key={`item-${index + 1}-${name}`}>
                <SwiperSlide key={`slide-${index + 1}-${name}`}>
                  {({ isActive }) => (
                    <div>
                      <GalleryPicture order={order} name={name} desc={desc} />
                      <div
                        className={
                          !isActive
                            ? "absolute top-0 left-0 w-full h-full bg-overlay-strong"
                            : "hidden"
                        }
                      ></div>
                    </div>
                  )}
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
        <button
          className="prev absolute z-10 bottom-0 left-[70px] desktop:left-[228px] text-[33px] font-thin desktop:leading-none  uppercase"
          type="button"
          aria-label="Swipe to the previous picture"
        >
          Back
        </button>
        <button
          className="next absolute z-10 bottom-0 right-[70px] desktop:right-[228px] text-[33px] font-thin desktop:leading-none uppercase"
          type="button"
          aria-label="Swipe to the next picture"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Gallery;
