import { Routes, Route } from "react-router-dom";
import Home from "/src/pages/Home/Home";
import Register from "/src/pages/Authentications/Register/Reg";
import Login from "/src/pages/Authentications/Login/Login";
import About from "/src/pages/About/About";
import NotFound from "../pages/NotFound/NotFound";
import FAQ from "../pages/FAQ/FAQ";
import Services from "../pages/Services/Services";
import Projects from "../pages/Projects/Projects";
import ContactUs from "../pages/ContactUs/ContactUs"
import ForgotPass from "../pages/Authentications/ForgotPass/ForgotPass"
import ResetPass from "../pages/Authentications/ResetPass/ResetPass"
import DeviceSub from "../pages/DeviceSub/DeviceSub";

export default function AppRouter({ theme, toggleTheme}) {
  return (
    <Routes>
      {/* Passed props into each route */}
      <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme}  />} />
      <Route path="/register" element={<Register theme={theme} toggleTheme={toggleTheme}  />} />
      <Route path="/login" element={<Login theme={theme} toggleTheme={toggleTheme}  />} />
      <Route path="/about" element={<About theme={theme} toggleTheme={toggleTheme}  />} />
      <Route path="/FAQ" element={<FAQ theme={theme} toggleTheme={toggleTheme}  />} />
      <Route path="/Services" element={<Services theme={theme} toggleTheme={toggleTheme}  />} />
      <Route path="/Projects" element={<Projects theme={theme} toggleTheme={toggleTheme}  />} />
      <Route path="/ContactUs" element={<ContactUs theme={theme} toggleTheme={toggleTheme}  />} />
      <Route path="/DeviceSub" element={<DeviceSub theme={theme} toggleTheme={toggleTheme}  />} />
      <Route path="/ForgotPass" element={<ForgotPass theme={theme} toggleTheme={toggleTheme}  />} />
      <Route path="/ResetPass" element={<ResetPass theme={theme} toggleTheme={toggleTheme}  />} />
      <Route path="*" element={<NotFound theme={theme} />} />
    </Routes>
  );
}