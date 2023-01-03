import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  const [formSubmitSuccess, setFormSubmitSuccess] = useState(false);

  // mock api request
  const handleSubmit = (e) => {
    e.preventDefault();

    const { email } = e.target.elements;
    console.log(email.value);

    setFormSubmitSuccess(true);
    setTimeout(() => {
      email.value = "";
      setFormSubmitSuccess(false);
    }, 5000);
  };

  return (
    <div className="bg-[#383839]  relative text-white px-3 sm:px-10 pb-24 pt-14 lg:pt-24">
      <div className="max-w-[1920px] mx-auto  grid grid-cols-12 auto-rows-min gap-y-10 ">
        <h2 className="row-start-1 col-span-full lg:col-span-8 text-2xl md:text-4xl pb-10">
          Er du nysgjerrig på hva Monn kan gjøre for ditt prosjekt eller din
          virksomhet, vennligst ta kontakt med oss.
        </h2>
        <div className="row-start-4 col-span-full lg:row-start-1 lg:col-start-10">
          <p>sosiale medier</p>
          <ul className="flex flex-col">
            <a className="underline" href="https://www.facebook.com">
              Facebook
            </a>
            <a className="underline" href="https://www.instagram.com">
              Instagram
            </a>
            <a className="underline" href="https://www.linkedin.com">
              LinkedIn
            </a>
          </ul>
        </div>

        <div className="col-span-6 lg:col-span-3 ">
          <p>En adresse</p>
          <p>0011 sted</p>
        </div>
        <div className=" col-span-6 lg:col-span-3">
          <p>kontakt@email.com</p>
          <p>+47 112 23 344 44</p>
        </div>
        <div className=" col-span-6 lg:col-span-3">
          <p>Presse og foredrag</p>
          <p>presse@email.com</p>
        </div>
        <div className=" col-span-6 lg:col-span-3">
          <p>Karriere</p>
          <p>jobb@email.com</p>
        </div>

        <div className="col-span-full">
          <h2 className="text-2xl col-span-full pb-5">
            For nyheter og fagartikler
          </h2>
          <div className={`${formSubmitSuccess ? "visible" : "invisible"}`}>
            Din email er registrert
          </div>
          <form
            action="#"
            onSubmit={handleSubmit}
            className="border flex justify-between"
          >
            <input
              type="email"
              id="email"
              className="py-3 px-5 bg-transparent shrink grow min-w-0"
              required
              placeholder="Din email"
            />
            <input
              type="submit"
              className=" p-2 sm:py-3 sm:px-5 bg-white text-black rounded-none"
            />
          </form>
        </div>

        <Link className="underline text-sm" href="#">
          Personvern
        </Link>
      </div>
    </div>
  );
};

export default Footer;
