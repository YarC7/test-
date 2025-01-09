import logo from "../assets/logo.png";
import Menu from "./Menu";
import Searchbar from "./Searchbar";
import MyContext from "../context/context";
import { useContext } from "react";

const Navbar = () => {
  const { language, setLanguage } = useContext(MyContext);
  const handleChange = (language) => {
    setLanguage(language);
  };
  return (
    <div>
      <div className="flex justify-between items-center w-full mb-4 bg-transparent absolute">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-3 cursor-pointer p-2">
          <a href="/">
            <img src={logo} alt="avatar" className="m-2 w-12 h-12" />
          </a>
        </div>
        <div className="hidden md:flex justify-between items-center gap-5 ">
          <a href="/">
            <span className="font-medium text-lg hover:bg-gray-200 active:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300 gap-3 transition-colors ">
              {language === "vi" ? "Home" : "Trang chủ"}
            </span>
          </a>
          <a href="/about">
            <span className="font-medium text-lg hover:bg-gray-200 active:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300 gap-3 transition-colors ">
              {language === "vi" ? "About" : "Giới thiệu"}
            </span>
          </a>{" "}
          <a href="/#">
            <span className="font-medium text-lg hover:bg-gray-200 active:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300 gap-3 transition-colors ">
              {language === "vi" ? "Projects" : "Bài viết"}
            </span>
          </a>{" "}
          <a href="/#">
            <span className="font-medium text-lg hover:bg-gray-200 active:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300 gap-3 transition-colors ">
              {language === "vi" ? "Contact" : "Liên hệ"}
            </span>
          </a>
        </div>

        {/* RIGHT SIDE */}

        <div className="flex justify-between items-center gap-5 m-2">
          <div className="h-full p-2 flex float-right md:hidden">
            <Menu />
          </div>
          <div className="hidden md:flex  justify-between items-center gap-2">
            <div className="relative  rounded-lg border-2 border-black">
              <Searchbar />
            </div>
            <div className="h-10 w-10 items-center flex rounded-xl border-2 border-black">
              <span className="font-medium">
                {language === "vi" ? (
                  <button
                    onClick={() => handleChange("en")}
                    className={`mx-2`}
                  >
                    EN
                  </button>
                ) : (
                  <button
                    onClick={() => handleChange("vi")}
                    className={`mx-2`}
                  >
                    VI
                  </button>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
