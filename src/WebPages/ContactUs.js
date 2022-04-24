import {Link} from 'react-router-dom' 

const ContactUs =()=>{
    return(
        <>
           <div className="text-center">
                <h1 className="main-title home-page-title">Welcome to my webPage...<br/>Pleae drop your comment here to upswing me...</h1>
                <label className='comment'>Comment : </label>
                <input type='text' ></input>
                <Link to="/">
                    <button className="primary-button">Log out</button>
                </Link>
            </div>
        </>
    )
}
export default ContactUs;