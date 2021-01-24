import desktop from '../assets/escritorio.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const WelcomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Desktop = styled.img`
    width: 20vw;
    height: 20vh;
    float: center;
`;

const ButtonStart = styled.button`
    width: 8vw;
    height: 6vh;
    font-size: 1.2em;
    border-radius: 10px;
    background: #47C2BF;
    outline: none;
    border: none;
    margin-top: 1vh;
    transition: 1s;
    font-weight: 600;

    &&:hover{
        background: #40A29F;
    }
`;

const Welcome = () => {
    return (
        <WelcomeContainer>
            <h1>Welcome to my website made with <code>React.js</code></h1>
            <Desktop src={ desktop }/>
            <Link to='/use-state'>
                <ButtonStart>Start</ButtonStart>
            </Link>
        </WelcomeContainer>
    )
}
export default Welcome;
