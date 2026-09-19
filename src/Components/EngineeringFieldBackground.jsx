import { useEffect, useRef } from 'react';

const routes = [
  {
    id: 'route-left-upper',
    d: 'M-70 228 H138 L224 314 H390 L510 420 H610',
    color: '#52dfff',
    delay: '-1.2s',
  },
  {
    id: 'route-left-lower',
    d: 'M-70 740 H142 L230 652 H394 L520 548 H618',
    color: '#377fe7',
    delay: '-4.4s',
  },
  {
    id: 'route-right-upper',
    d: 'M1670 228 H1462 L1376 314 H1210 L1090 420 H990',
    color: '#a77dff',
    delay: '-2.6s',
  },
  {
    id: 'route-right-lower',
    d: 'M1670 740 H1458 L1370 652 H1206 L1080 548 H982',
    color: '#e376d0',
    delay: '-5.8s',
  },
  {
    id: 'route-top-left',
    d: 'M294 -50 V126 L380 212 V300 L560 404',
    color: '#36b9f2',
    delay: '-3.2s',
  },
  {
    id: 'route-bottom-right',
    d: 'M1304 1050 V874 L1220 790 V704 L1040 596',
    color: '#e8aa61',
    delay: '-6.7s',
  },
];

const upperContours = [
  'M-120 126 C136 12 368 22 560 138 C632 182 684 192 770 168',
  'M-100 170 C128 76 346 86 520 184 C604 232 662 244 752 216',
];

const lowerContours = [
  'M-120 874 C136 988 368 978 560 862 C632 818 684 808 770 832',
  'M-100 830 C128 924 346 914 520 816 C604 768 662 756 752 784',
];

const particles = [
  { path: routes[0].d, color: '#8af1ff', delay: '-0.4s', size: 3.7 },
  { path: routes[0].d, color: '#52dfff', delay: '-4.6s', size: 2.4 },
  { path: routes[1].d, color: '#6ba9ff', delay: '-2.5s', size: 3.1 },
  { path: routes[2].d, color: '#c5b0ff', delay: '-5.4s', size: 3.2 },
  { path: routes[3].d, color: '#f09de0', delay: '-1.8s', size: 2.8 },
  { path: routes[4].d, color: '#6de4ff', delay: '-6.2s', size: 2.4 },
  { path: routes[5].d, color: '#ffd18a', delay: '-3.7s', size: 2.7 },
];

export function EngineeringFieldBackground({
  position = 'fixed',
  className = '',
}) {
  const fieldRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const field = fieldRef.current;
    if (!field || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let frame = 0;
    const handlePointerMove = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 2;
        const y = (event.clientY / window.innerHeight - 0.5) * 2;
        field.style.setProperty('--field-pointer-x', `${x * 16}px`);
        field.style.setProperty('--field-pointer-y', `${y * 10}px`);
      });
    };

    // Skip pointer tracking on touch devices - there's no hover benefit
    // and it's one more listener competing with scroll on lower-end hardware.
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (!isTouchDevice) {
      window.addEventListener('pointermove', handlePointerMove, { passive: true });
    }

    return () => {
      cancelAnimationFrame(frame);
      if (!isTouchDevice) {
        window.removeEventListener('pointermove', handlePointerMove);
      }
    };
  }, []);

  // Pause EVERY animation under the field while the page is actively
  // scrolling, and resume shortly after it settles. There are two animation
  // systems running here: SMIL (<animateMotion> on particles/clusters),
  // which is paused via svg.pauseAnimations(), and CSS keyframe animations
  // (the route-light dashes inside the blurred filter group, plus whatever
  // drives the depth-module/orbit/beacon/grid elements in the stylesheet),
  // which is paused via a class that forces animation-play-state: paused
  // on every descendant. Pausing only the SMIL particles (as before) left
  // the CSS-animated, filter-heavy route lights running continuously, and
  // that continuous blur repaint is what was still fighting scroll for the
  // main thread. Pausing both together is what actually unsticks scrolling.
  useEffect(() => {
    const field = fieldRef.current;
    const svgEl = svgRef.current;
    if (!field) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let resumeTimeout;
    let ticking = false;

    const pause = () => {
      field.classList.add('engineering-field--scroll-paused');
      if (svgEl && typeof svgEl.pauseAnimations === 'function') {
        svgEl.pauseAnimations();
      }
    };

    const resume = () => {
      field.classList.remove('engineering-field--scroll-paused');
      if (svgEl && typeof svgEl.unpauseAnimations === 'function') {
        svgEl.unpauseAnimations();
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        pause();
        ticking = true;
      }
      clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(() => {
        resume();
        ticking = false;
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(resumeTimeout);
      resume();
    };
  }, []);

  const positionStyle = {
    position,
    inset: 0,
    // Hint the browser to composite this layer independently on its own
    // GPU layer instead of re-rastering it on every scroll frame.
    willChange: 'transform',
    contain: 'strict',
    transform: 'translateZ(0)',
  };

  return (
    <div
      ref={fieldRef}
      aria-hidden="true"
      className={`engineering-field pointer-events-none h-full w-full overflow-hidden ${className}`}
      style={positionStyle}
      data-testid="engineering-field-background"
    >
      <style>{`
        .engineering-field--scroll-paused,
        .engineering-field--scroll-paused * {
          animation-play-state: paused !important;
        }
      `}</style>
      <div className="engineering-field__depth-scene">
        <div className="depth-grid depth-grid--left" />
        <div className="depth-grid depth-grid--right" />
        <div className="depth-grid depth-grid--floor" />

        <div className="depth-axis depth-axis--upper" />
        <div className="depth-axis depth-axis--lower" />

        <div className="depth-module depth-module--left">
          <span className="depth-module__face depth-module__face--front" />
          <span className="depth-module__face depth-module__face--back" />
          <span className="depth-module__face depth-module__face--top" />
          <span className="depth-module__face depth-module__face--side" />
          <span className="depth-module__core" />
          <span className="depth-module__signal" />
        </div>

        <div className="depth-module depth-module--right">
          <span className="depth-module__face depth-module__face--front" />
          <span className="depth-module__face depth-module__face--back" />
          <span className="depth-module__face depth-module__face--top" />
          <span className="depth-module__face depth-module__face--side" />
          <span className="depth-module__core" />
          <span className="depth-module__signal" />
        </div>

        <div className="depth-orbit depth-orbit--left" />
        <div className="depth-orbit depth-orbit--right" />
        <div className="depth-beacon depth-beacon--left" />
        <div className="depth-beacon depth-beacon--right" />
      </div>

      <svg
        ref={svgRef}
        className="engineering-field__svg"
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        aria-hidden="true"
      >
        <title>Animated engineering systems field</title>
        <desc>A layered technical environment with connected routes, wireframe modules, orbit rings, and purposeful energy motes surrounding a quiet center.</desc>
        <defs>
          <linearGradient id="scene-base" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#030719" />
            <stop offset="0.44" stopColor="#081638" />
            <stop offset="0.72" stopColor="#111337" />
            <stop offset="1" stopColor="#04081e" />
          </linearGradient>
          <radialGradient id="scene-left-light" cx="0%" cy="48%" r="70%">
            <stop offset="0" stopColor="#1d61c5" stopOpacity="0.3" />
            <stop offset="0.46" stopColor="#113d8f" stopOpacity="0.13" />
            <stop offset="1" stopColor="#081638" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="scene-right-light" cx="100%" cy="52%" r="70%">
            <stop offset="0" stopColor="#722b9a" stopOpacity="0.25" />
            <stop offset="0.42" stopColor="#29256f" stopOpacity="0.14" />
            <stop offset="1" stopColor="#111337" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="scene-center-safe" cx="50%" cy="50%" r="65%">
            <stop offset="0" stopColor="#020615" stopOpacity="0.96" />
            <stop offset="0.4" stopColor="#03091f" stopOpacity="0.86" />
            <stop offset="0.7" stopColor="#06102c" stopOpacity="0.46" />
            <stop offset="1" stopColor="#071332" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="trail-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#2766ce" stopOpacity="0.28" />
            <stop offset="0.42" stopColor="#3e9af2" stopOpacity="0.98" />
            <stop offset="0.76" stopColor="#67e8f5" stopOpacity="0.9" />
            <stop offset="1" stopColor="#d8faff" stopOpacity="0.28" />
          </linearGradient>
          <filter id="scene-glow" x="-45%" y="-70%" width="190%" height="240%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
          <filter id="scene-line-glow" x="-30%" y="-50%" width="160%" height="200%">
            <feGaussianBlur stdDeviation="1.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="1600" height="1000" fill="url(#scene-base)" />
        <rect className="scene-atmosphere scene-atmosphere--left" width="1600" height="1000" fill="url(#scene-left-light)" />
        <rect className="scene-atmosphere scene-atmosphere--right" width="1600" height="1000" fill="url(#scene-right-light)" />

        <g className="scene-depth-plane scene-depth-plane--back" fill="none" stroke="#356bb9" vectorEffect="non-scaling-stroke">
          <path d="M-100 70 H1700 M-100 930 H1700" strokeWidth="0.7" opacity="0.16" />
          <path d="M80 120 L330 500 L80 880 M1520 120 L1270 500 L1520 880" strokeWidth="0.7" opacity="0.15" />
          <path d="M180 120 L430 500 L180 880 M1420 120 L1170 500 L1420 880" strokeWidth="0.45" opacity="0.14" />
        </g>

        <g className="scene-precision-grid" fill="none" stroke="#4e8fd5" vectorEffect="non-scaling-stroke">
          <path d="M110 130 H440 M1160 130 H1490 M110 870 H440 M1160 870 H1490" strokeWidth="0.55" opacity="0.22" />
          <path d="M140 190 H280 M1320 190 H1460 M140 810 H280 M1320 810 H1460" stroke="#5ee6f4" strokeWidth="0.7" opacity="0.28" />
          <path d="M170 130 V300 M240 130 V250 M1360 130 V300 M1430 130 V250 M170 700 V870 M240 750 V870 M1360 700 V870 M1430 750 V870" strokeWidth="0.55" opacity="0.16" />
        </g>

        <g className="scene-contours scene-contours--upper" fill="none" vectorEffect="non-scaling-stroke">
          {upperContours.map((path) => (
            <path key={`upper-${path}`} d={path} stroke="#357fe0" strokeWidth="1.1" opacity="0.62" />
          ))}
          <path d="M-80 98 C170 10 390 30 590 148" stroke="#59dff1" strokeWidth="0.8" opacity="0.45" />
          <path d="M1680 98 C1430 10 1210 30 1010 148" stroke="#8c7be9" strokeWidth="0.8" opacity="0.4" />
        </g>

        <g className="scene-contours scene-contours--lower" fill="none" vectorEffect="non-scaling-stroke">
          {lowerContours.map((path) => (
            <path key={`lower-${path}`} d={path} stroke="#357fe0" strokeWidth="1.1" opacity="0.62" />
          ))}
          <path d="M-80 902 C170 990 390 970 590 852" stroke="#59dff1" strokeWidth="0.8" opacity="0.45" />
          <path d="M1680 902 C1430 990 1210 970 1010 852" stroke="#8c7be9" strokeWidth="0.8" opacity="0.4" />
        </g>

        {/* filter dropped: this group animates transform continuously via CSS,
            and a filter + animated transform is expensive to composite */}
        <g className="scene-module scene-module--left" fill="none" vectorEffect="non-scaling-stroke">
          <path d="M104 344 L190 294 H354 L440 344 V604 L354 654 H190 L104 604 Z" stroke="#2868c7" strokeWidth="1.55" opacity="0.9" />
          <path d="M142 366 L210 326 H334 L402 366 V582 L334 622 H210 L142 582 Z" stroke="#55dff1" strokeWidth="1.15" opacity="0.68" />
          <ellipse cx="272" cy="474" rx="104" ry="142" stroke="#427de0" strokeWidth="1.7" strokeDasharray="50 28" opacity="0.88" />
          <ellipse cx="272" cy="474" rx="68" ry="102" stroke="#6fdff3" strokeWidth="1.1" strokeDasharray="28 20" opacity="0.8" />
          <path d="M272 330 V394 M272 554 V618 M128 474 H196 M348 474 H416" stroke="#b0eaff" strokeWidth="1.3" opacity="0.86" />
          <path d="M176 400 L220 444 M368 400 L324 444 M176 548 L220 504 M368 548 L324 504" stroke="#7598ee" strokeWidth="1.35" opacity="0.76" />
        </g>

        <g className="scene-module scene-module--right" fill="none" vectorEffect="non-scaling-stroke">
          <path d="M1496 344 L1410 294 H1246 L1160 344 V604 L1246 654 H1410 L1496 604 Z" stroke="#426fd4" strokeWidth="1.55" opacity="0.9" />
          <path d="M1458 366 L1390 326 H1266 L1198 366 V582 L1266 622 H1390 L1458 582 Z" stroke="#55dff1" strokeWidth="1.15" opacity="0.68" />
          <ellipse cx="1328" cy="474" rx="104" ry="142" stroke="#5f75db" strokeWidth="1.7" strokeDasharray="50 28" opacity="0.88" />
          <ellipse cx="1328" cy="474" rx="68" ry="102" stroke="#b379e2" strokeWidth="1.1" strokeDasharray="28 20" opacity="0.8" />
          <path d="M1328 330 V394 M1328 554 V618 M1184 474 H1252 M1404 474 H1472" stroke="#b0eaff" strokeWidth="1.3" opacity="0.86" />
          <path d="M1232 400 L1276 444 M1424 400 L1380 444 M1232 548 L1276 504 M1424 548 L1380 504" stroke="#7598ee" strokeWidth="1.35" opacity="0.76" />
        </g>

        <g className="scene-rings scene-rings--left" fill="none" vectorEffect="non-scaling-stroke">
          <ellipse cx="272" cy="474" rx="170" ry="224" transform="rotate(-24 272 474)" stroke="#2b66c8" strokeWidth="1" opacity="0.58" />
          <ellipse cx="272" cy="474" rx="208" ry="260" transform="rotate(-24 272 474)" stroke="#4a8ce8" strokeWidth="1.2" strokeDasharray="90 560" opacity="0.64" />
          <path d="M88 298 A208 260 0 0 1 374 230" stroke="#5de5f2" strokeWidth="2" strokeDasharray="38 290" opacity="0.82" />
        </g>

        <g className="scene-rings scene-rings--right" fill="none" vectorEffect="non-scaling-stroke">
          <ellipse cx="1328" cy="474" rx="170" ry="224" transform="rotate(24 1328 474)" stroke="#386dd0" strokeWidth="1" opacity="0.58" />
          <ellipse cx="1328" cy="474" rx="208" ry="260" transform="rotate(24 1328 474)" stroke="#6757c5" strokeWidth="1.2" strokeDasharray="90 560" opacity="0.64" />
          <path d="M1512 298 A208 260 0 0 0 1226 230" stroke="#b77be2" strokeWidth="2" strokeDasharray="38 290" opacity="0.78" />
        </g>

        {/* filter dropped: this group has 6 paths continuously animating
            stroke-dashoffset, a property that can't be GPU-composited at
            all — doing that under a blur filter was likely the single
            biggest remaining scroll-jank cost */}
        <g className="scene-routes" fill="none" vectorEffect="non-scaling-stroke">
          {routes.map((route) => (
            <g key={route.id}>
              <path d={route.d} stroke="#102c68" strokeWidth="9" opacity="0.92" />
              <path className="scene-route-light" d={route.d} pathLength="100" stroke={route.color} strokeWidth="2.8" strokeDasharray="14 86" opacity="1" style={{ '--route-delay': route.delay }} />
            </g>
          ))}
        </g>

        <g className="scene-route-nodes" fill="#0a1e4a" stroke="#79e9f7" vectorEffect="non-scaling-stroke">
          <rect x="218" y="308" width="10" height="10" rx="1" strokeWidth="1.1" />
          <rect x="398" y="416" width="9" height="9" rx="1" strokeWidth="1" />
          <rect x="228" y="648" width="10" height="10" rx="1" strokeWidth="1.1" />
          <rect x="516" y="540" width="9" height="9" rx="1" strokeWidth="1" />
          <rect x="1372" y="308" width="10" height="10" rx="1" strokeWidth="1.1" />
          <rect x="1193" y="416" width="9" height="9" rx="1" strokeWidth="1" />
          <rect x="1362" y="648" width="10" height="10" rx="1" strokeWidth="1.1" />
          <rect x="1075" y="540" width="9" height="9" rx="1" strokeWidth="1" />
        </g>

        {/* filter dropped here on purpose: this group has 7 animated particles
            and re-blurring them every frame was one of the bigger scroll costs */}
        <g className="scene-particles" fill="#c8f8ff">
          {particles.map((particle, index) => (
            <circle key={`particle-${index}`} className="scene-motion-particle" r={particle.size} fill={particle.color} opacity="0.9">
              <animateMotion path={particle.path} dur="8.5s" begin={particle.delay} repeatCount="indefinite" />
            </circle>
          ))}
        </g>

        {/* filter dropped here too: 12 more animated shapes (4 routes x 3 each) */}
        <g className="scene-particle-clusters" fill="none">
          {routes.slice(0, 4).map((route, index) => (
            <g key={`cluster-${route.id}`} className="scene-particle-cluster">
              <path d="M-18 0 H18" stroke={route.color} strokeWidth="2.8" strokeLinecap="round" opacity="0.92">
                <animateMotion path={route.d} dur="8.5s" begin={`-${index * 1.4 + 0.7}s`} repeatCount="indefinite" />
              </path>
              <rect x="-3.5" y="-3.5" width="7" height="7" rx="1" fill={route.color} stroke="#d8faff" strokeWidth="0.8">
                <animateMotion path={route.d} dur="8.5s" begin={`-${index * 1.4 + 2.2}s`} repeatCount="indefinite" />
              </rect>
              <rect x="-2" y="-2" width="4" height="4" rx="0.7" fill="#e0fbff">
                <animateMotion path={route.d} dur="8.5s" begin={`-${index * 1.4 + 2.65}s`} repeatCount="indefinite" />
              </rect>
            </g>
          ))}
        </g>

        <g className="scene-depth-braces" fill="none" stroke="#6c9ae9" vectorEffect="non-scaling-stroke">
          <path d="M44 170 L140 244 M1556 170 L1460 244 M44 830 L140 756 M1556 830 L1460 756" strokeWidth="1.1" opacity="0.46" />
          <path d="M48 170 H98 M48 170 V220 M1552 170 H1502 M1552 170 V220 M48 830 H98 M48 830 V780 M1552 830 H1502 M1552 830 V780" stroke="#5de5f2" strokeWidth="0.8" opacity="0.52" />
        </g>

        <rect className="scene-center-safe" width="1600" height="1000" fill="url(#scene-center-safe)" />
        <path className="scene-center-horizon" d="M440 792 C640 812 960 812 1160 792" fill="none" stroke="#215083" strokeWidth="0.7" opacity="0.28" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}

export default EngineeringFieldBackground;