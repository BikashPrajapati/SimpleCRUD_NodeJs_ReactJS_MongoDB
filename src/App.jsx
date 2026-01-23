import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./pages/public/Home";
// import PublicProjects from "./pages/public/Projects";
// import About from "./pages/public/About";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
import AOS from "aos";
import { useEffect } from "react";

// function App() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,   // animation duration (ms)
//       once: true,       // animate only once
//       easing: "ease-in-out",
//     });
//   }, []);


function App() {
   useEffect(() => {
    AOS.init({
      duration: 1000,   // animation duration (ms)
      once: true,       // animate only once
      easing: "ease-in-out",
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        
         {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/projects" element={<PublicProjects />} />
        <Route path="/about" element={<About />} /> */}

        {/* Admin */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
