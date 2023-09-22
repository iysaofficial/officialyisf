import NewsList from "./NewsList"
import gambar1 from "../Images/News/PenelitiSMAMuhammadiyah.WebP"
import gambar2 from "../Images/News/GuruMuda.WebP"
import gambar3 from "../Images/News/UDINUSSemarangTuanRumah.WebP"
import gambar4 from "../Images/News/FTUB.WebP"

export default function News() {
    return (
        <>
            <section class="section testimonial" id="testimonial">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="testimonial-slider owl-carousel owl-theme">
                                
                                <NewsList 
                                    img = {gambar1}
                                    title = "Muhiba High School Yogyakarta Students Win Silver Medals at YISF International Event 2023"
                                    desc = "The research team in the field of research and writing of teenagers of SMA Muhammadiyah Bantul (Muhiba)"
                                    time = "Event 2023"
                                    link = "/news1"
                                />
                                <NewsList 
                                    img = {gambar2}
                                    title = "Young Teachers from Corners of Central Kalimantan Achieve Achievements at YISF Bali"
                                    desc = "a young teacher at SMPS 11 Best Agro Pulang Pisau (Pulpis)"
                                    time = "Event 2022"
                                    link = "/news2"
                                />
                                <NewsList 
                                    img = {gambar3}
                                    title = "Udinus Invited to Host YNSF and YISF, Young Inventors from Various Countries"
                                    desc = "Udinus Semarang was asked to host the Youth National Science Fair (YNSF) and Youth International Science Fair (YISF)."
                                    time = "Event 2022"
                                    link = "/news3"
                                />
                                <NewsList 
                                    img = {gambar4}
                                    title ="FTUB Raih Triple Gold Medals di Young Invention Scientific Fair 2021"
                                    desc = "SECRETARY UB Electrical Engineering Department, Rosa, explained, the first team was led by Ihza Aulia Rahman (TE'18)."
                                    time = "Event 2021"
                                    link = "/news4"
                                />
                                <NewsList 
                                    img = {gambar1}
                                    title = "Muhiba High School Yogyakarta Students Win Silver Medals at YISF International Event 2023"
                                    desc = "The research team in the field of research and writing of teenagers of SMA Muhammadiyah Bantul (Muhiba)"
                                    time = "Event 2023"
                                    link = "/news1"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}