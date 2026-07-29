import Cards from "./Cards/Cards.jsx"
import Community from "./Community/Community.jsx"
import "/src/App.css";
import BTT from "/src/components/BTT/BTT";
import Footer from "/src/components/Footer/Footer";
import Navbar from "/src/components/Navbar/Navbar";
export default function Projects({ theme, toggleTheme}) {
  
  return (
    <div>
      <div className="nav-bar">
      <Navbar theme={theme} toggleTheme={toggleTheme}  />
      </div>
    <div>
      <Cards />
      <Community />
      <Footer/>
      <BTT />
    </div>

    </div>
    
  );

}

