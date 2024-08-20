import './App.css';
import { Recipe } from './components/main/Recipe.jsx';
import APIComponent from './components/setup/AxiosSetup.jsx';

function App() {
  return (
    <div className="App">
      <Recipe />
    </div>
  );
}

export default App;
