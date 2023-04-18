import { useState } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
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

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          {/* <AdminSidebar isSidebar={isSidebar} /> */}
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
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
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
