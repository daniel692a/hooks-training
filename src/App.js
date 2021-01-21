import logo from './logo.svg';
import './App.css';
//import HelloWorld, {Bye} from './components/HelloWorld';
import Welcome from './components/Welcome';
import Greet from './components/Greet';
//Para traer un componente que no está exportado de forma default, lo ponemos entre llaves
function App() {
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

  const greetingUser = (name) => {
    alert(`Hello ${name}`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
        <img src={logo} className="App-logo" alt="logo" />
        <Greet userInfo = {user} greetUser={greetingUser}/>
        <Greet userInfo = {user2} greetUser={greetingUser}/>
      </header>
    </div>
  );
}

export default App;