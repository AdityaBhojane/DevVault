import { Route, Routes } from "react-router-dom";
import AuthProtect from "../components/ProtectedRoutes/AuthProtect";
import SignUp from "../components/SignUp/SignUp";
import Auth from "../Pages/Auth/Auth";
import SignIn from "../components/SIgnIn/SignIn";
import HomePage from "../Pages/Home/HomePage";
import Layout from "../Layout";
import AboutPage from "../Pages/About/AboutPage";
import ContactPage from "../Pages/Contact/ContactPage";
import CoursesPage from "../Pages/Courses/CoursesPage";
import CourseDetailsPage from "../Pages/courseDetails/CourseDetailsPage";
import CourseDashboard from "../Pages/CourseDashboard/CourseDashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthProtect />}></Route>
      <Route path="/auth" element={<Auth />}>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
      <Route path="/" element={<Layout/>}>
        <Route path="/explore" element={<HomePage/>} />
        <Route path="/course" element={<CoursesPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/learn" element={<CourseDetailsPage/>} />
        <Route path="/dashboard" element={<CourseDashboard/>} />
      </Route>
    </Routes>
  );
}
