import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/Home/about";
import Contact from "./pages/Home/contact";
import WorkExprinse from "./pages/Home/work experinse";
import Certafications from "./pages/Home/certafications";
import Skills from "./pages/Home/skills";
import Projects from "./pages/Home/projects";
import NotFound from "./pages/validation/NotFound";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/workexperinse" element={<WorkExprinse />} />
      <Route path="/certifications" element={<Certafications />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<NotFound />} />


    </Routes>
       
    </>
  );
}

export default App;
