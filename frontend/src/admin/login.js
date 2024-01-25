import "../admin/index.css"
import bg1 from "../assets/logo2.png"

function Login() {
    return (
        <>
            <div className="bg">
                <div className="container">
                    <div className="d-flex justify-content-center" style={{ height: "100vh" }}>
                        <div class="card shadow my-auto bg-dark" style={{ width: "25rem" }}>
                            <div class="card-body text-white shadow">
                                <div className="container d-flex justify-content-center">
                                    <a class="navbar-brand text-white ml-2 mt-4" href="/Login">
                                        <img src={bg1} style={{ height: "2rem" }}></img>
                                    </a>

                                </div>
                                <div class="inputbox mx-auto mt-5 ">
                                    <input required="required" type="text" />
                                    <span>Username</span>
                                    <i></i>
                                </div>
                                <div class="inputbox mx-auto mt-4 ">
                                    <input required="required" type="text" />
                                    <span>Password</span>
                                    <i></i>
                                </div>

                                <div className="container mt-3 d-flex justify-content-center">
                                    <button class="button fw-bold"> Login</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;