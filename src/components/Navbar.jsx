import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';

function Navbar() {
  // Get theme and toggleTheme from context
  const { theme, toggleTheme } = useTheme();

  console.log('Navbar re-rendered');

  return (
    <nav className={`navbar navbar-expand-lg ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">My App</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/login">Login</Link>
        </div>
        <button className="btn btn-outline-primary ms-auto" onClick={toggleTheme}>
          {theme === 'light' ? '🌞' : '🌙'} {theme.charAt(0).toUpperCase() + theme.slice(1)} Theme
        </button>
      </div>
    </nav>
  );
}

export default Navbar;