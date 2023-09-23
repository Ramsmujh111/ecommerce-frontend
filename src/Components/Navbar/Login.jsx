import React, { useEffect } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Login(){
    const [ResErr , setResErr] = React.useState('');
    let navigation = useNavigate();
    const {register , handleSubmit , 
        formState : { errors }
    } = useForm();

    function FormLogin(data){
      axios.post("http://localhost:5000/login" , data)
       .then((response) => {
            console.log("response here");
            console.log(response);
            let token = response.data.accessToken;
            localStorage.setItem("access" , token)
            navigation('/auth/admin')
       })
       .catch((err) => {
         console.log('error here');
         setResErr(err.response.data)
       })
    }
    useEffect(() => {
        
    })
    return (
        <>
             <div className="text-center justify-center h-screen mt-[3.5rem] border-2 border-solid border-red-700  sm:h-[25rem] sm:my-0 md:text-green-950 md:my-0">
                 <h1 className="mt-3">Login Form</h1>
                 <form onSubmit={handleSubmit(FormLogin)} className="flex flex-col border-solid mx-8 border-green-800 mt-4 bg-slate-700">
                    <label className="my-2" htmlFor="name">Email</label>
                    <input className="text-center border-2 border-solid border-green-800 mx-14" type="email" placeholder="Enter your Email" {...register('email' ,{ required:true , minLength:8 , pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"} )}/> 
                    {
                        errors.email && <span className="text-red-700">This field is required</span>
                    }
                    <label className="my-2" htmlFor="name">Password</label>
                    <input className="text-center border-2 border-solid border-green-800 mx-14" type="password" placeholder="Enter your password" {...register("passwd" , {required:true , minLength:5 , pattern:"(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"})}/> 
                    {
                        errors.passwd && <span className="text-red-800">This Field is required</span>
                    }
                    <button type="submit" className="mt-4  text-yellow-200 bg-green-950 mx-36 py-2 rounded-lg text-lg sm:mx-52 hover:text-black">Submit</button>
                 </form>
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

export default Login;