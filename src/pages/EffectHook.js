import { useState, useEffect } from 'react';

const EffectHook = () => {
    const [count, setCount] = useState(0);
    //Nos sirve para cuando el Componente ya está montado
    useEffect(() => {
        console.log(`Total: ${count}`);
    }, [count]);
    const countClicks = () => setCount(count + 1);
    //Nos funciona más pasra representar datos sin necesidad de recargar la página
    return (
        <div>
            <h2>Has hecho click { count }</h2>
            <button onClick = { countClicks }>Clicks</button>
        </div>
    )
}
export default EffectHook;