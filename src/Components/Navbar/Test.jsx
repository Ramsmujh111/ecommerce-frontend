import React from "react";
import {useForm} from 'react-hook-form';


function TestLogin(){
    const {
        register ,
        handleSubmit,
        watch , 
        formState : { errors }
    }  = useForm();

    function OnSubmitForm(data){
        console.log(data);
        console.log(watch('name'));
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit(OnSubmitForm)}>
                    <input type="text" defaultValue="UserName" {...register('name' , {required:true , minLength:4})} />
                    {
                        errors.name && <span>This field is required</span>
                    }
                    <input type="text" defaultValue="Email" {...register('email')}/>
                    <input type="submit"/>
                </form>
            </div>
        </>
    )
}

export default TestLogin;