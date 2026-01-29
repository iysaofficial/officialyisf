import Banner from "../components/Banner";
import Supported from "../components/Supported";
import CAbout from "../components/CAbout";
import Mechanis from "../components/Mechanis";
import Categories from "../components/Categories";
import VideoAE from "../components/VideoAE";
import News from "../components/News";

function Home() {
    return (
        <>
            <Banner />
            <CAbout/>
            {/* <Timevenue /> */}
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