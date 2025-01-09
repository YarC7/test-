import { useState } from "react";
import menu from "../assets/menu.png";
const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <img
        src={menu}
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl  z-10">
          <a href="/">Homepage</a>
          <a href="/about">About</a>
          <a href="/">Projects</a>
          <a href="/">Contact</a>
        </div>
      )}
    </div>
  );
};

export default Menu;
