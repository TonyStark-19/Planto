// import components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./sections/Home";
import Trendy from "./sections/Trendy";
import Selling from "./sections/Selling";
import Review from "./sections/Review";
import BestO2 from "./sections/BestO2";

// aos animations
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// main app component
export default function App() {
  // aos animations
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-quart",
      once: true,
      offset: 40,
    });
  }, []);

  return (
    <main className="min-h-screen selection:bg-[#6fc33e] selection:text-white">
      {/* Hero & Trendy Section Wrapper shares the background image */}
      <div className="relative bg-[url('/images/background/bg.jpg')] bg-cover bg-center">
        <div className="relative z-10">
          <Navbar />
          <Home />
          <Trendy />
        </div>
      </div>

      {/* Solid Background Sections */}
      <div className="bg-[#1b2316] overflow-x-hidden">
        <Selling />
        <Review />
        <BestO2 />
        <Footer />
      </div>
    </main>
  );
}