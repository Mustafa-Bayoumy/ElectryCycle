import About from "./About/About";
import Comments from "./Comments/Testmonials";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import "/src/App.css";
import BTT from "/src/components/BTT/BTT";
import Footer from "/src/components/Footer/Footer";
import Navbar from "/src/components/Navbar/Navbar";
export default function Home({ theme, toggleTheme}) {
  
  return (
    <div>
      <div className="nav-bar">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      </div>
    <div>
      <Hero theme={theme} />
      <About />
      <Services />
      <Comments/>
      <Footer/>
      <BTT />
    </div>

    </div>
    
  );

}


