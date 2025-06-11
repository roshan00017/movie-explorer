import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
        <div className="p-4 flex justify-between">
          <h1 className="text-2xl font-bold">🎬 Movie Explorer</h1>
          <ThemeToggle />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
