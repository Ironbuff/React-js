import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import About from "./pages/about/About"
import Home from "./pages/home/Home"

function App() {
  return (
    <>
      <Router>
        <main className="w-full min-h-screen bg-neutral-950 flex flex-col text-neutral-500">
          {/* This is the main section. */}

          {/* Navbar */}
          <Navbar />

          {/* Routing */}
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/about" element={<About/>} />
          </Routes>


          {/* Footer section */}
          <Footer />

        </main>
      </Router>
    </>
  )
}

export default App
