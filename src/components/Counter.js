import React, { useState } from 'react';
import styled from 'styled-components';
const AddValue = styled.button`
    border-radius: 10px;
    width: 10vw;
    height: 8vh;
    font-size: 2em;
    font-weight: bold;
`;

const Counter = () => {
    const [stateValue, setStateValue] = useState(0);
    const addValue = () => setStateValue(prevValue => prevValue + 1 );
    return (
        <div>
            <h1>Has presionado {stateValue} veces el botón</h1>
            <AddValue onClick={addValue}>Add</AddValue>
        </div>
    )
}

export default Counter;