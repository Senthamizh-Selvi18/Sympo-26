import React, { useEffect, useRef, useState } from "react";

/**
 * Wraps children and adds an animate.css class when the element
 * scrolls into view. Animation plays once by default.
 *
 * Usage:
 * <ScrollReveal animation="fadeInUp"><Faq /></ScrollReveal>
 */
const ScrollReveal = ({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 800,
  threshold = 0.15,
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
      { threshold }
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
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;