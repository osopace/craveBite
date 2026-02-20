import Navbar from "../components/unsignedNav";
import Hero from "../components/hero";
import Category from "../components/foodCategories";
import Banner from "../components/banner";
import PoPular from "../components/NearYou";
import Footers from "../components/footerLayout";
import { useState, useEffect } from "react";
import SplashScreen from "../components/loaders/splashscreen";
// import Menus from "../components/spoonacularRecipe";

function Homepage() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const hasvisited = sessionStorage.getItem("hasvisited");
    if (!hasvisited) {
      sessionStorage.setItem("hasvisited", "true");
      const timer = setTimeout(() => {
        setLoader(false);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setLoader(false);
    }
  }, []);

  return loader ? (
    <SplashScreen />
  ) : (
    <>
      <Navbar />
      <Hero />
      <main className="bg-[var(--background)]">
        <Category />
        <Banner />
        <PoPular />
        <Footers />
        {/* <Menus /> */}
      </main>
    </>
  );
}
export default Homepage;
