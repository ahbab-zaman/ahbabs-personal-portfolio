import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";

const MainLayout = () => {
  return (
    <>
      <div className="h-12">
        <Navbar></Navbar>
      </div>
      <Banner></Banner>
    </>
  );
};

export default MainLayout;
