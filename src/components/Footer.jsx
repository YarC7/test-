import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import x from "../assets/x.png";
import pinterest from "../assets/pinterest.png";
import MyContext from "../context/context";
import { useContext } from "react";
const Footer = () => {
  const { language } = useContext(MyContext);
  return (
    <div className="py-12 px-4 md:px-8 lg:px-12 xl:px-24 2xl:px-32 bg-gray-100 text-sm border-t-2 ">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between justify-items-center gap-8">
        {/* LEFT */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 items-center">
          <a href="/">
            <div className="text-2xl tracking-wide">Star Global</div>
          </a>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing.
            <br /> Quae quidem sapiente hic iure aperiam cupiditate
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4 items-center">
          <h1 className="font-medium text-lg">

          {language === "vi" ? "Contact with us:" : "Liên hệ với chúng tôi:"}
          </h1>

          <div className="flex gap-6">
            <span className="font-semibold">123example@gmail.com</span>
          </div>
          <span className="font-semibold">(+84)123456789</span>
        </div>
        {/* RIGHT */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 items-center">
          <h1 className="font-medium text-lg">
          {language === "vi" ? "Follow us with:" : "Theo dõi chúng tôi:"}</h1>

          <div className="flex gap-6">
            <a href={""}>
              <img src={facebook} alt="" width={16} height={16} />
            </a>
            <a href={""}>
              <img src={instagram} alt="" width={16} height={16} />
            </a>
            <a href={""}>
              <img src={x} alt="" width={16} height={16} />
            </a>
            <a href={""}>
              <img src={pinterest} alt="" width={16} height={16} />
            </a>
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-4">
        <div className="">@NgDCanh</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 font-medium cursor-pointer">
              

              

              {language === "vi" ? "Privacy Policy | Terms & Conditions" : "Thông tin về chính sách bảo mật và điều khoản sử dụng."}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
