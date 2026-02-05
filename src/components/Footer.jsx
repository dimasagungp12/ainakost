import { Container, Col, Row } from 'react-bootstrap';
import { Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer py-5'>
    <Container>
      <Row className='d-flex justify-content-between'> 
        <Col lg="5">
          <h3 className='fw-bold'>Aina Kost</h3>
          <p className='desc'>Silahkan klik nomer WhatsApp atau Facebook di bawah ini untuk langsung menghubungi admin.</p>
          <div className="no mb-1 mt-4">
  <a
    href="https://wa.me/6282211633891"
    target="_blank"
    rel="noopener noreferrer"
    className="btn d-inline-flex align-items-center gap-2 btn-whatsapp"
  >
    <i className="fa-brands fa-whatsapp"></i>
    <span>WhatsApp</span>
  </a>
</div>

<div className="mail">
  <a
    href="https://www.facebook.com/AinaKost"
    target="_blank"
    rel="noopener noreferrer"
    className="btn d-inline-flex align-items-center gap-2 btn-facebook"
  >
    <i className="fa-brands fa-facebook"></i>
    <span>Facebook</span>
  </a>
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
            <i className='fa-brands fa-facebook'></i>
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