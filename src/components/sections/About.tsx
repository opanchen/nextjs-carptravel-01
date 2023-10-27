import { Container } from "@components";

const About: React.FC = () => {
  return (
    <section id="about" className="background-overlay section-about section">
      <Container>
        <div className="relative flex flex-col gap-[40px] tablet:gap-[64px]">
          <div className="flex flex-col tablet:flex-row gap-[8px] tablet:gap-[76px] desktop:gap-[24px] tablet:items-start">
            <h2 className="text-heading shrink-0 tablet:leading-none desktop:translate-y-[-6px]">
              <span className="tablet:text-justify">Who</span>{" "}
              <span className="font-medium">we are</span>
            </h2>

            <div className="flex flex-col gap-[20px] tablet:gap-[16px] w-[180px] tablet:w-auto desktop:w-[292px]">
              <p className="text-primary">
                <span className="font-normal">a team of enthusiasts</span> who
                are fully committed to the mission of creating unforgettable and
                extraordinary trips to the most beautiful parts of the
                Carpathians. Our goal is not just to show you the natural
                wonders of the mountains, but to provide you with a deep
                immersion in their magical atmosphere.
              </p>

              <p className="text-primary">
                <span className="font-normal">We believe</span> that nature has
                the power to inspire, strengthen character and provide new
                perspectives. Therefore, each of our tours is aimed at unlocking
                your potential, enriching your spiritual world and creating
                unforgettable memories.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[40px] desktop:flex-row-reverse desktop:gap-0 desktop:justify-between desktop:items-center">
            <p className="tablet:absolute desktop:static tablet:left-0 tablet:bottom-[124px] self-end inline-flex flex-col w-[180px] tablet:w-[220px] desktop:w-auto text-primary">
              <span className="font-normal uppercase">From vacationers</span>
              <span className="text-right font-normal uppercase">
                to active travelers
              </span>
              <span className=" tracking-[-0.14px] tablet:tracking-[0.32px] desktop:tracking-[2.16px]">
                we have a tour for everyone.
              </span>
            </p>

            <p className="text-primary tablet:w-[464px] desktop:w-[604px] tablet:self-end">
              <span className="font-normal">We use methods</span> that are
              time-tested and proven. Our expert guides with in-depth knowledge
              of the Carpathian landscapes lead you safely through the mysteries
              of these mountains.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
