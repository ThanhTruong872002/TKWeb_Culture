import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="w-full">
        <img
          src="./src/images/hero.svg"
          alt=""
          className="object-cover w-full relative"
        />
        <div className="absolute top-[50%] right-[10%]">
          <h4 className="text-[3rem] font-[500] font-mons ">
            Sản phẩm đầu tiên của tháng 12
          </h4>
          <h2 className="font-bold text-[5rem] font-mons w-[450px] my-10">
            TEE CULTURE 16 CITY REPRESENT
          </h2>
          <p className="text-[1.8rem] font-mons leading-10">
            1 Sản phẩm tâm huyết của đội ngũ thiết kế - nâng cấp toàn bộ form
            dáng chất liệu
          </p>
          <button className="w-[129px] h-[58px] bg-black text-white flex justify-center items-center rounded-xl mt-20 ">
            <h2>Mua Ngay </h2>
          </button>
        </div>
      </div>
      <div className="container mt-10">
        <div className="text-[#404040] flex justify-around items-center">
          <div>
            <h2 className="text-[2rem] font-[500] font-mons">
              Miễn phí vận chuyển
            </h2>
            <p className="text-[1.2rem] font-[400] font-mons mt-2">
              Miễn phí vận chuyển cho mọi đơn hàng
            </p>
          </div>
          <div>
            <h2 className="text-[2rem] font-[500] font-mons">Hoàn tiền</h2>
            <p className="text-[1.2rem] font-[400] font-mons mt-2">
              30 ngày đổi trả miễn phí
            </p>
          </div>{" "}
          <div>
            <h2 className="text-[2rem] font-[500] font-mons">Online 24 giờ</h2>
            <p className="text-[1.2rem] font-[400] font-mons mt-2">
              Hỗ trợ 24 giờ một ngày
            </p>
          </div>
        </div>
        <div className="mt-12 flex gap-4">
          <img src="./src/images/product.svg" alt="" />
          <img src="./src/images/product1.svg" alt="" />
          <img src="./src/images/product2.svg" alt="" />
        </div>
      </div>
      <div className="my-10">
        <img src="./src/images/Christmas.svg" alt="" className="w-full"/>
      </div>
      <Footer/>
    </div>
  );
}
