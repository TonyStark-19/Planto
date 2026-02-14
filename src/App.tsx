// import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import Trendy from "./sections/Trendy";
import Selling from "./sections/Selling";
import Review from "./sections/Review";
import BestO2 from "./sections/BestO2";

export default function App() {
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
      <div className="bg-[#1b2316]">
        <Selling />
        <Review />
        <BestO2 />
        <Footer />
      </div>
    </main>
  );
}