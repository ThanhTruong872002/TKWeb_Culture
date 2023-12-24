import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Account() {
  return (
    <div>
      <Header />
      <div className="mt-20 mb-40 ">
        <div className="flex justify-center items-center text-[1.8rem] font-mons py-10">
          <h2>
            <span className="text-blue-400">Trang chủ </span>/ Sản Phẩm / 16
            Racing Jacket
          </h2>
        </div>

        <div>
          <img src="./src/images/decor.svg" alt="" />
        </div>

        <div className="mt-40 container">
          <div className="px-8 py-10 border-[2px] border-[#ccc]">
            <h2 className="font-mons text-[2.2rem] font-bold mb-32">
              Đăng Nhập
            </h2>

            <div>
              <h2 className="font-mons mb-8 text-[1.6rem]">Địa chỉ Email</h2>
              <div className="flex gap-4 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>

                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Địa chỉ gmail"
                  className="w-[455px] h-[64px] border-[1px] border-[#ccc] px-10"
                />
              </div>
            </div>

            <div className="mt-10">
              <h2 className="font-mons mb-8 text-[1.6rem]">Mật Khẩu</h2>
              <div className="flex gap-4 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>

                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Địa chỉ gmail"
                  className="w-[455px] h-[64px] border-[1px] border-[#ccc] px-10"
                />
              </div>
            </div>

            <button className="flex justify-center items-center text-white bg-black font-bold w-[217px] h-[56px] mt-20">
              Đăng Nhập
            </button>
          </div>

          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
