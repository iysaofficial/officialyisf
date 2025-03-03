import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import DocumentWritter from "./pages/DocumentWritter";
import Certificate from "./pages/Certificate";


// FAQ
import Faq from "./pages/faq/Faq";

// PageTitle
import PageTitle from "./components/pagetitle/PageTitle";
import PageTitleNews from "./components/pagetitle/PageTitle";

// Foto
import G2021 from "./pages/gallery/G2021";
import G2022 from "./pages/gallery/G2022";
import G2023 from "./pages/gallery/G2023";

// End Foto

// Video
import V2021 from "./pages/video/V2021";
import V2022 from "./pages/video/V2022";
import V2023 from "./pages/video/V2023";
import V2024 from "./pages/video/V2024";
// End Video

// News
import PageNewsList from "./pages/news/PageNewsList";
import CompListNews from "./components/News/CompListNews";
import News1 from "./pages/news/News1";
import News2 from "./pages/news/News2";
import News3 from "./pages/news/News3";
import News4 from "./pages/news/News4";
import News5 from "./pages/news/News5";
import News6 from "./pages/news/News6";
import News7 from "./pages/news/News7";

import Lowtahun from "./pages/low/lowtahun";
import Kategori24 from "./pages/low/2024/kategori24";
import Jenjangofl24 from "./pages/low/2024/jenjangofl24";
import Jenjangonl24 from "./pages/low/2024/jenjangonl24";
import HomeRegist from "./pages/registration/homeregist";
import Indonesiaparticipants from "./pages/registration/indonesiaparticipants";
import Internationalparticipants from "./pages/registration/internationalparticipants";


import Kategori25 from "./pages/low/2025/kategori25";
import Jenjangonl25 from "./pages/low/2025/jenjangonl25";
import Jenjangofl25 from "./pages/low/2025/jenjangofl25";

// End News
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/PageTitle" element={<PageTitle />} />
        <Route path="/PageTitleNews" element={<PageTitleNews />} />


        {/* FAQ */}
        <Route path="/faq" element={<Faq />} />
        {/* End FAQ */}

        {/* News */}
        <Route path="/PageNewsList" element={<PageNewsList />} />
        <Route path="/CompListNews" element={<CompListNews />} />
        <Route path="/news1" element={<News1 />} />
        <Route path="/news2" element={<News2 />} />
        <Route path="/news3" element={<News3 />} />
        <Route path="/news4" element={<News4 />} />
        <Route path="/news5" element={<News5 />} />
        <Route path="/news6" element={<News6 />} />
        <Route path="/news7" element={<News7 />} />
        {/* End News */}

        {/* Link Video */}
        <Route path="/V2021" element={<V2021 />} />
        <Route path="/V2022" element={<V2022 />} />
        <Route path="/V2023" element={<V2023 />} />
        <Route path="/V2024" element={<V2024 />} />
        {/* End Link Video */}

        {/* List of Winners start */}
        <Route path="/lowtahun" element={<Lowtahun />} />
        <Route path="/kategori24" element={<Kategori24 />} />
        <Route path="/jenjangonl24" element={<Jenjangonl24 />} />
        <Route path="/jenjangofl24" element={<Jenjangofl24 />} />

        <Route path="/kategori25" element={<Kategori25 />} />
        <Route path="/jenjangonl25" element={<Jenjangonl25 />} />
        <Route path="/jenjangofl25" element={<Jenjangofl25 />} />
        {/* List of Winners End*/}
        

        {/* Link Gallery Foto */}
        <Route path="/G2021" element={<G2021 />} />
        <Route path="/G2022" element={<G2022 />} />
        <Route path="/G2023" element={<G2023 />} />
        {/* End Link Gallery Foto */}

        {/* START REGISTRATION */}
        <Route path="/homeregist" element={<HomeRegist/>} />
        <Route path="/indonesiaregist" element={<Indonesiaparticipants/>} />
        <Route path="/interregist" element={<Internationalparticipants/>} />
        {/* END REGISTRATION */}

        <Route path="/certificate" element={<Certificate />} />
        <Route path="/document_writter" element={<DocumentWritter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
