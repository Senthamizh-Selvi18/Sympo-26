import React, { useEffect, useRef, useState } from "react";

/**
 * Wraps children and adds an animate.css class when the element
 * scrolls into view. Animation plays once by default.
 *
 * FIX: threshold changed from 0.15 to 0, and rootMargin added.
 * Previously, threshold:0.15 required 15% of the WRAPPED ELEMENT'S
 * TOTAL HEIGHT to be visible in the viewport at once. For short
 * elements that's fine, but for tall wrapped sections (taller than
 * ~6-7x the viewport height), that 15% ratio can mathematically
 * never be reached on some screen sizes — so `visible` never
 * flips to true and the content stays invisible forever.
 * threshold:0 fires the instant ANY part of the element enters the
 * viewport, regardless of the element's total height, so this bug
 * class is eliminated entirely.
 *
 * Usage:
 * <ScrollReveal animation="fadeInUp"><Faq /></ScrollReveal>
 */
const ScrollReveal = ({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 800,
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
      { threshold, rootMargin: "0px 0px -10% 0px" }
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