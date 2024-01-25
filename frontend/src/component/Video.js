import foto1 from "../assets/1.jpg"

function Video() {
    return (
        <div className="container text-white">
            <div className="card mb-4">
                <h4 className="fw-bold" style={{paddingLeft:"1rem", paddingTop:"0.7rem"}}>Latest</h4>
            </div>

            <div className="row">
                <div className="col-md-3 mb-3">
                    <div class="card">
                        <a href="/Playvideo">
                            <img src={foto1} class="card-img"></img>
                            <div class="card-img-overlay">
                                <div className=" text-center ">
                                    <br></br>
                                    <br></br>
                                    <h4 class="card-title text-white fw-bold">GTA V 1.20v</h4>
                                </div>
                            </div>
                        </a>

                    </div>
                </div>

                <div className="col-md-3 mb-3">
                    <div class="card">
                        <img src={foto1} class="card-img"></img>
                        <div class="card-img-overlay">
                            <div className=" text-center ">
                                <br></br>
                                <br></br>
                                <h4 class="card-title text-white fw-bold">GTA V 1.20v</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div class="card">
                        <img src={foto1} class="card-img"></img>
                        <div class="card-img-overlay">
                            <div className=" text-center ">
                                <br></br>
                                <br></br>
                                <h4 class="card-title text-white fw-bold">GTA V 1.20v</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div class="card">
                        <img src={foto1} class="card-img"></img>
                        <div class="card-img-overlay">
                            <div className=" text-center ">
                                <br></br>
                                <br></br>
                                <h4 class="card-title text-white fw-bold">GTA V 1.20v</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
export default Video;