import "./App.css";
import "animate.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/home.jsx";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Aboutus from "./pages/aboutus/aboutus";
import Contact from "./pages/contact/contact";
import Nodalcentres from "./pages/nodalcentres/nodalcentres";
import Resources from "./pages/resources/resources";
import Getinvolved from "./pages/getinvolved/getinvolved";
import Gallery from "./pages/gallery/gallery";
import Events from "./pages/events/events";
import Blog from "./pages/blogs/blog";
import Internship from "./pages/internship/internship";
import EmpowermentHub from "./pages/hubs/empowerment/empowerment.jsx"
import CommunityHub from "./pages/hubs/community/community.jsx"
import InnovationNexus from "./pages/hubs/innovation/innovation.jsx"
// import Blogs from './pages/blogs/blogs'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/centres" element={<Nodalcentres />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/involve" element={<Getinvolved />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/blog/:slug" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/intership/11" element={<Internship />} />

        <Route path="/hubs/community_hub" element={<CommunityHub />} />
        <Route path="/hubs/empowerment_hub" element={<EmpowermentHub />} />
        <Route path="/hubs/innovation_nexus" element={<InnovationNexus />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
