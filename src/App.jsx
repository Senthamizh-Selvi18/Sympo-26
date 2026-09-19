import React, { useState, useEffect, useCallback, useRef } from "react";
import "./App.css";
   import "./styles/perf-overrides.css";
import Header from "./Sections/Header";
import { Outlet } from "react-router-dom";
import Loading from "./Components/Loading";
import SplashScreen from "./Components/SplashScreen";
import ScrollToTop from "./Components/ScrollToTop";
import "./styles/eventStyles.css";
import backgroundMusic from "./assets/backgroundMusic.mp3";
import metallicSound from "./assets/clicksound.mp3";
import useSound from "use-sound";
import EngineeringFieldBackground from "./Components/EngineeringFieldBackground";
import "./Sections/styles/engineering-field.css";

const App = () => {
  const [stage, setStage] = useState("splash"); // splash -> loading -> ready

  const [play, { stop }] = useSound(backgroundMusic, {
    volume: 0.1,
    loop: true,
    html5: true, // stream the file instead of decoding it all into RAM
  });

  const handleSplashFinish = useCallback(() => setStage("loading"), []);

  useEffect(() => {
    if (stage !== "loading") return;
    const t = setTimeout(() => setStage("ready"), 1200);
    return () => clearTimeout(t);
  }, [stage]);

  // start music only once the app is actually showing
  useEffect(() => {
    if (stage !== "ready") return;
    play();
    return () => stop();
  }, [stage, play, stop]);

  // one reusable click sound instead of a new Audio() per click
  useEffect(() => {
    const audio = new Audio(metallicSound);
    audio.preload = "auto";
    const onClick = () => {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (stage === "splash") return <SplashScreen onFinish={handleSplashFinish} />;
  if (stage === "loading") return <Loading />;

  return (
    <div className="text-2xl text-white">
    <EngineeringFieldBackground position="fixed" />
     <ScrollToTop />
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;