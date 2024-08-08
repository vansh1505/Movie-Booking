import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Navbar from './components/Navbar'
import Booking from './components/Booking'
import Help from './components/Help'
import About from "./components/About";
import Error from "./Error";
import Footer from "./components/Footer";
function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":slug" element={<Error />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <Footer /> */}
    </>
  );
}

export default App;
