import './NewUser.css'
import { Link } from 'react-router-dom'
import userPageImage from '.././assets/images/regBanner.png'
import { useState } from 'react'

const regStyle = {
    width: "100vw",
    height: "100vh",
    background: `url(${userPageImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    float: "right"
}

const NewUser =()=>{
    const [name, setName] = useState('')
    const [user, setUser] = useState({user:false})

    const submitHandler =()=> {
        if(user == true){
            setUser('user has been registered')
        }else{
            alert('Invalid Credential')
        }
    }
    const nameHandler =()=>{
       
    }
    return(
        <>
        <header style={regStyle}>
        <div  className='regDiv'>
        
            <h2>Join us</h2>
                <h5>Create your personal account</h5>
            <form onSubmit={submitHandler}>
                <input type='text' name='name' value={name} id={nameHandler}></input>
                <span>{name}</span>
                <Link to='/start'><button className='btn-grad' type='submit' value={user}>Registered</button></Link>
            </form>
            {/* <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer> */}
            
        </div>
        </header>
        </>
    )
}
export default NewUser;