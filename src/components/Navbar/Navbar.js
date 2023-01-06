import './Navbar.css';
const Navbar = () => {
    return (
        <nav>
            <h1>OYOLA</h1>
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