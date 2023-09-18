import React , {useState , useEffect , useRef} from "react";


export default function SignupForm(){
    const [userName , setName] = useState('');
    const [email , setEmail]   = useState('');
    const [number , setNumber] = useState(0);
    const [passwd , setPasswd] = useState('');

    function GetData(){
       console.log('Welcome To get Data here');
    }
    return (
        <>
            <div className="text-center justify-center mt-[3.5rem] border-2 border-solid border-red-700  sm:h-[25rem] sm:my-0 md:text-green-950 md:my-0">
                 <h1 className="mt-3">Register Form</h1>
                 <div className="flex flex-col border-solid mx-8 border-green-800 mt-4 bg-slate-700">
                    <label className="mb-2" htmlFor="name">Name</label>
                    <input className="text-center border-2 border-solid border-green-800 mx-14" type="text" placeholder="Enter your Name" value={userName} onChange={(e) => setName(e.target.value)}/> 
                    <label className="my-2" htmlFor="name">Email</label>
                    <input className="text-center border-2 border-solid border-green-800 mx-14" type="email" placeholder="Enter your Email" required value={email} onChange={(e)=> setEmail(e.target.value)}/> 
                    <label className="my-2" htmlFor="name">Password</label>
                    <input className="text-center border-2 border-solid border-green-800 mx-14" type="text" placeholder="Enter your password" value={passwd} onChange={(e) => setPasswd(e.target.value)}/> 
                    <label className="my-2" htmlFor="name">Phone number</label>
                    <input className="text-center border-2 border-solid border-green-800 mx-14" type="number" placeholder="Enter your phone number" value={number} onChange={(e) => setPasswd(e.target.number)}/> 
                    <button onClick={GetData} className="my-2 bg-green-950 mx-56 py-2 rounded-lg">Submit</button>
                 </div>
            </div>
        </>
    )
}