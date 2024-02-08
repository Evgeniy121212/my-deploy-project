import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <>
      <div>
        <Link to="/">Home</Link> {' '}
        <Link to="/about">About</Link> {' '}
        <Link to="/example">Careers</Link>
      </div>
      <h4>{children}</h4>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navbar>Root page</Navbar>} />
          <Route path="/about" element={<Navbar>About page</Navbar>} />
          <Route path="/example" element={<Navbar>Example page</Navbar>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

