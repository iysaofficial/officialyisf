import Banner from "../components/Banner";
import Supported from "../components/Supported";
import C_About from "../components/C_About";
import Mechanis from "../components/Mechanis";
import Categories from "../components/Categories";
import VideoAE from "../components/VideoAE";
import News from "../components/News";
import Timevenue from "../components/timevenue";

function Home() {
    return (
        <>
            <Banner />
            <C_About/>
            <Timevenue />
            <Mechanis />
            <Categories />
            <VideoAE />
            <News />
            <Supported />
            {/* <Footer /> */}
        </>
    )
}

export default Home;