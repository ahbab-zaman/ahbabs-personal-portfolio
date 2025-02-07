import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";

const MainLayout = () => {
  return (
    <>
      <div className="h-12">
        <Navbar></Navbar>
      </div>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
    </>
  );
};

export default MainLayout;
