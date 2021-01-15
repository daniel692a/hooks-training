import logo from './logo.svg';
import './App.css';
import HelloWorld, {Bye} from './components/HelloWorld';
//Para traer un componente que no está exportado de forma default, lo ponemos entre llaves
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld />
        <Bye />
      </header>
    </div>
  );
}

export default App;
