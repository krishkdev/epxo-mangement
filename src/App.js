import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import { useState, createContext } from "react";
//import LoginContextProvider from "./LoginContext";

export const LoginContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const val = { isLoggedIn, setIsLoggedIn };
  return (
    <Router>
      <Navbar />
      <Switch>
        <LoginContext.Provider value={val}>
          <Route path="/" component={Dashboard} exact />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </LoginContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
