import bg1 from "../assets/logo2.png"
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
        <>
            <div class="card bg-dark shadow text-center">

                <a class="navbar-brand text-white ml-2 mt-4" href="/Login">
                    <img src={bg1} style={{ height: "2rem" }}></img>
                </a>
                <div class="card-body text-white">
                    <h5 class="card-title">Enjoy watching!</h5>
                    <p class="card-text">Get the latest information about the latest films, reviews and film news on our social media.</p>
                    <div className="container mb-3">
                        <div className="d-flex justify-content-center" >
                            <a className="nav-link" href="#" style={{ marginRight: '0.5rem' }}><FontAwesomeIcon icon={faInstagram} style={{ marginRight: '0.5rem' }} /> Instagram</a>
                            <a className="nav-link" href="#" style={{ marginRight: '0.5rem' }}><FontAwesomeIcon icon={faFacebook} style={{ marginRight: '0.5rem' }} /> Facebook</a>
                            <a className="nav-link" href="#" style={{ marginRight: '0.5rem' }}><FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '0.5rem' }} /> Linkedin</a>
                        </div>
                    </div>
                   
                </div>
                <div class="card-footer text-white">
                    <p>&copy; 2024 Nama Perusahaan. Hak Cipta Dilindungi. | <a href="/kebijakan-privasi">Kebijakan Privasi</a> | <a href="/syarat-dan-ketentuan">Syarat dan Ketentuan</a></p>
            </div>
        </div >
        </>
    )
}
export default Footer;