import { Link, useParams } from "react-router-dom";

const Dynamic =()=> {
    const {userId} = useParams()
    console.log(userId);
    return(
        <>
            <h2> User Data : {userId}</h2>

            <Link to='/about'><button className="btn-grad">Back</button></Link>
        </>
    )
}   
export default Dynamic;