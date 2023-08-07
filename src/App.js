import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './User/Register';
import Signin from './User/Signin';
import Password from './User/Password';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar will be rendered on every page */}
      <main className="App">
        <Routes>
          {/* Define routes using the Route component */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/password" element={<Password />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
