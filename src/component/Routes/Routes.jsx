import { Route, Routes as SwitchRouter, Navigate } from "react-router-dom";
import Home from "../HomePage";
import Login from "../Login";
import Logout from "../Logout";
import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {
  return (
    <SwitchRouter>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<ProtectedRoute Component={Home} />} />

      <Route path="/logout" element={<ProtectedRoute Component={Logout} />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </SwitchRouter>
  );
};

export default Routes;
