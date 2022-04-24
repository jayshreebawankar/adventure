// import './Login.scss'
import './Login.css'
import userPageImage from '.././assets/images/regBanner.png'

const loginStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${userPageImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    float: "right"
}

const Login =()=>{
    return(
        <>
        <header style={loginStyle}>
        <div  className='loginDiv'>
            <br/>
            <h2><b>Login</b></h2>
                <h6>Be ready for the Sense of "Adventure" </h6><br/>
                <form action="/home">
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="/home" rel="noopener noreferrer">terms of service</a></span>
                </p>
                <p>
                    <button className='login-btn' id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            {/* <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer> */}  
        </div>
        </header>
        </>
    )
}
export default Login;