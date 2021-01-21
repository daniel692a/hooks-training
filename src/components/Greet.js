import styled from 'styled-components';

const ButtonGreet = styled.button`
    border-radius: 10px;
    color: #fff;
    width: 10vw;
    height: 8vh;
    border: none;
    font-size: 1em;
    cursor: pointer;
    font-weight: bold;
`;

const Greet = ({userInfo, greetUser}) => {
    const {name, color, age} = userInfo;
    return (
        <div>
            <h3 style={{color: `${color}`}}>Hello {name}, you are {age} years old</h3>
            <ButtonGreet onClick={() => greetUser(name)} style={{background: `${color}`}}>Greet</ButtonGreet>
        </div>
    )
};

export default Greet;