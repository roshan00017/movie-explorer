import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  const linkClass = (path: string) =>
    `block px-4 py-3 rounded hover:bg-blue-100 dark:hover:bg-blue-900 ${
      pathname === path ? "bg-blue-200 dark:bg-blue-800" : ""
    }`;

  return (
    <aside className="w-60 min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-4">
      <h2 className="text-xl font-bold mb-6">🎬 Movie Explorer</h2>
      <nav className="space-y-2">
        <Link to="/" className={linkClass("/")}>
          🏠 Home
        </Link>
        <Link to="/watchlist" className={linkClass("/watchlist")}>
          ❤️ Watchlist
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
