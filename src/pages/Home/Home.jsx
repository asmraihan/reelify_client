import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
import ParallaxCover from "../../components/ParallaxCover";
import PopularClass from "../../components/PopularClass";
import PopularInstructor from "../../components/PopularInstructor";
import Pricing from "../../components/Pricing";
import Showcase from "../../components/Showcase";
import Test2 from "../../components/Test2";


const Home = () => {
    return (
        <div className="">
          <Banner></Banner>
          <PopularClass></PopularClass>
          <PopularInstructor></PopularInstructor>
          <ParallaxCover></ParallaxCover>
          <Showcase></Showcase>
          {/* <Playback></Playback> */}
          <Test2></Test2>
          <Pricing></Pricing>
          {/* <Test3></Test3> */}
          {/* <Stats></Stats> */}
          <Contact></Contact>
        </div>
    );
};

export default Home;