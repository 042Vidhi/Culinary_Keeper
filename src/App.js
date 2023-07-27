
import './App.css';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import HeroPage from './pages/HeroPage';
import Planner from './pages/Planner';
import MealPage from './pages/MealPage';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/" element={<HeroPage />} />
      <Route path="/planner" element={<Planner />} />
      <Route path="/planner/:id" element={<MealPage/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
