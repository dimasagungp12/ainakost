import { Container, Row, Col } from "react-bootstrap"
import Faq from "../components/Faq"

const Syarat = () => {
  return (
   <div className="syarat-ketentuan-page">
      <div className="syarat-ketentuan min-vh-100">
      <Container>
        <Row>
          <Col>
            <h1 className="fw-bold text-center mb-2 animate__animated animate__fadeInUp animate__delay-1s">Syarat & Ketentuan</h1>
            <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">Selamat datang di Website Aina Kost. Agar semua penghuni dapat merasa nyaman dan aman, kami telah menyusun peraturan berikut. Mohon membaca dengan seksama dan patuhi selama Anda tinggal di sini.</p>
          </Col>
        </Row>
        <Row className="py-3">
          <Col>
            <h4 className="fw-bold">1. Keamanan & Ketertiban</h4>
            <p>Kami menghargai keamanan dan ketertiban dalam lingkungan kost. Dilarang keras melakukan tindakan yang mengganggu ketenangan penghuni lainnya. Dilarang menggunakan obat-obatan terlarang atau onsumsi alkohol dan berbicara dengan suara yang wajar di area bersama.</p>
          </Col>
        </Row>
        <Row className="py-3">
          <Col>
            <h4 className="fw-bold">2. Kebersihan</h4>
            <p>Setiap penghuni diharapkan menjaga kebersihan kamar dan area bersama. Mohon membuang sampah ke tempat yang telah disediakan dan menghindari meninggalkan barang pribadi di area bersama yang dapat mengganggu orang lain.</p>
            <p>Setiap penghuni diharapkan menjaga kebersihan kamar, WC, tempat cuci piring, dan tempat memasak mereka secara rutin. Mohon membersihkan dan merawat kamar, WC, tempat cuci piring, dan tempat memasak Anda agar tetap bersih dan nyaman untuk digunakan oleh Anda dan penghuni lainnya. Harap membuang sampah dengan benar, membersihkan peralatan masak setelah digunakan, dan menjaga agar area umum tetap bersih dan higienis. Dengan demikian, kita dapat menjaga lingkungan yang bersih dan nyaman untuk semua penghuni.</p>
          </Col>
        </Row>
        <Row className="py-3"> 
          <Col>
            <h4 className="fw-bold">3. Jam Malam</h4>
            <p>Tentukan waktu tidur dengan bijak. Kami memiliki jam malam yang harus diikuti demi kenyamanan semua penghuni. Mohon menjaga kebisingan minimal selama jam malam agar semua orang bisa beristirahat dengan baik.</p>
            <p>Jam malam berlaku hingga pukul 22.00 WIB untuk anak-anak penghuni dan tamu yang datang. Kami mengharapkan semua penghuni dan tamu untuk menghormati jam malam ini dengan menjaga kebisingan minimal setelah jam tersebut. Hal ini bertujuan untuk memberikan ketenangan dan kenyamanan bagi semua penghuni selama waktu istirahat.</p>
          </Col>
        </Row>
        <Row className="py-3"> 
          <Col>
            <h4 className="fw-bold">4. Pembayaran Sewa</h4>
            <p>Pembayaran sewa harus dilakukan sesuai dengan perjanjian yang telah disepakati. Jika ada keterlambatan pembayaran, hubungi Ibu Kost secepatnya untuk menyelesaikan masalah tersebut.</p>
          </Col>
        </Row>
        <Row className="py-3"> 
          <Col>
            <h4 className="fw-bold">5. Pelanggaran Peraturan</h4>
            <p>Pelanggaran terhadap peraturan ini dapat mengakibatkan peringatan atau tindakan lebih lanjut sesuai dengan kebijakan kami. Kami berharap semua penghuni mematuhi peraturan ini demi kenyamanan bersama.</p>
<p>Terima kasih atas pengertian dan kerjasama Anda. Kami berharap Anda memiliki pengalaman yang menyenangkan selama tinggal di Aina Kost. Jika Anda memiliki pertanyaan atau perlu klarifikasi mengenai peraturan ini, silakan hubungi Ibu kost.</p>
          </Col>
        </Row>
      </Container>
     </div>
<Faq />
</div>
  );
};

export default Syarat