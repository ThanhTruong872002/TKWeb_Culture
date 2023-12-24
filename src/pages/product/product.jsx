import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Product() {
  return (
    <div>
      <Header />
      <div className="my-10">
        <div className="flex justify-center items-center text-[1.8rem] font-mons py-10">
          <h2>
            <span className="text-blue-400">Trang chủ </span>/ Sản phẩm
          </h2>
        </div>
        <div className="container flex justify-between gap-10">
          {/* filter  */}
          <div className="w-[20%] ">
            <div>
              <h2>Lọc theo giá</h2>
              <div className="my-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="237"
                  height="14"
                  viewBox="0 0 237 14"
                  fill="none"
                >
                  <path opacity="0.1" d="M230 5H0V9H230V5Z" fill="#22262A" />
                  <path d="M230 5H26V9H230V5Z" fill="#2E90E5" />
                  <path
                    d="M26 12C28.7614 12 31 9.76142 31 7C31 4.23858 28.7614 2 26 2C23.2386 2 21 4.23858 21 7C21 9.76142 23.2386 12 26 12Z"
                    fill="#2E90E5"
                  />
                  <path
                    d="M26 13C29.3137 13 32 10.3137 32 7C32 3.68629 29.3137 1 26 1C22.6863 1 20 3.68629 20 7C20 10.3137 22.6863 13 26 13Z"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M230 12C232.761 12 235 9.76142 235 7C235 4.23858 232.761 2 230 2C227.239 2 225 4.23858 225 7C225 9.76142 227.239 12 230 12Z"
                    fill="#2E90E5"
                  />
                  <path
                    d="M230 13C233.314 13 236 10.3137 236 7C236 3.68629 233.314 1 230 1C226.686 1 224 3.68629 224 7C224 10.3137 226.686 13 230 13Z"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div>Khoảng: 200 - 400</div>
            </div>

            <div className="my-10 ">
              <h2 className="font-bold font-mons text-[2rem] ">Sản phẩm</h2>
              <div className="flex justify-between mt-10">
                <h2>Jacket</h2>
                <p>2</p>
              </div>
              <div className="flex justify-between mt-10">
                <h2>Hot</h2>
                <p>42</p>
              </div>
              <div className="flex justify-between mt-10">
                <h2>Hoodie</h2>
                <p>22</p>
              </div>
              <div className="flex justify-between mt-10">
                <h2>Denim</h2>
                <p>43</p>
              </div>
              <div className="flex justify-between mt-10">
                <h2>Somi</h2>
                <p>12</p>
              </div>
              <div className="flex justify-between mt-10">
                <h2>Tee</h2>
                <p>22</p>
              </div>

              <h2 className="font-bold font-mons text-[2rem] mt-10">Màu Sắc</h2>
              <div className="flex justify-between mt-10">
                <h2>Đen</h2>
                <p>22</p>
              </div>
              <div className="flex justify-between mt-10">
                <h2>Xanh</h2>
                <p>12</p>
              </div>
              <div className="flex justify-between mt-10">
                <h2>Trắng</h2>
                <p>32</p>
              </div>

              <button className="w-[270px] h-[56px] bg-[#F6F7F8] mt-10 rounded-lg font-bold">
                <h2>THÊM</h2>
              </button>
            </div>
          </div>
          {/* product */}
          <div>
            <div className="grid grid-cols-3 gap-20 ml-10">
              <div>
                <img
                  src="./src/images/card1.svg"
                  alt=""
                  className="rounded-xl"
                />
              </div>
              <div>
                <img
                  src="./src/images/card2.svg"
                  alt=""
                  className="rounded-xl"
                />
              </div>
              <div>
                <img
                  src="./src/images/card3.svg"
                  alt=""
                  className="rounded-xl"
                />
              </div>
              <div>
                <img
                  src="./src/images/card4.svg"
                  alt=""
                  className="rounded-xl"
                />
              </div>
              <div>
                <img
                  src="./src/images/card5.svg"
                  alt=""
                  className="rounded-xl"
                />
              </div>
              <div>
                <img
                  src="./src/images/card6.svg"
                  alt=""
                  className="rounded-xl"
                />
              </div>
              <div>
                <img
                  src="./src/images/card7.svg"
                  alt=""
                  className="rounded-xl"
                />
              </div>
              <div>
                <img
                  src="./src/images/card8.svg"
                  alt=""
                  className="rounded-xl"
                />
              </div>
              <div>
                <img
                  src="./src/images/card9.svg"
                  alt=""
                  className="rounded-xl"
                />
              </div>
            </div>

            <div className="flex justify-center font-semibold mt-10">
                <button className="w-[63px] h-[56px] flex justify-center items-center ">
                  1
                </button>
                <button className="w-[63px] h-[56px] flex justify-center items-center ">
                  2
                </button>
                <button className="w-[63px] h-[56px] flex justify-center items-center bg-blue-300">
                  3
                </button>
                <button className="w-[63px] h-[56px] flex justify-center items-center ">
                  4
                </button>
                <button className="w-[63px] h-[56px] flex justify-center items-center ">
                  5
                </button>
            </div >
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
