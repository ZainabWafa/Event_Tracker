import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
// import About from "./components/View";
// import AddEdit from "./components/AddEdit";
// import View from "./components/View";
function App() {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />

              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route exact path="/" component={Home} />
          <Route path="/add"  />
          <Route path="/update/:id" />
          <Route path="/view/:id" />
          <Route path="/about"  />
          <Route path="/search" />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
