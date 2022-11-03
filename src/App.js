import logo from "./logo.svg";
import "./App.css";
import Login from "./component/Login/index";
import Routes from "./component/Routes/Routes";
import { BrowserRouter, HashRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
