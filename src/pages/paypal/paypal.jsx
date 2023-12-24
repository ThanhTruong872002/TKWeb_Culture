import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Paypal() {
  return (
    <div>
      <Header />
      <div className="mt-20 container mb-40">
        <div className="flex justify-center items-center text-[1.8rem] font-mons py-10">
          <h2>
            <span className="text-blue-400">Trang chủ </span>/ Hot Deal / Big
            logo hoddie 16 culture
          </h2>
        </div>
        <div className="flex justify-between text-[2rem] font-semibold">
          <h2>Product</h2>
          <div className="flex gap-40">
            <h2>Giá</h2>
            <h2>Số Lượng</h2>
            <h2>Tổng</h2>
          </div>
        </div>

        <div className="mt-10 flex justify-between">
          <div className="flex gap-4 items-center">
            <img src="./src/images/paypal1.svg" alt="" />
            <h2 className="text-[1.8rem] font-medium">
              Big logo hoddie 16 culture
            </h2>
          </div>
          <div className="flex gap-32 items-center">
            <h2>500.000</h2>
            <button className="w-[123px] h-[40px] flex justify-around items-center bg-[#F6F7F8] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="3"
                viewBox="0 0 9 3"
                fill="none"
              >
                <path
                  d="M8.75827 0.194214H0.256348V2.32086H8.75827V0.194214Z"
                  fill="#33A0FF"
                />
              </svg>
              <h2>1</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="9"
                viewBox="0 0 10 9"
                fill="none"
              >
                <path
                  d="M9.40131 3.19409H0.899414V5.32074H9.40131V3.19409Z"
                  fill="#33A0FF"
                />
                <path
                  d="M6.21289 8.5108L6.21289 0.00415039L4.0874 0.00415039V8.5108H6.21289Z"
                  fill="#33A0FF"
                />
              </svg>
            </button>
            <h2>500.000</h2>
          </div>
        </div>
        <div className="mt-20 flex justify-between">
          <div className="flex gap-4 items-center">
            <img src="./src/images/paypal2.svg" alt="" />
            <h2 className="text-[1.8rem] font-medium">
              Big logo hoddie 16 culture
            </h2>
          </div>
          <div className="flex gap-32 items-center">
            <h2>500.000</h2>
            <button className="w-[123px] h-[40px] flex justify-around items-center bg-[#F6F7F8] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="3"
                viewBox="0 0 9 3"
                fill="none"
              >
                <path
                  d="M8.75827 0.194214H0.256348V2.32086H8.75827V0.194214Z"
                  fill="#33A0FF"
                />
              </svg>
              <h2>1</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="9"
                viewBox="0 0 10 9"
                fill="none"
              >
                <path
                  d="M9.40131 3.19409H0.899414V5.32074H9.40131V3.19409Z"
                  fill="#33A0FF"
                />
                <path
                  d="M6.21289 8.5108L6.21289 0.00415039L4.0874 0.00415039V8.5108H6.21289Z"
                  fill="#33A0FF"
                />
              </svg>
            </button>
            <h2>500.000</h2>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="mt-20 w-[300px]">
            <div className="flex justify-between items-center">
              <h2>Tổng tiền:</h2>
              <p>1.000.000</p>
            </div>
            <div className="mt-10 flex justify-between items-center">
              <h2>Phí vận chuyển</h2>
              <p>0</p>
            </div>
            <div className=" mt-10 flex justify-between items-center">
              <h2>Giảm giá</h2>
              <p>0</p>
            </div>
            <div className=" mt-20 flex justify-between items-center text-[2.2rem] font-mons font-bold">
              <h2>Tổng</h2>
              <p>1.000.000</p>
            </div>
            <button className="mt-20 w-full bg-black text-white flex justify-center items-center h-[60px] rounded-xl font-semibold text-[2rem]">
              Thanh Toán
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
