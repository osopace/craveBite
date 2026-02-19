import Navbar from "../components/unsignedNav";
import Hero from "../components/hero";
import Category from "../components/foodCategories";
import Banner from "../components/banner";
import PoPular from "../components/NearYou";
import Footers from "../components/footerLayout";
// import Menus from "../components/spoonacularRecipe";

function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="  bg-[var(--background)]   ">
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
