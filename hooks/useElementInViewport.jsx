import { useCallback, useEffect, useRef, useState } from "react";

const defaultOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};

const useElementInViewport = (options = defaultOptions, oneShot = true) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(undefined);

  const elementRefOnChange = useCallback(
    (node) => {
      if (!node) return;

      const handleElementVisible = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);

        if (entry.isIntersecting && oneShot) observer.unobserve(entry.target);
      };

      const observer = new IntersectionObserver(handleElementVisible, options);
      observer.observe(node);
    },
    [options, oneShot]
  );

  return { elementRefOnChange, isVisible };
};

export default useElementInViewport;
