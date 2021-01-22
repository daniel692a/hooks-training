import { useState } from 'react';
import './App.css';
//import HelloWorld, {Bye} from './components/HelloWorld';
import Welcome from './components/Welcome';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme} from './theme';
import { GlobalStyles } from './global';
import Greet from './components/Greet';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToggleTheme from './components/ToggleTheme';
//import { ReactComponent as Desktop} from './assets/escritorio.svg';
//Para traer un componente que no está exportado de forma default, lo ponemos entre llaves
function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => (theme === 'light') ? setTheme('dark') : setTheme('light');
  //const userName = 'Daniel Armas';
  //const age = 19;
  const user = {
    name : 'Daniel Armas',
    age : 18,
    color: '#33FF2E'
  };
  const user2 = {
    name : 'Sandra Armas',
    age: 21,
    color: '#E92EFF'
  };
  const user3 = {
    name: 'Samuel Armas',
    color: '#BB712D'
  }

  const greetingUser = (name) => {
    toast.dark(`Hello ${name}`);
  }
//<ToggleTheme theme={theme} toggleTheme={toggleTheme}>Toggle theme</ToggleTheme>
  return (
    <ThemeProvider theme ={theme === 'light' ? lightTheme : darkTheme} >
      <GlobalStyles />
      <div className="App">
        <header className="App-header">
          <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
          <Welcome />
          <Greet userInfo = {user} greetUser={greetingUser}/>
          <Greet userInfo = {user2} greetUser={greetingUser}/>
          <Greet userInfo = {user3} greetUser={greetingUser} />
          <ToastContainer position='top-center' autoClose='3000' transition={Slide}/>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;