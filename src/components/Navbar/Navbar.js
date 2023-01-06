import './Navbar.css';
const Navbar = () => {

    return (
        <nav>
            <a className='title'><h1>OYOLA</h1></a>
            <div className="links">
                <a href="#">Packages</a>
                <a href="#">Gallery</a>
                <a href="#">Login</a>
                <a className='registerButton' href="#">Register</a>
            </div>
        </nav>
    );
}

export default Navbar;