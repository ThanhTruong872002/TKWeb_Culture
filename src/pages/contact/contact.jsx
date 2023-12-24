import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="mt-20">
        <div className="flex justify-center items-center text-[1.8rem] font-mons py-10">
          <h2>
            <span className="text-blue-400">Trang chủ </span>/ Liên Hệ
          </h2>
        </div>
      </div>

      <div className="mt-96 pb-40 container flex gap-10">
        <div className="w-[50%] bg-black px-[88px] pt-[66px]">
          <h2 className="text-[5.5rem] font-mons text-white font-semibold">
            Về Chúng Tôi
          </h2>
          <div className="flex gap-10 items-center mt-8">
            <div className="font-[1.3rem] font-mons text-white flex flex-col gap-10">
              <p>http//:Culture16.com</p>
              <p>+84 99 999 999</p>
              <p className="leading-10 w-[233px]">
                107 điện biên phủ, an khê, thanh khê, Đà nẵng
              </p>
            </div>
            <img
              src="./src/images/about.svg"
              alt=""
              className="relative right-[20%] bottom-0"
            />
          </div>
        </div>

        <div className="ml-40">
          <div className="mt-10">
            <h2>Họ và Tên</h2>
            <input
              type="text"
              name=""
              id=""
              placeholder="Bui Thuy Nga"
              className="w-[500px] h-[74px] border-[1px] border-gray-400 px-8 mt-4"
            />
          </div>
          <div className="mt-10">
            <h2>Email</h2>
            <input
              type="text"
              name=""
              id=""
              placeholder="buithuynga@gmail.com"
              className="w-[500px] h-[74px] border-[1px] border-gray-400 px-8 mt-4"
            />
          </div>
          <div className="mt-10">
            <h2>Phản Hồi</h2>
            <input
              type="text"
              name=""
              id=""
              placeholder="Để lại lời nhắn cho chúng tôi"
              className="w-[500px] h-[150px] border-[1px] border-gray-400 px-8 mt-4"
            />
          </div>

          <button className="flex mt-10 text-center mx-auto  justify-center items-center bg-[#494949] w-[130px] h-[60px] text-white text-[1.8rem] font-medium rounded-xl">
            GỬI
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
