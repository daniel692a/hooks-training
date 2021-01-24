import { useState } from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Form = () => {
    const [ stateButton, setStateButton ] = useState(true);
    const enableButton = () =>{
        let valueInput = document.getElementById('email').value;
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        (re.test(valueInput)) ? setStateButton(false) : setStateButton(true);
    }
    const addUser = () => toast.dark(`Registered email: ${ document.getElementById('email').value }`);
    return (
        <div>
            <input type='text' placeholder='email' id='email' onChange={ enableButton }/>
            <button disabled={ stateButton } onClick= { addUser }>Continue</button>
            <ToastContainer position='top-center' autoClose='3000' transition={Slide}/>
        </div>
    )
}
