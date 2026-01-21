import Header from "../../components/Header";
import About from "../../components/About";
import Footer from "../../components/Footer";

// import "../../assets/css/main.css";
// import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
// import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css";
// import "../../assets/vendor/aos/aos.css";
// import "../../assets/vendor/glightbox/css/glightbox.min.css";
// import "../../assets/vendor/swiper/swiper-bundle.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Home() {
  return (
    
    <body>
      <Header/>
      <About/>
      <Footer/>
      <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

     {/* <div id="preloader"></div> */}
    </body>
  );
}



export default Home;
