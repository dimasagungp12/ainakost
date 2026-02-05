import { Container, Row, Col } from 'react-bootstrap';
import HeroImage from '../assets/img/ainakost.png';

import {kelasTerbaru, testimonial} from "../data/index";
import { useNavigate } from "react-router-dom";
import Faq from '../components/Faq';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const HomePage = () => {
  let navigate = useNavigate(); 

  return (
    <div className="home">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className='header-box d-flex align-items-center pt-lg-5'>
            <Col lg="6">
              <h1 className='mb-4 animate__animated animate__fadeInUp animate__delay-1s'>
               Penginapan Aina <br /> <span> Kost Khusus </span> <br /> Putri, Terbaik!
              </h1>
              <p className='mb-4 animate__animated animate__fadeInUp animate__delay-1s'>Selamat datang di Aina Kost, Kost nyaman dan terjangkau untuk hunian sejati. Temukan kenyamanan di sini!</p>
              <button className='btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s' onClick={() => navigate("/Room")}>Lihat Kamar</button>
              <a
  href="https://www.google.com/maps/place/PWMC%2BF22+Aina+Kost,+Jl.+Asoka+1,+Marga+Rahayu,+Kec.+Lubuk+Linggau+Sel.+II,+Kota+Lubuklinggau,+Sumatera+Selatan+31625/data=!4m2!3m1!1s0x2e30e7d5d72519fd:0x33bd0306f48e653"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="btn btn-danger btn-lg rounded-1 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s">
    Lihat Lokasi
  </button>
</a>
            </Col>
            <Col lg="6" className='pt-lg-0 pt-5'>
              <img src={HeroImage} alt='hero-img' className='animate__animated animate__fadeInUp'/>
            </Col>
          </Row>
        </Container>
      </header>
      <div className="room w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className='text-center fw-bold'>Room Kost</h1>
              <p className='text-center'>Ruangan-ruangan kami didesain dengan perhatian khusus untuk memberikan pengalaman tinggal yang menyenangkan dan praktis. Setiap ruangan dilengkapi dengan fasilitas modern yang akan memastikan Anda merasa seperti di rumah sendiri.</p>
            </Col>
          </Row>
          <Row>
          {kelasTerbaru.map((kelas) => {
          return<Col key={kelas.id} className="shadow rounded" data-aos="fade-up" data-aos-duration='1000' data-aos-delay={kelas.delay}>
            <img src={kelas.image} alt='unsplash.com' className='w-100 mb-5 rounded-top' />
            <div className='star mb-2 px-3'>
              <i className={kelas.star1}></i>
              <i className={kelas.star2}></i>
              <i className={kelas.star3}></i>
              <i className={kelas.star4}></i>
              <i className={kelas.star5}></i>
            </div>
            <h5 className='mb-5 px-3'>{kelas.title}</h5>
          </Col>;
          })}
          </Row>
          <Row>
            <Col className='text-center'>
              <button className='btn btn-success rounded-5 btn-lg' data-aos="fade-up" data-aos-duration="1000" onClick={() => navigate("/room")}>
              Lihat Semua Ruangan<i className='fa-solid fa-chevron-right ms-1'></i></button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='testimonial py-5'>
        <Container>
          <Row>
            <Col>
              <h1 className='text-center fw-bold my-5'>Testimonial</h1>
            </Col>
          </Row>
          <Row>
          <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
      {testimonial.map((data) => {
        return <SwiperSlide key={data.id} className="shadow-sm">
        <p className='desc'>{data.desc}</p>
        <div className='people'>
          <img src={data.image} alt='' />
          <div>
            <h5 className='mb-1'>{data.name}</h5>
            <p className='m-0 fw-bold'>{data.skill}</p>
          </div>
        </div>
        </SwiperSlide> 
      })}
      </Swiper>
          </Row>
        </Container>
      </div>

      {/* Section Faq */}
      <Faq />
      {/* Section Faq */}
    </div>
  )
}

export default HomePage