import NavBar from "../../Shared/navbar/NavBar";
import Banner from "../banner/Banner";

const Header = () => {
  return (
    <div>
      <div className="absolute w-full top-0 z-50  bg-transparent">
        <NavBar></NavBar>
      </div>
      <Banner></Banner>
    </div>
  );
};

export default Header;
