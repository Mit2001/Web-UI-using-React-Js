import './Info.css';

function Info() {
    return (
        <div >
            <nav class="navbar navbar-expand-lg navbar-light ">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse' id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <h3>Desgy Solutions</h3>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link a1" href="#Latest works">Latest works</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link a1" href="#View all">View all</a>
                        </li>
                        <li className="nav-item class">
                            <a className="nav-link a1" href="#About us">About us</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link a1" href="#Services">Services </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link a1" href="#FAQ">FAQ </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link a1" href="#Blog">Blog</a>
                        </li>
                        <li className='nav-item button'><button>Contact us</button>
                        </li>

                    </ul>
                </div>
            </nav>
        </div >
    );
}
export default Info;