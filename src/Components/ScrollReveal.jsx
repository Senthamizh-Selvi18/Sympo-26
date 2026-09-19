import React, { useEffect, useRef, useState } from "react";

const ScrollReveal = ({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 500,       // faster default (was 800)
  threshold = 0,
  once = true,
  className = "",
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setVisible(false);
        }
      },
      // fire ~100px BEFORE the element reaches the viewport, not after
      { threshold, rootMargin: "0px 0px 100px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className={`${className} ${
        visible ? `animate__animated animate__${animation}` : "opacity-0"
      }`}
      style={{
        animationDelay: visible ? `${delay}ms` : undefined,
        animationDuration: visible ? `${duration}ms` : undefined,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;