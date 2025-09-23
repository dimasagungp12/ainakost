import { Container, Col, Row } from 'react-bootstrap';
import { Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer py-5'>
    <Container>
      <Row className='d-flex justify-content-between'> 
        <Col lg="5">
          <h3 className='fw-bold'>Aina Kost</h3>
          <p className='desc'>Penginapan impian Anda. Kenyamanan dan pengalaman tak terlupakan. Temukan kost Anda bersama kami. Selamat datang di Aina Kost.</p>
          <div className='no mb-1 mt-4'>
            <Link className='text-decoration-none'>
              <i className='fa-brands fa-whatsapp'></i>
              <p className='m-0'>+62 822-1163-3891</p>
            </Link>
          </div>
          <div className='mail'>
            <Link className='text-decoration-none'>
              <i className='fa-regular fa-envelope'></i>
              <p className='m-0'>ainaakost@gmail.com</p>
            </Link>
          </div>
        </Col>
        <Col className='d-flex flex-column col-lg-2 col mt-lg-0 mt-5'>
          <h5 className='fw-bold'>Menu</h5>
          <Link to="">Home</Link>
          <Link to="Room">Room</Link>
          <Link to="Testimoni">Testimonial</Link>
          <Link to="Faq">FAQ</Link>
          <Link to="Syarat">Syarat & Ketentuan</Link>
        </Col>
        <Col lg="4" className='mt-lg-0 mt-5'>
          <h5 className='fw-bold mb-3'>Cari promo menarik </h5>
          <div className='cari'>
            <input type="text" placeholder='Promo...' />
            <button className='btn btn-danger rounded-end rounded-0'>Cari</button>
          </div>
          <div className='social mt-3'>
            <i className='fa-brands fa-tiktok'></i>
            <i className='fa-brands fa-whatsapp'></i>
            <i className='fa-brands fa-instagram'></i>
            <i className='fa-brands fa-youtube'></i>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className='text-center px-md-0 px-3'>&copy; Copyright {new Date().getFullYear()} <span className='fw-bold'>Aina Kost,</span> All Right Reserved</p>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Footer