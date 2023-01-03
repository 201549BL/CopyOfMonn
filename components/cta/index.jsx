import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { RightArrowIcon } from "../icons/RightArrowIcon";
import { LogoIcon } from "../logo";

import image1 from "../../public/blue-room.jpg";
import image2 from "../../public/grey-room.jpg";
import image3 from "../../public/livingroom.jpg";
import image4 from "../../public/lush-room.jpg";
import image5 from "../../public/mirror-room.jpg";
import image6 from "../../public/plant-room.jpg";
import { Transition } from "@headlessui/react";
import FadeIn from "../fade-in";

const constants = [
  { image: image1, text: "Bærekraftig" },
  { image: image2, text: "Kreativt" },
  { image: image3, text: "Ikonisk" },
  { image: image4, text: "Levende" },
  { image: image5, text: "Sterkt" },
  { image: image6, text: "Moderne" },
];

const backgroundColors = [
  "#267E71",
  "#C1737B",
  "#007791",
  "#80461B",
  "#0A443C",
  "#905D5D",
];

const CTA = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderLinks = () =>
    constants.map((item, index) => (
      <li key={item.text}>
        <Link
          href="#"
          onFocus={() => setActiveIndex(index)}
          onMouseOver={() => setActiveIndex(index)}
        >
          <p
            className={`whitespace-nowrap ${
              activeIndex === index ? "opacity-1" : "opacity-50"
            } transiton-opacity duration-100`}
          >
            <span>{item.text}</span>
            <span
              className={`${
                activeIndex === index ? "opacity-100" : "opacity-0"
              } transition-opacity duration-1000`}
            >
              {" "}
              på innsiden
            </span>
          </p>
        </Link>
      </li>
    ));

  const renderImages = () =>
    constants.map((item, index) => (
      <Transition
        key={item.text}
        show={activeIndex === index}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100 "
        leaveTo="opacity-0"
      >
        <Image src={item.image} fill alt="" className="object-cover" />
      </Transition>
    ));

  return (
    <div
      style={{ backgroundColor: backgroundColors[activeIndex] }}
      className="flex relative justify-center min-h-screen transition-colors duration-1000 text-white"
    >
      <div className="max-w-[1920px] w-full flex flex-col relative lg:gap-12 p-10 md:p-14 lg:px-14 lg:py-28 ">
        <FadeIn>
          <div className="grid grid-cols-12 items-center">
            <p className="hidden lg:block col-start-1 col-end-6">
              Monn er et ledende fullservice interiørarkitektkontor med base i
              Oslo. Vårt team av interiørarkitekter dekker et bredt spekter av
              sektorer fra boligutvikling, hoteller og gjestfrihet,
              arbeidsplassarkitektur og design, helse og omsorg, boliger og
              personlige rom til restauranter og underholdning. Samtidig jobber
              vi alltid med å sløre linjene og bygge bro mellom de ulike
              sektorene, og skape nye og innovative opplevelser.
            </p>
            <LogoIcon className="text-[20vmin] col-end-12"></LogoIcon>
          </div>
        </FadeIn>
        {/* links and images */}
        <FadeIn className="flex-1">
          <div className="h-full grid grid-rows-6 grid-cols-12 ">
            {/* links */}
            <nav className="row-start-1 row-end-4 col-start-1 col-end-5 md:row-end-5 lg:col-start-7 lg:col-span-full lg:row-end-6 ">
              <ul className="flex flex-col h-full justify-evenly sm:text-lg md:text-3xl lg:text-5xl md:gap-8  ">
                {renderLinks()}
              </ul>
            </nav>

            {/* images */}
            <div className="row-span-3 row-start-4 col-start-4 col-span-full md:col-start-6 md:row-start-4 lg:col-start-1 lg:col-end-6 lg:row-start-1 lg:row-end-7 flex flex-col">
              <div className="relative flex-grow">{renderImages()}</div>
              <div className="md:col-start-7 col-span-full flex flex-col lg:flex-row lg:justify-between lg:pt-8 py-2 gap-2 text-sm">
                <p>Monn for DNB eiendom</p>
                <button className="flex justify-between lg:justify-start lg:gap-8 items-center">
                  <p>Se prosjekt</p>
                  <RightArrowIcon className="text-xl " />
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default CTA;
