import { Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import useElementInViewport from "../../hooks/useElementInViewport";

const defaultTransition = "transition-[transform,opacity] duration-1000";
const defaultEnter = "translate-y-0 opacity-1";
const defaultLeave = "translate-y-10 opacity-0";

const FadeIn = ({
  oneShot = true,
  children,
  transition = defaultTransition,
  enter = defaultEnter,
  leave = defaultLeave,
  className,
}) => {
  const [animation, setAnimation] = useState(undefined);
  const [isTransitioning, setIsTransitioning] = useState(undefined);
  const { elementRefOnChange, isVisible } = useElementInViewport(
    {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: 0.4,
    },
    oneShot
  );

  useEffect(() => {
    setIsTransitioning(transition);
  }, [isVisible, transition]);

  return (
    <div
      ref={elementRefOnChange}
      className={` ${isTransitioning} ${
        isVisible ? enter : leave
      } ${className}`}
      onTransitionEnd={() => setIsTransitioning(undefined)}
    >
      {children}
    </div>
  );
};

export default FadeIn;
