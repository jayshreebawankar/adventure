// import Router from './Component/Router.js'
import '.././node_modules/bootstrap/dist/css/bootstrap.min.css';
import WelcomePage from './Component/WelcomePage';
import NewUser from './Component/NewUser';
import Login from './Component/Login';
import Router from './Component/Router.js'
import Nomatch from './Component/Nomatch';
import { Routes, Route} from "react-router-dom";

const App =()=>{
  return(
    <div>
      <Routes>
        <Route index element={<WelcomePage/>}></Route>
        <Route path='/newuser' element={<NewUser/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/start/*' element={<Router/>}></Route>
        <Route path ='*' element={<Nomatch/>}></Route>
      </Routes>
    </div>
  )
}
export default App;


// D:\Jayshree_Bawankar(MERN)\ReactJS\D`Soft-Computer-Trainaing-Centre\dsoft\node_modules\bootstrap\dist\css\bootstrap.min.css