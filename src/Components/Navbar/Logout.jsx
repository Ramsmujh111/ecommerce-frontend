import React , {useEffect} from "react";
import { useNavigate } from "react-router-dom";

function Logout(){
    let navigation = useNavigate();
    useEffect(() => {
        localStorage.clear();
        console.log(localStorage.clear());
        let check = localStorage.getItem("access");
        if(!check){
            navigation('/')
        }
        console.log('localStorage are cleared');
    })
    return(
        <>
        </>
    )
}

export default Logout;