import './Welcome.css'
import BackgroundImage from '.././assets/images/done.jpg'
import {Link} from 'react-router-dom'

const Header = {
    width: "100wh",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
    // float:'l'
}

const WelcomePage =()=>{
    return( 
    <>
    <header style={ Header }>
    <div className='container'><br/>
        <h1 className="main-title text-center" id='frontHeading'>“The world is a book and those who do not travel read only one page.”</h1>
        <p className="main-para text-center">- site is in development mode "Jayshree_Bawankar"</p>
        <div className="buttons text-center">
            <Link to="/login">
                <button className="primary-button">log in</button>
            </Link>
            <Link to="/newuser">
                <button className="primary-button" id="reg_btn"><span>register </span></button>
            </Link>
        </div>
    </div></header>
    </>
    )
}
export default WelcomePage;

