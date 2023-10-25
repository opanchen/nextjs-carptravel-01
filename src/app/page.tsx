import { About, Career, Gallery, Hero, Services } from "@components";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Career />
      <Gallery />
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
