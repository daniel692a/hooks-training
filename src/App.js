import logo from './logo.svg';
import './App.css';
//import HelloWorld, {Bye} from './components/HelloWorld';
import Welcome from './components/Welcome';
import Greet from './components/Greet';
//Para traer un componente que no está exportado de forma default, lo ponemos entre llaves
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
        <img src={logo} className="App-logo" alt="logo" />
        <Greet name = 'Daniel Armas' age='18' />
        <Greet name = 'Sandra' age='21' />
      </header>
    </div>
  );
}

export default App;