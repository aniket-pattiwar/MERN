import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CountryList from './components/CountryList';
import AddCountry from './components/AddCountry';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link className="navbar-brand" to="/">Country App</Link>
          <div>
            <Link className="btn btn-outline-light me-2" to="/">Home</Link>
            <Link className="btn btn-primary" to="/add">Add Country</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/add" element={<AddCountry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;