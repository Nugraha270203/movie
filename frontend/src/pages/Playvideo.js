import "../admin/index.css"
import Navbar from "../component/Navbar";
import foto1 from "../assets/1.jpg"
import Footer from "../component/Footer";
import { faPaperPlane, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Playvideo() {
    return (
        <>
            <div className="bg-dark " >
                <Navbar />
                <div className="container container-fluid mt-5 mb-5">
                    <div className="row" style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}>s
                        <div className="col-md">
                            <div class="card mt-5 bg-dark  border-0" style={{ height: "40rem" }} >
                                <iframe className="rounded-3 h-100" src="https://www.youtube.com/embed/lj8TV9q59P4?si=rhM6am7FjQvC9EDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <div className="card mt-4">
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col-md">
                                                <h3>Judul film</h3>
                                            </div>
                                            <div className="col-md-3">
                                                <a className="btn btn-primary">Download</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p>Judul : </p>
                                        <p>Sutradara : </p>
                                        <p>Genre : </p>
                                        <p>Tahun : </p>
                                        <p>Sinopsis : </p>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5">
                            <div class="card mt-5 bg-dark shadow" >
                                <div className="container ">

                                    <div className="d-flex flex-column mt-3">
                                        <div className="row mt-2 mb-2 ">

                                            <div className="col-md-5">
                                                <div className="card bg-dark border-0">
                                                    <img src={foto1} class="card-img"></img>

                                                </div>
                                            </div>
                                            <div className="col">
                                                <a href="#" className="nav-link">
                                                    <div className="card bg-dark text-white border-0">
                                                        <p className="">Nanti Kita Cerita Tentang Hari Ini (NKCTHI) (2020)</p>
                                                        <span className="fs-6" style={{ color: "#abb2bf" }}>Diupload 20 januari 2024</span>

                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="row mt-2 mb-2 ">
                                            <div className="col-md-5">
                                                <div className="card bg-dark border-0">
                                                    <img src={foto1} class="card-img"></img>

                                                </div>
                                            </div>
                                            <div className="col">
                                                <a href="#" className="nav-link">
                                                    <div className="card bg-dark text-white border-0">
                                                        <p className="">Nanti Kita Cerita Tentang Hari Ini (NKCTHI) (2020)</p>
                                                        <span className="fs-6" style={{ color: "#abb2bf" }}>Diupload 20 januari 2024</span>

                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="row mt-2 mb-2 ">
                                            <div className="col-md-5">
                                                <div className="card bg-dark border-0">
                                                    <img src={foto1} class="card-img"></img>

                                                </div>
                                            </div>
                                            <div className="col">
                                                <a href="#" className="nav-link">
                                                    <div className="card bg-dark text-white border-0">
                                                        <p className="">Nanti Kita Cerita Tentang Hari Ini (NKCTHI) (2020)</p>
                                                        <span className="fs-6" style={{ color: "#abb2bf" }}>Diupload 20 januari 2024</span>

                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="card" style={{ marginTop: "1.2rem" }}>
                                <div className="card-header">
                                    <h3>Komentar</h3>
                                </div>
                                <div className="card-body">
                                <div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-width="1rem" data-numposts="5"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>





                <Footer />
            </div>
        </>
    )
}

export default Playvideo;