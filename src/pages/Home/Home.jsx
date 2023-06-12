import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
import ParallaxCover from "../../components/ParallaxCover";
import PopularClass from "../../components/PopularClass";
import PopularInstructor from "../../components/PopularInstructor";
import Pricing from "../../components/Pricing";
import Showcase from "../../components/Showcase";
import Showcase2 from "../../components/Showcase2";
import Test2 from "../../components/Test2";


const Home = () => {
    return (
        <div className="">
          <Banner></Banner>
        <div className="w-11/12 mx-auto">
        <PopularClass></PopularClass>
          <PopularInstructor></PopularInstructor>
          <ParallaxCover></ParallaxCover>
          <Showcase></Showcase>
          {/* <Showcase2></Showcase2> */}
          <Test2></Test2>
          <Pricing></Pricing>
          <Contact></Contact>
        </div>
        </div>
    );
};

export default Home;