import './App.css';
import Counter from './../Counter/Counter';
import SmartCounter from '../SmartCounter/SmartCounter';
import IFoodCounter from '../IFoodCounter/IFoodCounter';


function App() {
  return (
    <>
      <h1>Olá Mundo!!</h1>
      <Counter/>
      <br/>
      <h3>contador unitário</h3>
      <SmartCounter/>
      <br/>
      <h1>IFood Contador</h1>
      <IFoodCounter/>
    </>
  );
}

export default App;
