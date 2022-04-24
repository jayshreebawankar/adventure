import Home from '../WebPages/Home'
import About from '../WebPages/AboutUs.js'
import ShowData from '../Dynamic/ShowData.js'
import Services from '../WebPages/Services.js'
import Gallery from '../WebPages/Gallery'
import FAQ from '../WebPages/FAQ'
import ContactUs from '../WebPages/ContactUs'
import Navbar from './Navbar.js'
import {Route, Routes} from 'react-router-dom'
import homeImg from '../assets/images/sun.jpg'

const HomeStyle = {
  width: "100%",
  height: "100vh",
  background: `url(${homeImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  float: "left"
}
//------------------------------------------------------
const team = [
  {
    id:'01',
    fullName:'Jayshree Bawankar', 
    profile:'Software Developer', 
    company:'Logical Loop', 
    location:'Surat'
  },
  {
    id:'02', 
    fullName:'Saurabh Jagthap', 
    profile:'Softwarae Developer', 
    company:'All Indian IT Services', 
    ocation:'Nagpur'
  },
  {
    id:'03', 
    fullName:'Roshan Tambe', 
    profile:'Software Developer', 
    company:'Fable Fintech',
    location:'Nagpur'
  },
  {
    id:'04', 
    fullName:'Pratik Gharage', 
    profile:'Software Developer', 
    company:'Techinfini Solution',
    location:'Indore'
  },
  {
    id:'05', 
    fullName:'Rohan Kurian', 
    profile:'Software Developer', 
    company:'Fable Fintech',
    location:'Nagpur'
  }
]

const Router =()=> {
    return(
        <>
          {/* <header style={HomeStyle}> */}
          <Navbar/>
          <Routes>
            <Route index element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about/:dynamic' element={<About data={team}/>}></Route>
            <Route path='/services' element={<Services/>}></Route>
            <Route path='/gallery' element={<Gallery/>}></Route>
            <Route path='/faq' element={<FAQ/>}></Route>
            <Route path='/contactus' element={<ContactUs/>}></Route>
          </Routes>
          {/* </header> */}
        </>
    )
}
export default Router;