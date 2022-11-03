import logo from "./logo.svg";
import "./App.css";
import Login from "./component/Login/index";
import Routes from "./component/Routes";
import { BrowserRouter, HashRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      {/* <Login /> */}
      <Routes />
    </BrowserRouter>
  );
}

export default App;
