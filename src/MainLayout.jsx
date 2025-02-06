import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import About from "./Components/About";

const MainLayout = () => {
  return (
    <>
      <div className="h-12">
        <Navbar></Navbar>
      </div>
      <Banner></Banner>
      <About></About>
    </>
  );
};

export default MainLayout;
