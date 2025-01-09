import { Search } from "lucide-react";
import MyContext from "../context/context";
import { useContext } from "react";
const Searchbar = () => {
  const { language } = useContext(MyContext);
  return (
    <form
      className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
    >
      <input
        type="text"
        name="name"
        placeholder={language === "vi" ? "Search" : "Tìm kiếm"}
        className="flex-1 bg-transparent outline-none"
      />
      <button className="cursor-pointer">
        <Search/>
      </button>
    </form>
  );
};

export default Searchbar;