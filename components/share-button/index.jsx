import { Menu } from "@headlessui/react";
import React from "react";
import { RightArrowIcon } from "../icons/RightArrowIcon";
import { useRouter } from "next/router";

const ShareButton = ({ className }) => {
  const router = useRouter();

  const currentUrl = typeof window !== "undefined" ? location : undefined;

  return (
    <Menu as="div" className={`relative ${className}`}>
      <Menu.Button className="flex gap-4 items-center">
        <span>Del</span>
        <RightArrowIcon className="text-xl" />
      </Menu.Button>
      <Menu.Items
        className={`flex flex-col gap-1 absolute bg-white border border-black rounded py-1`}
      >
        <Menu.Item>
          {({ active }) => (
            <a
              target="blank"
              rel="noopener noreferrer"
              className={`${
                active && "bg-blue-200"
              } mx-1 px-5 rounded no-underline`}
              href={`https://www.facebook.com/sharer.php?u=${currentUrl}`}
            >
              Facebook
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              target="blank"
              rel="noopener noreferrer"
              className={`${
                active && "bg-blue-200"
              } mx-1 px-5 rounded no-underline`}
              href={`https://twitter.com/intent/tweet
                  ?url=${currentUrl}`}
            >
              Twitter
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              target="blank"
              rel="noopener noreferrer"
              className={`${
                active && "bg-blue-200"
              } mx-1 px-5 rounded no-underline`}
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`}
            >
              Linked In
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default ShareButton;
