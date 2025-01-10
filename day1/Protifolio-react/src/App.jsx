import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/navbar/Navbar'
import Home from "./pages/Home/Home"
import About from "./pages/about/About"
import Footer from "./components/footer/Footer"
import SideNavbar from "./components/navbar/SideNavbar"

function App() {


  return (
    <>
      <Router>
        {/* Navbar  */}
          {/* <Navbar /> */}
          <SideNavbar />
          {/* using routes and route  */}
          
          <Routes>
            {/* here in exact path put file and element put component */}
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/about" element={<About/>} />
          </Routes>
          {/* Hero Section */}
          {/* <Home username="Kushal Bhandari"/> */}
        {/* Footer */}
        <Footer />


      </Router>
    </>
  )
}

export default App
