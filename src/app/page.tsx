import { Hero } from "@components";

const Home = () => {
  return (
    <>
      <Hero />
      <section
        id="about"
        className="min-h-[300px] w-full border-[1px] border-cyan-950"
      >
        Section Who We Are
      </section>
      <section
        id="services"
        className="min-h-[500px] w-full border-[1px] border-cyan-950"
      >
        Section We Offer
      </section>
      <section
        id="career"
        className="min-h-[500px] w-full border-[1px] border-cyan-950"
      >
        Section Choose Us
      </section>
      <section
        id="gallery"
        className="min-h-[500px] w-full border-[1px] border-cyan-950"
      >
        Section Our Gallery
      </section>
      <section
        id="contacts"
        className="min-h-[500px] w-full border-[1px] border-cyan-950"
      >
        Section Contact Us
      </section>
    </>
  );
};

export default Home;
