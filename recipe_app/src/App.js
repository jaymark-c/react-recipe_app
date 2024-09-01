import './App.css';
import { Recipe } from './components/main/Recipe.jsx';
import { RecipeInstructions } from './components/sub-main/RecipeInstructions.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Recipe />} />
          <Route path="/recipeInstructions" element={<RecipeInstructions />} />
        </Routes>  
      </BrowserRouter>  
    </div>
  );
}

export default App;
