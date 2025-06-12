import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ThemeToggle from "./components/ThemeToggle";
import Sidebar from "./components/Sidebar";
import Watchlist from "./pages/WatchList";

function App() {
  return (
    <div className="flex bg-white dark:bg-gray-800 text-black dark:text-white">
      <Sidebar />
      <main className="flex-1 p-4">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
