import Link from "next/link";

const NotFound = () => {
  return (
    <section className="h-screen text-center pt-[104px] tablet:pt-[124px] desktop:pt-[130px] bg-overlay-burger">
      <h1 className="text-3x1">There was a problem</h1>
      <p>We could not find the page you were looking for.</p>
      <p>
        Go back to the{" "}
        <Link href="/" className="text-lg font-bold underline">
          Home
        </Link>
      </p>
    </section>
  );
};

export default NotFound;
