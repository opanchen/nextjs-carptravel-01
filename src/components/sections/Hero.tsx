import { Container } from "@components";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="background-overlay hero pt-[104px] pb-[56px] tablet:pt-[124px] tablet:pb-[64px] desktop:pt-[130px] desktop:pb-[104px]">
      <Container>
        {/* Inner div */}
        <div className="relative flex flex-col gap-[24px] pt-[76px] tablet:flex-row tablet:gap-[48px] desktop:gap-[148px] tablet:pt-0">
          {/* Headin Hero div */}
          <div className="flex flex-col gap-[24px] tablet:gap-[68px]">
            <h1 className="text-[40px] tablet:text-[67px] desktop:text-[98px] font-thin leading-[1.4] tracking-[-1.6px] tablet:tracking-[-2.68px] desktop:tracking-[-3.92px] tablet:leading-normal uppercase">
              <span className="inline-block font-medium ">Uncover</span>
              <br />
              {"Carpathian's"}
              <br />
              secrets
            </h1>

            <p className="text-[10px] tablet:text-[14px] desktop:text-[16px] font-extralight leading-[1.6] tablet:leading-[1.143] desktop:leading-[1.5] tablet:tracking-[1.26px] desktop:tracking-[1.44px]">
              {`Hoverla / Yaremche / Zakarpattia / ${" "} `}
              <br className="desktop:hidden" />
              Vorokhta / Synevyr Lake / Bukovel
            </p>
          </div>

          {/* Offer div (with absolute element) */}
          <div className="flex flex-col gap-[24px] tablet:gap-[28px] tablet:w-[230px] desktop:w-[294px] desktop:ml-auto">
            <h2 className="absolute top-0 right-0 tablet:static tablet:mb-auto tablet:leading-normal">
              <p className="flex tablet:leading-normal">
                <span className="inline-block text-[37px] tablet:text-[67px] desktop:text-[98px] font-medium leading-none tablet:leading-normal">
                  7
                </span>
                <span className="inline-block text-[37px] tablet:text-[67px] desktop:text-[98px]  font-thin tracking-[1.665px] tablet:tracking-[8.71px] desktop:tracking-normal leading-none tablet:leading-normal uppercase">
                  Days
                </span>
              </p>
              <span className="inline-block text-[12px] tablet:text-[14px] desktop:text-[16px] font-light tracking-[9.48px] tablet:tracking-[25.9px] desktop:tracking-[36.48px] leading-none uppercase translate-y-[-10px] tablet:translate-y-[-24px] desktop:translate-y-[-32px]">
                Journey
              </span>
            </h2>

            <p className="text-[14px] tablet:text-[16px] desktop:text-[18px] text-justify font-extralight leading-[1.428] tablet:leading-[1.25] desktop:leading-[1.333] tablet:shrink">
              We offer you unforgettable trips to the most beautiful parts of
              the Carpathians. Enjoy stunning views, exciting expeditions, and
              the best service!
            </p>

            <Link
              href="#contacts"
              className="hero-btn relative flex justify-center items-center  w-full h-[53px] tablet:h-[50px] desktop:h-[71px] text-[18px] desktop:text-[32px] font-bold leading-[2.666] tablet:leading-normal uppercase bg-gray-middle hover:bg-gray-strong focus:bg-gray-strong focus:outline-none"
            >
              Join now
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
