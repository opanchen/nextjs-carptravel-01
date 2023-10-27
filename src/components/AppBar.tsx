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
            <div
              aria-label="CarpTravel logo"
              className="flex flex-col items-center"
            >
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
            aria-label="Open mobile menu"
          >
            Menu
          </button>

          <div className="hidden tablet:block">
            <MainNav onClick={() => {}} />
          </div>
        </nav>
      </Container>

      {isMenuOpen && (
        <div className="fixed-full z-10 bg-overlay-burger backdrop-blur-[25px] overflow-hidden tablet:hidden">
          <Container>
            <div className="relative min-h-screen flex justify-center items-center">
              <button
                className="absolute top-[42px] right-0 py-[4px] text-[14px] tracking-[1.4px]"
                onClick={toggleMenu}
                aria-label="Close mobile menu"
              >
                Close
              </button>
              <MainNav onClick={() => setIsMenuOpen(false)} />
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

export default AppBar;
