import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Sections/Header";
import Footer from "./Sections/Footer";
import { Outlet } from "react-router-dom";
import Loading from "./Components/Loading";
import SplashScreen from "./Components/SplashScreen";
import ScrollToTop from "./Components/ScrollToTop";
import './styles/eventStyles.css';
import backgroundMusic from './assets/backgroundMusic.mp3'
import metallicSound from './assets/clicksound.mp3'
import useSound from "use-sound";
import EngineeringFieldBackground from "./Components/EngineeringFieldBackground";
import "./Sections/styles/engineering-field.css";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [loading, setLoading] = useState(true);

  const [play, { stop }] = useSound(backgroundMusic, { volume: 0.1, loop: true, interrupt: true });

  useEffect(() => {
    play();
    return () => {
      stop();
    };
  }, [play, stop]);

  useEffect(() => {
    const playSound = () => {
      const audio = new Audio(metallicSound);
      audio.currentTime = 0;
      audio.play().catch(error => console.log("Failed to play metallic sound:", error));
    };
    document.addEventListener('click', playSound);

    return () => {
      document.removeEventListener('click', playSound);
    };
  }, []);

  useEffect(() => {
    const splashTimer = setTimeout(() => setShowSplash(false), 5000);
    const loaderTimer = setTimeout(() => setLoading(false), 5000);

    return () => {
      clearTimeout(splashTimer);
      clearTimeout(loaderTimer);
    };
  }, []);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="text-2xl text-white">
      <EngineeringFieldBackground position="fixed" />
      <ScrollToTop></ScrollToTop>
      <Header />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default App;