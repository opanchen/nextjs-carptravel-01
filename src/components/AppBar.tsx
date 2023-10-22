"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { Container, MainNav } from "@components";

const AppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="absolute top-0 left-0 right-0">
      <Container>
        <nav className="flex justify-between items-center py-[36px] tablet:py-[24px]">
          <Link href="/" className="flex items-center flex-col">
            {/* <div className="logo-element relative w-full h-[20px] outline-dashed"></div>
            <span className="logo-text font-karantina, text-[14px] tracking-[2.59px] leading-[0.71]">
              CarpTravel
            </span> */}

            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={60}
              height={24}
            />
          </Link>

          <button
            className="block tablet:hidden py-[4px] text-[14px] tracking-[1.4px]"
            type="button"
            onClick={toggleMenu}
          >
            Menu
          </button>

          <div className="hidden tablet:block">
            <MainNav onClick={() => {}} />
          </div>
        </nav>
      </Container>

      {isMenuOpen && (
        <div className="fixed-full z-10 flex justify-center items-center bg-overlay-burger backdrop-blur-[25px] overflow-hidden tablet:hidden">
          <button
            className="absolute top-[36px] right-[20px] py-[4px] text-[14px] tracking-[1.4px]"
            onClick={toggleMenu}
          >
            Close
          </button>
          <MainNav onClick={() => setIsMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default AppBar;
