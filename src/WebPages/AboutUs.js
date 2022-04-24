import {Link, Outlet} from 'react-router-dom'

const AboutUs =(props)=>{
    console.log(props);
    return(
        <>
        {/* <h3>A bosom friend afar brings distant land near</h3> */}
        {/* <h1>{buddy}</h1> */}
        <ul>
            {props.data.map((buddy) =>{
                <li key={buddy.id}>
                    <Link to={buddy.id}>{buddy.fullName}</Link>
                </li>
            })}
        </ul>
        <Outlet/>
        </>
    )
}
export default AboutUs;


/////////////////////////
{/* <ul>
    {users.map((user) => (
        <li key={user.id}>
        <Link to={user.id}>
            {user.fullName}
        </Link>
        </li>
    ))}
</ul> */}