import './App.css';
import Navbar from './components/Navbar';
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Register from "./components/Register";

function App() {
  return (
    // <div className="bg-gray-900 p-20 h-screen flex justify-center items-start flex-col">
    //   <h1 className="text-5xl text-white">Hello Tailwind 👋</h1>
    //   <p className="text-gray-400 mt-5 text-lg">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
    //     consequuntur odio aut nobis ab quis? Reiciendis doloremque ut quo fugiat
    //     eveniet tempora, atque alias earum ullam inventore itaque sapiente iste?
    //   </p>
    //   <button class="p-4 bg-green-600 rounded-lg font-bold text-white mt-5 hover:bg-gray-600">
    //     Hello Friends 🚀
    //   </button>
    // </div>
    <Router>
    <Navbar/>
    <Switch>
      <Route path ="/" component={Dashboard} exact />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
    </Router>
  );
}

export default App;
