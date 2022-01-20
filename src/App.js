import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../src/components/Login";
import Register from "../src/components/Register";
import Reset from "../src/components/Reset";
import Dashboard from "../src/components/Dashboars";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/add" component={AddEdit} />
          <Route path="/update/:id" component={AddEdit} />
          <Route path="/view/:id" component={View} />
          <Route path="/about" component={About} />
          <Route path="/search" component={Search} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;