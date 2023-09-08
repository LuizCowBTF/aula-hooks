import './App.css';
import Counter from './../Counter/Counter';
import SmartCounter from '../SmartCounter/SmartCounter';


function App() {
  return (
    <>
      <h1>Olá Mundo!!</h1>
      <Counter/>
      <br/>
      <h3>contador unitário</h3>
      <SmartCounter/>
    </>
  );
}

export default App;
