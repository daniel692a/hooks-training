import { useState } from 'react';
import Welcome from './components/Welcome';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme} from './theme';
import { GlobalStyles } from './global';
import Greet from './components/Greet';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToggleTheme from './components/ToggleTheme';
import StateHook from './pages/StateHook';
import EffectHook from './pages/EffectHook';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => (theme === 'light') ? setTheme('dark') : setTheme('light');
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
  /*return (
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
  );*/
  return (
    <ThemeProvider theme ={theme === 'light' ? lightTheme : darkTheme} >
      <GlobalStyles />
        <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
        <Router>
          <Switch>
            <Route exact path='/home'>
              <Welcome />
            </Route>
            <Route exact path='/use-effect'>
              <EffectHook />
            </Route>
            <Route exact path='/use-state'>
              <StateHook />
            </Route>
          </Switch>
          <Redirect to='/home' />
        </Router>
    </ThemeProvider>
  )
}

export default App;