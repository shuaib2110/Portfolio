import About from "./component/About/About";
import Education from "./component/Education/Education";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import Projects from "./component/Project/Project";

function App() {
  return <div className="bg-[#171d32] h-auto w-full overflow-hidden">

    <Navbar/>
    <Home/>
    <About/>
    <Education/>
    <Projects/>
    <Footer/>
  </div>;
}

export default App;
