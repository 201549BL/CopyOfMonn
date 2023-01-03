import React, { useEffect, useRef, useState } from "react";

const useScroll = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
      document.querySelector("html").style.overflowY = "auto";
      document.querySelector("body").style.overflowY = "auto";
    };
  }, []);

  const disableScroll = () => {
    if (!isMounted) return;

    document.querySelector("html").style.overflowY = "hidden";
    document.querySelector("body").style.overflowY = "hidden";
  };

  const enableScroll = () => {
    if (!isMounted) return;

    document.querySelector("html").style.overflowY = "auto";
    document.querySelector("body").style.overflowY = "auto";
  };

  const scrollToTop = () => {
    document.querySelector("html").scrollTop = 0;
  };

  const disableOverscroll = (overscrollBehavior = undefined) => {
    switch (overscrollBehavior) {
      case "x":
        document.querySelector("html").style.overscrollBehaviorX = "none";
        document.querySelector("body").style.overscrollBehaviorX = "none";
        break;
      case "y":
        document.querySelector("html").style.overscrollBehaviorY = "none";
        document.querySelector("body").style.overscrollBehaviorY = "none";
        break;
      case "both":
        console.log(overscrollBehavior);
        document.querySelector("html").style.overscrollBehavior = "none";
        document.querySelector("body").style.overscrollBehavior = "none";
        break;

      default:
        console.log(
          "Supplied argument given to disableOverscroll function: " +
            overscrollBehavior
        );
        break;
    }
  };

  return { disableScroll, enableScroll, scrollToTop, disableOverscroll };
};

export default useScroll;
