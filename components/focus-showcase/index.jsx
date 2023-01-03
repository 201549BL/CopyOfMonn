import { Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useState } from "react";

import image1 from "../../public/blue-room.jpg";
import image2 from "../../public/grey-room.jpg";
import image3 from "../../public/livingroom.jpg";
import image4 from "../../public/pexels-palmtrees.jpeg";
import image5 from "../../public/plant-room.jpg";
import image6 from "../../public/mirror-room.jpg";

const constants = [
  {
    image: image1,
    title: "Fokus nummer 1",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, laborum deserunt quo earum laudantium debitis. Non praesentium suscipit vero ducimus reprehenderit sapiente animi rem possimus dolorem quibusdam, sed optio, saepe dolores ad alias officiis, accusamus similique provident adipisci. Laboriosam, ipsam.",
  },
  {
    image: image2,
    title: "Fokus nummer 2",
    text: "r sit, amet consectetur adipisicing elit. Labore, laborum deserunt quo earum laudantium debitis. Non praesentium suscipit vero ducimus reprehenderit sapiente animi rem possimus dolorem quibusdam, sed optio, saepe dolores ad alias officiis, accusamus similique provid",
  },
  {
    image: image3,
    title: "Fokus nummer 3",
    text: "orem ipsum dolor sit, amet consectetur adipisicing elit. Labore, laborum deserunt quo earum laudantium debitis. Non praesentium suscipit vero ducimus reprehenderit sapiente animi rem possimus dolorem quibusdam, sed optio, saepe dolores ad alias officiis, accusamus similique provident adipisci. Laboriosam, i",
  },
  {
    image: image4,
    text: "entium su scipit vero ducimus reprehend ehenderit sapient quibusdam, sed optio,scipit vero ducimus reprehend ehenderit sapient quibusdam, sed optio, saepe dolorent ad",
    title: "Fokus nummer 4",
  },
  {
    image: image5,
    title: "Fokus nummer 5",
    text: ", amet consectetur adipisicing elit. Labore, laborum deserunt quo earum laudantium debitis. Non praesentium suscipit vero ducimus reprehenderit sapiente animi rem possimus dolorem quibusdam, sed optio, saepe dolores ad alias officiis, accusamus similique provident adipisc",
  },
  {
    image: image6,
    title: "Fokus nummer 6",
    text: "ctetur adipisicing elit. Labore, laborum deserunt quo earum laudantium debitis. Non praesentium suscipit vero ducimus reprehenderit sapiente animi r",
  },
];

const FocusShowcase = (images) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderImages = () =>
    constants.map((item, index) => (
      <Transition
        as="div"
        key={item.text}
        show={activeIndex === index}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100 "
        leaveTo="opacity-0"
        className=""
      >
        <Image src={item.image} fill alt="" className="object-cover" />
      </Transition>
    ));

  const renderText = () =>
    constants.map((item, index) => (
      <Transition
        show={activeIndex === index}
        key={item.title + index}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100 "
        leaveTo="opacity-0"
        className="absolute"
      >
        <h3 className="sm:pt-4 text-3xl">{item.title}</h3>
        <p className="pt-6">{item.text}</p>
      </Transition>
    ));

  const renderButtons = () =>
    constants.map((item, index) => (
      <button
        key={item.title}
        onClick={() => setActiveIndex(index)}
        className="text-start col-span-6 py-4"
      >
        <p className={`${activeIndex === index ? "font-bold" : null}`}>
          {item.title}
        </p>
        <div className="h-[1px] w-20 bg-white mt-2"></div>
      </button>
    ));

  return (
    <div className="p-3 grid grid-cols-12 auto-rows-min">
      <div className="relative col-span-full lg:col-start-7 row-start-1 h-[50vh] w-full min-h-[40vh]">
        {renderImages()}
      </div>
      <div className="relative col-start-1 col-span-full lg:col-end-6 flex flex-col">
        <h2 className="text-xl text-[#C4C4C2] py-4">Fokusområder</h2>
        <div className="h-72">{renderText()}</div>
        <div className="grid grid-cols-12 flex-1">{renderButtons()}</div>
      </div>
    </div>
  );
};

export default FocusShowcase;
