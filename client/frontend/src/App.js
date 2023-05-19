import LoginPage from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Dashbord from "./Pages/Dashbord";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashbord />} />
      </Routes>
    </Router>
  );
  }

  export default App;