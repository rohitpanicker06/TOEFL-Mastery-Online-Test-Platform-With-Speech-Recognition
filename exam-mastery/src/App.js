import { useState, useEffect } from "react";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Topbar from "./Components/Navigation/Topbar";
import Sidebar from "./Components/Navigation/Sidebar";
import AdminSidebar from "./Components/Navigation/AdminSidebar";
import ContactUs from "./Pages/ContactUs/ContactUs";
import FAQ from "./Pages/FAQ/FAQ";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import StudentDashboard from "./Pages/Student/StudentDashboard";
import TeamMembers from "./Pages/Team/TeamMembers";
import ManageExams from "./Pages/Admin/ManageExams";
import PracticeTestDashBoard from "./Pages/PracticeTests/PracticeTestDashBoard";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import Blog from "./Pages/BlogHome/index";
import BlogList from "./Pages/BlogList/index";
import Exam from "./Pages/Student/Exam/[_id]";
import Home from "./Pages/LandingPage/Home";
import About from "./Pages/LandingPage/About";
import Work from "./Pages/LandingPage/Work";
import Testimonial from "./Pages/LandingPage/Testimonial";
import Contact from "./Pages/LandingPage/Contact";
import Footer from "./Pages/LandingPage/Footer";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import ForgotPasswordForm from "./Pages/Login/ForgotPasswordForm";
import "./App.css";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(false);
  const [isAdminbar, setIsAdminbar] = useState(false);
  const [auth, setAuth] = useState(true);
  const navigate = useNavigate(); // adding this line to get the navigate function
  const location = useLocation();
 
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const sidebarValue = searchParams.get("sidebar");
    const adminBarValue = searchParams.get("adminBar");
    setIsSidebar(sidebarValue === "true");
    setIsAdminbar(adminBarValue === "true");
  }, [location.search]);


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">

            {isSidebar ? <Sidebar /> : null}
            {isAdminbar ? <AdminSidebar /> : null}

          {/* <AdminSidebar isSidebar={isSidebar} /> */}
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
            {
                <Route path="/login" element={<Login />} /> 
              }

              {
                <Route path="/signup" element={<Signup/>} />
              }
              {
                <Route path="/forgotPassword/form" element={<ForgotPasswordForm/>} />
              }

            {
            <Route path="/"
              element={<><Home/> <About /> <Work /> <Testimonial /> <Contact /> <Footer /></>}/>
            }

              {
                <Route
                  path="/student/dashboard"
                  element={<StudentDashboard />}
                />
              }
              {<Route path="/admin/dashboard" element={<AdminDashboard />} />}
              {
                <Route
                  path="/student/practice-tests"
                  element={<PracticeTestDashBoard />}
                />
              }
              {<Route path="/student/exam/:id" Component={Exam} />}
              {<Route path="/student/team-members" element={<TeamMembers />} />}
              {<Route path="/admin/manage-exams" element={<ManageExams />} />}
              {<Route path="/student/contact-us" element={<ContactUs />} />}
              {<Route path="/student/faq" element={<FAQ />} />}
              {<Route path="/student/blog" element={<Blog />} />}
              {<Route path="/student/blog/:id" element={<BlogList />} />}
              <Route
                path="*"
                element={() => {
                  navigate("/student/blog"); // use the navigate function to redirect to the desired route
                  return null;
                }}
              />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
