import Banner from "../../components/Banner";
import Playback from "../../components/Playback";
import PopularClass from "../../components/PopularClass";
import PopularInstructor from "../../components/PopularInstructor";
import Pricing from "../../components/Pricing";
import Test from "../../components/Test";
import Test2 from "../../components/Test2";


const Home = () => {
    return (
        <div className="">
          <Banner></Banner>
          <PopularClass></PopularClass>
          <PopularInstructor></PopularInstructor>
          {/* <Playback></Playback> */}
          <Pricing></Pricing>
          <Test></Test>
          <Test2></Test2>
        </div>
    );
};

export default Home;