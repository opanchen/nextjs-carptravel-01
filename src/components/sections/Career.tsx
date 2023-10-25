import { CareerForm, Container } from "@components";

const Career: React.FC = () => {
  return (
    <section id="career">
      <div className="section background-overlay section-career">
        <Container>
          <div className="flex flex-col gap-[36px] tablet:gap-[12px] desktop:gap-[24px]">
            <div className="flex flex-col tablet:flex-row gap-[24px] tablet:gap-0 tablet:justify-between">
              <h2 className="text-heading tablet:leading-tight">
                Choose <span className="font-medium">us</span>
              </h2>

              <p className="self-end tablet:self-auto w-[180px] tablet:w-[220px]  desktop:w-[292px] text-[14px] font-extralight leading-[1.428] tablet:text-[13px] tablet:leadind-[1.538] tablet:text-justify desktop:text-[18px] desktop:leading-[1.333] tablet:pt-[8px] desktop:pt-[16px]">
                Your chance to join our passionate team in Carpathian tourism.
                Seeking talented professionals to share our common mission.
              </p>
            </div>

            <div className="flex gap-[20px] desktop:gap-[24px] items-start desktop:justify-end">
              <div className="tablet:relative flex flex-col gap-[36px] tablet:pt-[96px] desktop:pt-[88px]">
                <h3 className="tablet:absolute tablet:right-0 tablet:top-0 desktop:right-[309px] self-end w-[180px] text-[30px] desktop:text-[36px] font-extralight desktop:leading-[1.083] text-right uppercase">
                  Why us ?
                </h3>

                <ul className="flex flex-col gap-[16px] tablet:gap-[24px] w-[182px] tablet:w-auto tablet:shrink-0 text-right">
                  <li className="flex flex-col gap-[8px] desktop:flex-row desktop:gap-[24px] desktop:justify-end">
                    <h4 className="offer-text-title desktop:translate-y-[-3px]">
                      Professional development
                    </h4>
                    <p className="offer-text-desc desktop:w-[285px] desktop:text-left">
                      We offer growth opportunities and a creative environment
                      to nurture your talents.
                    </p>
                  </li>

                  <li className="flex flex-col gap-[8px] desktop:flex-row desktop:gap-[24px] desktop:justify-end">
                    <h4 className="offer-text-title desktop:translate-y-[-3px]">
                      Teamwork
                    </h4>
                    <p className="offer-text-desc desktop:w-[285px] desktop:text-left">
                      Join our close-knit family, where support and inspiration
                      abound.
                    </p>
                  </li>

                  <li className="flex flex-col gap-[8px] desktop:flex-row desktop:gap-[24px] desktop:justify-end">
                    <h4 className="offer-text-title desktop:translate-y-[-3px]">
                      Stimulating work environment
                    </h4>
                    <p className="offer-text-desc desktop:w-[285px] desktop:text-left">
                      Flexibility and remote options for a comfortable
                      experience.
                    </p>
                  </li>

                  <li className="flex flex-col gap-[8px] desktop:flex-row desktop:gap-[24px] desktop:justify-end">
                    <h4 className="offer-text-title desktop:translate-y-[-3px]">
                      Exciting challenges
                    </h4>
                    <p className="offer-text-desc desktop:w-[285px] desktop:text-left">
                      Unleash your potential through unforgettable projects
                      showcasing Carpathian beauty.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="hidden tablet:inline-flex flex-col gap-[24px] tablet:pt-[96px] desktop:pt-[88px]">
                <p className="self-end tablet:self-start  w-[180px] tablet:w-[220px] desktop:w-[234px] text-primary">
                  <span>{"Don't miss your opportunity!"}</span>
                  <br />
                  Fill out the form right now and join our team!
                </p>
                <CareerForm />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Render form as another section for mobile dimension */}
      <div className="section background-overlay section-career tablet:hidden">
        <Container>
          <div className="flex tablet:inline-flex flex-col gap-[24px]">
            <p className="self-end tablet:self-start w-[180px] tablet:w-[220px] desktop:w-[234px] text-primary">
              <span>{"Don't miss your opportunity!"}</span>
              <br />
              Fill out the form right now and join our team!
            </p>
            <CareerForm />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Career;
