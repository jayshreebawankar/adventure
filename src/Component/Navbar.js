import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar =()=>{
    return(
        <>
         <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/start/home'><button className='menu-btn'>HOME</button></Link> 
                <Link to='/start/about'> <button className='menu-btn'>ABOUT</button></Link>
                <Link to='/start/services'> <button className='menu-btn'>SERVICE</button></Link>
                <Link to='/start/gallery'> <button className="menu-btn">GALLERY</button></Link>
                <Link to='/start/faq'> <button className="menu-btn">FAQ</button></Link>
                <Link to='/start/contactus'> <button className="menu-btn">CONTACT</button></Link>
            </nav>
        </div>
        </>
    )
}
export default Navbar;
    