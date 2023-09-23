import React , {useState , useEffect , useRef} from "react";
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function SignupForm(){
    const [userName , setName] = useState('');
    const [email , setEmail]   = useState('');
    const [number , setNumber] = useState('');
    const [passwd , setPasswd] = useState('');
    const [ResErr , setResErr] = useState('');
    let navigate = useNavigate();
    function GetData(){  
      let body = {
         userName,
         email,
         number,
         passwd
      }
      axios.post("http://localhost:5000/register" , body)
       .then((res) => {
          let respo = JSON.parse(JSON.stringify(res.data))
          console.log(respo);
          navigate('/login');
       })
       .catch((err) => {
          let responseError = JSON.parse(JSON.stringify(err.response.data));
          setResErr(responseError);
          console.log(ResErr);
       })
       
    }
    return (
        <>
            <div className="text-center justify-center h-screen mt-[3.5rem] border-2 border-solid border-red-700  sm:h-[25rem] sm:my-0 md:text-green-950 md:my-0">
                 <h1 className="mt-3">Register Form</h1>
                 <div className="flex flex-col border-solid mx-8 border-green-800 mt-4 bg-slate-700">
                    <label className="mb-2" htmlFor="name">Name</label>
                    <input required className="text-center border-2 border-solid border-green-800 mx-14" type="text" placeholder="Enter your Name" value={userName} onChange={(e) => setName(e.target.value)}/> 
                    <label className="my-2" htmlFor="name">Email</label>
                    <input required className="text-center border-2 border-solid border-green-800 mx-14" type="email" placeholder="Enter your Email" required value={email} onChange={(e)=> setEmail(e.target.value)}/> 
                    <label className="my-2" htmlFor="name">Password</label>
                    <input required className="text-center border-2 border-solid border-green-800 mx-14" type="text" placeholder="Enter your password" value={passwd} onChange={(e) => setPasswd(e.target.value)}/> 
                    <label className="my-2" htmlFor="name">Phone number</label>
                    <input required className="text-center border-2 border-solid border-green-800 mx-14" type="number" placeholder="Enter your phone number" value={number} onChange={(e) => setNumber(e.target.value)}/> 
                    <button onClick={GetData} className="mt-4  text-yellow-200 bg-green-950 mx-36 py-2 rounded-lg text-lg sm:mx-52 hover:text-black">Submit</button>
                 </div>
                 {
                     ResErr ? <div className="absolute top-52 left-28 right-28 justify-center bg-slate-300 h-52">
                    <button onClick={() => setResErr(false)} className="float-right"><ClearIcon /></button>
                    <h1>{ResErr.message}</h1>
                 </div> : ""
                 }
            </div>
        </>
    )
}