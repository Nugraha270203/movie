import bg1 from "../assets/logo2.png"
import { faHome, faFilm, faStar, faEarth, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../assets/font.css"
function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top">
            <div class="container-fluid">

                <a class="navbar-brand text-white ml-2" href="/App">
                    <img src={bg1} style={{ height: "2rem" }}></img>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link text-white " href="#">
                                <FontAwesomeIcon icon={faHome} style={{ marginRight: '0.5rem' }} />Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white " href="#">
                                <FontAwesomeIcon icon={faStar} style={{ marginRight: '0.5rem' }} />popular
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <FontAwesomeIcon icon={faFilm} style={{ marginRight: '0.5rem' }} /> Category
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Comedy</a></li>
                                <li><a class="dropdown-item" href="#">Romance</a></li>
                                {/* <li><hr class="dropdown-divider"></hr></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li> */}
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <FontAwesomeIcon icon={faEarth} style={{ marginRight: '0.5rem' }} /> Country
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Comedy</a></li>
                                <li><a class="dropdown-item" href="#">Romance</a></li>
                                {/* <li><hr class="dropdown-divider"></hr></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li> */}
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <FontAwesomeIcon icon={faCalendar} style={{ marginRight: '0.5rem' }} /> Year
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Comedy</a></li>
                                <li><a class="dropdown-item" href="#">Romance</a></li>
                                {/* <li><hr class="dropdown-divider"></hr></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li> */}
                            </ul>
                        </li>

                    </ul>
                    <form class="d-flex" role="search">
                        <div class="inputBox_container">
                            <svg class="search_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" alt="search icon">
                                <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z">
                                </path>
                            </svg>
                            <input class="inputBox" id="inputBox" type="text" placeholder="Search For Products" />
                        </div>
                        <button class="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav >
    );

}

export default Navbar;