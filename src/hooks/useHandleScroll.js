import { useState, useRef, useEffect } from "react";

const useHandleScroll = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const previousPosition = useRef(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollChecking = () => {
    const currentPosition = window.pageYOffset;

    if (currentPosition > previousPosition.current) {
      setScrollDirection("down");
    } else if (currentPosition < previousPosition.current) {
      setScrollDirection("up");
    }

    previousPosition.current = currentPosition <= 0 ? 0 : currentPosition;

    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollChecking);

    return () => window.removeEventListener("scroll", scrollChecking);
  }, []);

  return {
    scrollDirection,
    scrollPosition,
  };
};

export default useHandleScroll;
