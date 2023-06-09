import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
import Parallax from "../../components/Parallax";
import Playback from "../../components/Playback";
import PopularClass from "../../components/PopularClass";
import PopularInstructor from "../../components/PopularInstructor";
import Pricing from "../../components/Pricing";
import Stats from "../../components/Stats";
import Test from "../../components/Test";
import Test2 from "../../components/Test2";
import Test3 from "../../components/Test3";


const Home = () => {
    return (
        <div className="">
          <Banner></Banner>
          <Parallax></Parallax>
          <PopularClass></PopularClass>
          <PopularInstructor></PopularInstructor>
          <Test></Test>
          {/* <Playback></Playback> */}
          <Test2></Test2>
          <Pricing></Pricing>
          {/* <Test3></Test3> */}
          <Stats></Stats>
          <Contact></Contact>
        </div>
    );
};

export default Home;