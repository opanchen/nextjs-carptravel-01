"use client";

import { useState } from "react";

import Link from "next/link";
import { Container, MainNav } from "@components";

const AppBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="absolute top-0 left-0 right-0">
      <Container>
        <nav className="flex justify-between items-center py-[36px] tablet:py-[24px]">
          <Link href="/" className="flex items-center flex-col">
            <div className="flex flex-col items-center">
              <div className="logo-element relative w-full h-[22px]"></div>
              <span className="inline-block logo-text font-karantina text-[14px] leading-none tracking-[2.59px]">
                CarpTravel
              </span>
            </div>
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
