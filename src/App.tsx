// import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./section/Home";
import Trendy from "./section/Trendy";
import Selling from "./section/Selling";
import Review from "./section/Review";

export default function App() {
  return (
    <>
      <div className="bg-[url('/images/background/bg.jpg')] bg-cover">
        <Navbar />
        <Home />
        <Trendy />
      </div>
      <Selling />
      <Review />
      <Footer />
    </>
  )
}