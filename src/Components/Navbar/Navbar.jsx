import React ,{useRef} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import DensityMediumIcon from '@mui/icons-material/DensityMedium';
// import DangerousIcon from '@mui/icons-material/Dangerous';

const Navbar = () =>{
   const [checkLogin , setLogin] = React.useState();
   let getAccess = localStorage.getItem('access');
   let navigation = useNavigate();
   React.useEffect(() => {
      console.log(getAccess);
      if(!getAccess){
        return setLogin(false);
      }
      setLogin(true);
   })
   function Logout(){
      localStorage.clear();
      console.log(localStorage.clear());
      let check = localStorage.getItem("access");
      if(!check){
          navigation('/')
      }
      console.log('localStorage are cleared');
   }
   return (
      <>
        <nav className="flex flex-col items-center justify-start h-16 bg-orange-300 w-full sm:flex sm:flex-row sm:bg-teal-950">
            <div className="logo flex w-full items-center px-10 justify-between sm:flex sm:flex-row sm:justify-evenly">
                <Link to="/"><img className="image w-4 h-5 md:w-6 md:h-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/2560px-R_logo.svg.png"/></Link>
                <h1 className="text-white md:text-3xl sm:text-sm">Ramsmujh</h1>
                {/* <button ref={ButtonStatus} className="sm:hidden" onClick={() => setStatus(true)}><DensityMediumIcon color="white"  /></button> */}
            </div>
               <ul className="flex flex-col items-center justify-between bg-lime-900 w-full origin-top sm:flex sm:flex-row sm: sm:bg-teal-950">
                    <li className="text-white sm:text-base"><Link to="/Product">Product</Link></li>
                    <li className="text-white sm:text-base"><Link to="/auth/Admin">Admin</Link></li>
                    {
                     !checkLogin ? <>
                     <li className="text-white sm:text-base"><Link to="/Register">Register</Link></li>
                     <li className="text-white sm:text-base"><Link to="/Login">Login</Link></li>
                     </> : <li onClick={Logout} className="text-white sm:text-base"><Link to='/'>Logout</Link></li>
                    }                  {/* <button className="text-white sm:hidden" onClick={() => setStatus(false)}><DangerousIcon  /></button> */}
               </ul> 
        </nav>
      </>
   )
}

export default Navbar