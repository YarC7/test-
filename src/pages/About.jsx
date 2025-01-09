import team from "../assets/team.jpg";
import work from "../assets/work.jpg";
import { Users, Code, Rocket } from "lucide-react";
import MyContext from "../context/context";
import { useContext } from "react";
const About = () => {
  const { language } = useContext(MyContext);
  return (
    <div>
      <div className="h-screen bg-banner bg-cover bg-center text-white flex flex-col justify-center items-center">
        <div className="">
          <div className="mt-4 pt-8">
            <h1 className="text-black sm:text-3xl text-2xl font-bold  ">
              {language === "vi" ? "About Us" : "Về Chúng tôi"}
            </h1>
          </div>
          <div className="p-4 flex justify-between mt-8 h-auto">
            <div className="w-1/2 flex flex-col gap-8">
              <div className="text-black text-left w-max py-1 px-5 sm:text-2xl text-lg font-semibold flex items-center gap-2">
                <Users />
                <span>
                  {" "}
                  {language === "vi" ? "Who we are" : "Chúng tôi là"}
                </span>
              </div>
              <p className="text-black text-left w-max py-1 px-5 sm:text-xl text-sm font-semibold">
                {language === "vi" ? (
                  <>
                    Star Global specializes in New Website <br />
                    Design and Website Re-development. <br />
                    Star Global is a Website design <br /> company in VIETNAM.
                  </>
                ) : (
                  <>
                    Star Global chuyên về Thiết kế trang web <br /> mới và Phát
                    triển lại trang web. Star Global <br /> là một công ty thiết
                    kế trang web <br />
                    tại VIETNAM.
                  </>
                )}
              </p>
              <p className="text-black text-left w-max py-1 px-5 sm:text-xl text-sm">
                {language === "vi" ? (
                  <>
                    Our primary service is website design <br />
                    and development , where we use our <br />
                    4D Phase Process to Discover, Design,
                    <br /> Develop and Deploy custom WordPress <br /> websites
                    integrated with the WordPress
                    <br /> Content Management System.
                  </>
                ) : (
                  <>
                    Dịch vụ chính của chúng tôi là thiết kế <br />
                    và phát triển trang web, trong đó <br />
                    chúng tôi sử dụng Quy trình Giai đoạn 4D <br /> để Khám phá,
                    Thiết kế, Phát triển và Triển khai
                    <br /> các trang web WordPress tùy chỉnh <br />
                    được tích hợp với Hệ thống Quản lý Nội <br />
                    dung WordPress.
                  </>
                )}
              </p>
            </div>
            <div className="relative w-[40%] p-4 hidden sm:block">
              <img
                src={team}
                alt="Team"
                className="object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="sm:m-12 mt-2 flex justify-between ">
        <div className="relative w-[40%] p-4 hidden sm:block">
          <img src={work} alt="Team" className="object-contain rounded-2xl" />
        </div>
        <div className="w-1/2 flex flex-col gap-6">
          <div className="text-black text-left w-max py-1 px-4 sm:text-2xl text-lg font-semibold flex items-center gap-2">
            <Code />
            <span> {language === "vi" ? "What we do" : "Chúng tôi làm"}</span>
          </div>
          <div className="w-[300px]">
            <p className="text-black text-left w-max py-1 px-4 sm:text-xl text-sm font-semibold">
              {language === "vi" ? (
                <>
                  Star Global is a group of talented and driven
                  <br /> individuals who have come together <br /> in efforts of
                  helping other business owners <br /> improve their online
                  presence.
                </>
              ) : (
                <>
                  Star Global là một nhóm những cá nhân
                  <br /> tài năng và năng động đã cùng nhau nỗ lực
                  <br /> giúp đỡ các chủ doanh nghiệp khác cải thiện <br /> sự
                  hiện diện trực tuyến của họ
                </>
              )}
            </p>
            <p className="text-black text-left w-max py-1 px-5 sm:text-xl text-sm">
              {language === "vi" ? (
                <>
                  Our purpose and goal is to help <br />
                  local businesses through premium digital
                  <br /> marketing services.
                </>
              ) : (
                <>
                  Mục đích và mục tiêu của chúng tôi là giúp <br /> các doanh
                  nghiệp địa phương thông qua <br /> các dịch vụ tiếp thị kỹ
                  thuật số cao cấp
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      <div className=" bg-sm-banner bg-cover bg-center  mt-12 flex flex-col items-center ">
        <div className="text-black m-4 py-1 px-5 text-2xl font-semibold flex items-center gap-2">
          <Rocket size={96} strokeWidth={1} className="sm:w-full w-1/2" />
        </div>
        <div className="text-black m-4 py-1 px-5 sm:text-2xl text-sm font-semibold flex items-center gap-2">
          {language === "vi" ? "Our Missions" : "Nhiệm vụ của chúng tôi"}
        </div>
        <div className="gap-8 px-4 mx-4 items-center flex flex-col ">
          <p className="text-black sm:text-center text-left py-1 px-4 sm:text-lg text-sm font-semibold sm:w-[500px] w-[250px] text-wrap">
            {language === "vi" ? (
              <>
                Our mission is to use our combined <br />
                knowledge, industry standards, technology
                <br /> and latest tools to help identify issues
                <br /> or opportunities that help our clients grow <br /> and
                achieve their online goals. <br />
              </>
            ) : (
              <>
                Sứ mệnh của chúng tôi là sử dụng kiến thức kết hợp, tiêu chuẩn
                ngành, công nghệ và các công cụ mới nhất để giúp xác định các
                vấn đề hoặc cơ hội giúp khách hàng của chúng tôi phát triển và
                đạt được mục tiêu trực tuyến của họ.
              </>
            )}
          </p>
          <p className="text-black sm:w-[500px] py-6 px-4 sm:text-xl text-sm w-[250px] text-wrap">
            {language === "vi" ? (
              <>
                We start by meeting and listening to your <br /> ideas, goals
                and expectations. Our team will then <br /> research your
                industry and create a <br />
                custom digital marketing plan
                <br /> that fits your business’ current goals <br />
                and budget.
              </>
            ) : (
              <>
                Chúng tôi bắt đầu bằng cách gặp gỡ và lắng nghe ý tưởng, mục
                tiêu và kỳ vọng của bạn. Sau đó, nhóm của chúng tôi sẽ nghiên
                cứu ngành của bạn và tạo ra một kế hoạch tiếp thị kỹ thuật số
                tùy chỉnh phù hợp với mục tiêu hiện tại của doanh nghiệp bạn và
                ngân sách
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
