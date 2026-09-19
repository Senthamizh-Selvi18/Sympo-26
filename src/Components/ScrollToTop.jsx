import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Renders nothing. Scrolls the window to the top every time the
// route (pathname) changes, so navigating to a new page always
// starts at the top instead of keeping the previous scroll position.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;