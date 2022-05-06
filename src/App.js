import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

  return (
    <div className="App">
      <List />
      <Frase />
      <HelloWorld/>
      <SayMyName nome="Sthephany" />
      <Pessoa 
        nome="Sthephany" 
        idade="21"
        profissao="Programadora"
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
