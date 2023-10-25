import Link from "next/link";

type Props = {
  onClick(): void;
};

const MainNav: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <ul className="flex flex-col items-center gap-[48px] tablet:flex-row tablet:gap-[24px] desktop:gap-[56px]">
      <li onClick={onClick}>
        <Link
          href="#about"
          //   scroll={false}
        >
          <span className="nav_link">About</span>
        </Link>
      </li>

      <li onClick={onClick}>
        <Link
          href="#services"
          //   scroll={false}
        >
          <span className="nav_link">Services</span>
        </Link>
      </li>

      <li onClick={onClick}>
        <Link
          href="#career"
          //   scroll={false}
        >
          <span className="nav_link">Career</span>
        </Link>
      </li>

      <li onClick={onClick}>
        <Link
          href="#gallery"
          //   scroll={false}
        >
          <span className="nav_link">Gallery</span>
        </Link>
      </li>

      <li onClick={onClick}>
        <Link
          href="#contacts"
          //   scroll={false}
        >
          <span className="nav_link">Contacts</span>
        </Link>
      </li>
    </ul>
  );
};

export default MainNav;
