import React from "react";
import { useNavigate } from "react-router-dom";


function Protected(props){
    const {Components}  = props;
    const navigate = useNavigate();

    React.useEffect(() => {
        let login = localStorage.getItem('access');
        if(!login){
            navigate('/login')
        }
    })

    return (
        <>
            <Components />
        </>
    )
}

export default Protected;