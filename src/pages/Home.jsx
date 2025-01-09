import deploy from "../assets/deploy.png";
import dev from "../assets/dev.png";
import design from "../assets/design.png";
import seo from "../assets/seo.png";
import MyContext from "../context/context";
import { useContext, useState } from "react";
import emailjs from "@emailjs/browser";

const Home = () => {
  const { language } = useContext(MyContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const content = {
    from_name: name,
    to_name: "Star Global",
    from_email: email,
    from_phone: phone,
    message: about,
  };
  const handleSummit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_dsa9qq8", "template_j8mb037", content, {
        publicKey: "bx8QVFtZUP1WUaYoB",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };
  return (
    <div>
      {/* Hero section */}
      <div className="h-screen bg-banner bg-cover bg-center text-white flex flex-col justify-center items-center">
        <div className="px-4 sm:flex h-64 justify-between">
          <div className="w-2/3 flex flex-col  gap-8">
            <p className="text-black text-left w-max py-1 px-5 sm:text-xl text-md font-semibold  ">
              {language === "vi"
                ? "Star Global - Web Design Company"
                : "Star Global - Công ty Thiết kế Website"}
            </p>
            <p className="text-black text-left w-max py-1 px-5 sm:text-5xl text-3xl font-semibold">
              SKYROCKET <br />
              {language === "vi" ? "YOUR WEBSITE" : "WEBSITE CỦA BẠN"}
            </p>
            <p className=" text-black text-left w-[300px] py-1 px-5 sm:text-xl text-sm">
              {language === "vi" ? (
                <>
                  A Premium Website Solution for Business Owners that <br />
                  want to Skyrocket past the competition.
                </>
              ) : (
                <>
                  Giải pháp trang web cao cấp dành cho chủ doanh nghiệp <br />{" "}
                  muốn vượt lên trước đối thủ cạnh tranh.
                </>
              )}
            </p>{" "}
            <button className="rounded-3xl bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 w-max py-3 px-5 text-sm">
              <p className=" text-black text-left w-max py-1 px-5 sm:text-xl text-sm">
                {language === "vi" ? " Learn more !!!" : "Tìm hiểu thêm !!!"}
              </p>
            </button>
          </div>
          <div className="relative w-1/3 hidden sm:block">
            <img src={deploy} alt="" className="object-contain" />
          </div>
        </div>
      </div>
      {/* content section */}
      <div className="m-12 flex gap-x-8 gap-y-16 justify-around flex-wrap">
        <div className="hover:bg-sky-200 w-full flex flex-col gap-4 sm:w-[45%] lg:w-[27%] border-2 border-gray-200 rounded-md">
          <div className="relative w-full m-8">
            <img src={dev} alt="" className="cursor-pointer " />
          </div>
          <div className="flex justify-between mx-8">
            <span className="font-medium">WEB DEVELOPMENT</span>
          </div>
          <div className="flex justify-between mx-8">
            <span className="font-medium  text-left">
              {language === "vi"
                ? "Bringing your vision and designs to life with precision coding on a wordpress platform and integrated innovative solutions."
                : "Biến tầm nhìn và thiết kế riêng của bạn thành hiện thực bằng việc mã hóa chính xác trên nền tảng WordPress và các giải pháp cải tiến tích hợp."}
            </span>
          </div>
          <div className="mx-4 mt-6">
            <button className=" border-2 border-black rounded-2xl mx-8 w-max py-2 px-4 text-xs hover:bg-black hover:text-white">
              {language === "vi" ? " Read more !" : "Tìm hiểu thêm !"}
            </button>
          </div>
        </div>

        <div className="hover:bg-sky-200 w-full flex flex-col gap-4 sm:w-[45%] lg:w-[27%] border-2 border-gray-200 rounded-md">
          <div className="relative w-full m-8">
            <img src={design} alt="" className="cursor-pointer " />
          </div>
          <div className="flex justify-between mx-8">
            <span className="font-medium">WEB DESIGN</span>
          </div>
          <div className="flex justify-between mx-8">
            <span className="font-medium  text-left">
              {language === "vi"
                ? " Crafting captivating online experiences that resonate with yourbrand’s essence and engage your audience effectively. "
                : "Tạo ra những trải nghiệm trực tuyến hấp dẫn phù hợp với bản chất thương hiệu của bạn và thu hút đối tượng mục tiêu một cách hiệu quả."}
            </span>
          </div>
          <div className="m-4">
            <button className=" border-2 border-black rounded-2xl mx-8 w-max py-2 px-4 text-xs hover:bg-black hover:text-white">
              {language === "vi" ? " Read more !" : "Tìm hiểu thêm !"}
            </button>
          </div>
        </div>

        <div className="hover:bg-sky-200 w-full flex flex-col gap-4 sm:w-[45%] lg:w-[27%] border-2 border-gray-200 rounded-md">
          <div className="relative w-full m-8">
            <img src={seo} alt="" className="cursor-pointer " />
          </div>
          <div className="flex justify-between mx-8">
            <span className="font-medium">S.E.O.</span>
          </div>
          <div className="flex justify-between mx-8">
            <span className="font-medium  text-left">
              {language === "vi"
                ? "Elevate your online presence with our SEO service. We enhance your website’s visibility, rankings, and drive organic traffic."
                : "Nâng cao sự hiện diện trực tuyến của bạn với dịch vụ SEO của chúng tôi. Chúng tôi nâng cao khả năng hiển thị, thứ hạng và thúc đẩy lưu lượng truy cập."}
            </span>
          </div>
          <div className="m-4">
            <button className=" border-2 border-black rounded-2xl mx-8 w-max py-2 px-4 text-xs hover:bg-black hover:text-white">
              {language === "vi" ? " Read more !" : "Tìm hiểu thêm !"}
            </button>
          </div>
        </div>
      </div>

      {/* FORM section */}

      <div className="my-8 flex justify-center items-center">
        <div className="border-2 rounded-lg border-gray-200 max-w-lg p-8">
          <form className="mt-4 mx-auto" onSubmit={handleSummit}>
            <h1>
              {language === "vi"
                ? "Contact with us !"
                : "Liên hệ ngày với chúng tôi"}
            </h1>
            <h1>
              {language === "vi"
                ? "Together, we can create something incredible !"
                : "Cùng nhau, chúng ta có thể tạo ra điều gì đó đáng tuyệt vời"}
            </h1>
            <div className="sm:col-span-3 mt-4">
              <label
                htmlFor="full-name"
                className="block text-sm/6  text-left mt-2 font-medium text-gray-900"
              >
                {language === "vi" ? "First and Last name:" : "Họ và Tên:"}
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-fullname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="phone"
                className="block text-sm/6  text-left mt-2 font-medium text-gray-900"
              >
                {language === "vi" ? "Phone number: " : "Số điện thoại:"}
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  autoComplete="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm/6  text-left mt-2 font-medium text-gray-900"
              >
                {language === "vi" ? "Email address : " : "Địa chỉ email:"}
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm/6 text-left  mt-2 font-medium text-gray-900"
              >
                {language === "vi" ? "About: " : "Về:"}
              </label>
              <div className="mt-2">
                <textarea
                  name="about"
                  id="about"
                  rows="3"
                  placeholder={
                    language === "vi"
                      ? "Tell us about what you need... "
                      : "Kể chúng tôi bạn cần gì..."
                  }
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              value="Send"
              className="w-full mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              {language === "vi" ? "Send " : "Gửi"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
