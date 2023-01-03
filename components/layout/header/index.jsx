import { Dialog, Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { useState, useEffect, useRef, useCallback } from "react";

import { LogoIcon } from "../../logo";

import MenuIcon from "../../icons/MenuIcon";
import useScroll from "../../../hooks/useScroll";

const Header = ({ invert }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { disableScroll, enableScroll, scrollToTop, disableOverscroll } =
    useScroll();

  useEffect(() => {
    disableOverscroll("both");

    return;
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isOpen) return;

      if (e.key !== "Escape") return;

      setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isOpen]);

  return (
    <header
      className={`${
        isOpen ? "text-white" : undefined
      } transition-colors relative flex justify-between w-full p-3 md:p-8 max-w-[1920px] mx-auto overflow-hidden`}
    >
      <span className="md:flex gap-8 xl:gap-28 z-40">
        <Link onClick={() => setIsOpen(false)} className="self-center" href="/">
          <p className="text-3xl ">Monn</p>
        </Link>
        <p className="self-center">Interior Architects</p>
      </span>
      <span className="flex gap-8 xl:gap-28 items-center z-40">
        <button>EN</button>
        <button
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <MenuIcon className="text-[max(2rem,5vmin)] "></MenuIcon>
        </button>
      </span>

      <Transition
        show={isOpen}
        beforeEnter={() => {
          disableScroll();
          scrollToTop();
        }}
        beforeLeave={() => {
          enableScroll();
        }}
        className="fixed z-10 inset-0 "
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <nav className="relative bg-black h-full z-10 left-0 grid grid-cols-12 text-white place-content-center ">
          <Transition.Child
            className=" col-start-2 text-[6vh] flex flex-col"
            enter="transition-[opacity,transform] duration-1000 delay-500"
            enterFrom="opacity-0 translate-y-4"
            enterTo="opacity-100"
            leave="transition-[opacity,transform] duration-1000"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Link href="/" onClick={() => setIsOpen(false)}>
              Hjem
            </Link>
            <Link href="#">Hvordan</Link>
            <Link href="#">Nyheter</Link>
            <Link
              onBlur={() => {
                setIsOpen(false);
              }}
              href="#"
            >
              Kontakt
            </Link>
          </Transition.Child>
          <LogoIcon className="lg:relative lg:col-end-12 lg:m-0 lg:place-self-end text-[20vmin] absolute bottom-0 right-0 m-10 "></LogoIcon>
        </nav>
      </Transition>
    </header>
  );
};

export default Header;
