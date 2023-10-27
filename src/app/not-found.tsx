import { Container } from "@components";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="h-screen background-overlay section-gallery pt-[104px] pb-[56px] tablet:pt-[124px] tablet:pb-[64px] desktop:pt-[130px] desktop:pb-[104px]">
      <Container>
        <div className="min-h-[70vh] flex flex-col gap-[32px] tablet:gap-[64px]">
          <div className="flex flex-col-reverse gap-[24px] tablet:gap-[36px]">
            <h1 className="text-heading self-start">
              <span className="font-medium">Not</span> found
            </h1>
            <p className="self-end flex flex-col items-end uppercase text-[14px] desktop:text-[20px] font-thin leading-[1.665]">
              <span>There was a</span>
              <span className="font-extralight text-center text-[12px] desktop:text-[16px]">
                problem
              </span>
            </p>
          </div>

          <div className="grow flex flex-col justify-between">
            <p className="text-primary tablet:self-start">
              We could not find the page you were looking for.
            </p>

            <div className="flex flex-col gap-[20px] tablet:w-[40%] desktop:w-[35%] tablet:self-end">
              <p className="text-primary self-center tablet:self-end tablet:text-left">
                Please follow the link <br className="hidden tablet:block" />{" "}
                and go to the home page.
              </p>

              <Link
                href="/"
                aria-label="Go to the home page"
                className="hero-btn relative flex justify-center items-center  w-full h-[53px] tablet:h-[50px] desktop:h-[71px] text-[18px] desktop:text-[32px] font-bold leading-[2.666] tablet:leading-normal uppercase transition_prop bg-gray-middle hover:bg-gray-strong focus:bg-gray-strong focus:outline-none"
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
