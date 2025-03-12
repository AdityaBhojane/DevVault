import { Route, Routes } from "react-router-dom";
import AuthProtect from "../components/ProtectedRoutes/AuthProtect";
import SignUp from "../components/SignUp/SignUp";
import Auth from "../Pages/Auth/Auth";
import SignIn from "../components/SIgnIn/SignIn";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthProtect />}></Route>
      <Route path="/auth" element={<Auth />}>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}
