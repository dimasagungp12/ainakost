import { Container, Col, Row } from 'react-bootstrap';
import { semuaKelas } from '../data/index';

import Faq from '../components/Faq';

const Room = () => {
  return ( 
    <div className='room-page'>
  <div className='room min-vh-100'>
      <Container>
        <Row>
          <Col>
            <h1 className='fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s'>Semua Ruangan</h1>
            <p className='text-center animate__animated animate__fadeInUp animate__delay-1s'>Ruangan-ruangan kami didesain dengan perhatian khusus untuk memberikan pengalaman tinggal yang menyenangkan dan praktis. Setiap ruangan dilengkapi dengan fasilitas modern yang akan memastikan Anda merasa seperti di rumah sendiri.</p>
          </Col>
        </Row>
        <Row>
        {semuaKelas.map((kelas) => {
          return<Col key={kelas.id} className="shadow rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={kelas.delay}>
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
      </Container>
    </div>

    <Faq />
    </div>
  );
};

export default Room