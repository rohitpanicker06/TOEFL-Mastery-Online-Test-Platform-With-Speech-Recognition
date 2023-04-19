import { useState } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
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
import BlogList from "./Pages/BlogList/index"
import Home from "./Pages/LandingPage/Home";
import About from "./Pages/LandingPage/About";
import Work from "./Pages/LandingPage/Work";
import Testimonial from "./Pages/LandingPage/Testimonial";
import Contact from "./Pages/LandingPage/Contact";
import Footer from "./Pages/LandingPage/Footer";
import Navbar from "./Pages/LandingPage/Navbar";
import "./App.css";
import Login from "./Pages/Login/Login";




function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [auth, setAuth] = useState(true);
  const navigate = useNavigate(); // adding this line to get the navigate function


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        
        
        
          {/* <Sidebar isSidebar={isSidebar} /> */}
          {/* <AdminSidebar isSidebar={isSidebar} /> */}
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes >
              {
                <Route path="/login" element={<Login setAuth={setAuth} />} /> 
              }
              {
            <Route path="/"
              element={<><Home/> <About /> <Work /> <Testimonial /> <Contact /> <Footer /></>}/>}
               {
                <Route
                  path="/student/dashboard"
                  element={<StudentDashboard />}
                />
              }
              {
                <Route
                  path="/admin/dashboard"
                  element={<AdminDashboard />}
                />
              }
              {
                <Route
                  path="/student/practice-tests"
                  element={<PracticeTestDashBoard />}
                />
              }
              {<Route path="/student/team-members" element={<TeamMembers />} />}
              {<Route path="/admin/manage-exams" element={<ManageExams />} />}
              {<Route path="/student/contact-us" element={<ContactUs />} />}
              {<Route path="/student/faq" element={<FAQ />} />}
              {<Route path="/student/blog" element={<Blog />} />}
              {<Route path="/student/blog/:id" element={<BlogList />} />}
              {/* {<Route path="/Home" element={<Home />} />} */}
              <Route
                path="*"
                element={() => {
                  navigate('/student/blog'); // use the navigate function to redirect to the desired route
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
