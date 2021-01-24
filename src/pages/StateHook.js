import React, { useState } from 'react';
import Counter from '../components/Counter';
import styled from 'styled-components';
import { Form } from '../components/Form';
const OnOff = styled.button`
    border-radius: 10px;
    width: 10vw;
    height: 8vh;
    font-size: 2em;
    font-weight: bold;
`;
const StateHook = () => {
    const [stateCar, setStateCar] = useState(false);
    //Puedo tener el valor anterior con prev Value
    const onOffCar = () => setStateCar(prevValue => !prevValue);
    return (
        <div>
            <Form />
            <Counter />
            <h2>El coche esta: {stateCar ? 'Encendido' : 'Apagado'}</h2>
            <OnOff onClick={onOffCar}>On / Off</OnOff>
        </div>
    )
}

export default StateHook;
