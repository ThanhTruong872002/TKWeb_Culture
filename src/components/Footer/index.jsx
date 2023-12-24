export default function Footer() {
  return (
    <div className=" bg-black">
      <div className="container py-[75px] flex items-center justify-between">
        <div>
          <h2 className="text-[1.8rem] font-bold font-mons text-white w-[550px] leading-10">
            ĐĂNG KÍ THÔNG TIN ĐỂ NHẬN ĐƯỢC CẬP NHẬT MỚI NHẤT VỀ CÁC SẢN PHẨM,
            CHIẾN DỊCH VÀ COLLAB CỦA CULTURE
          </h2>
          <input
            type="text"
            name=""
            id=""
            placeholder="Nhập địa chỉ gmail của bạn"
            className="mt-10 font-mons text-[1.5rem] w-[520px] h-[40px] py-[16px] px-4 bg-black border-[1px] border-[#ccc]"
          />

          <button className="flex justify-center items-center text-center bg-white p-4 w-[520px] font-mons mt-4 font-semibold">
            <h2>ĐĂNG KÝ</h2>
          </button>
          <h2 className="mt-10 text-white w-[520px] font-semibold leading-10">
            BẠN CÓ THỂ HỦY ĐĂNG KÝ BẤT CỨ LÚC NÀO. ĐỂ TÌM HIỂU THÊM, BẠN CÓ THỂ
            TRUY CẬP TRANG [Chính sách bảo mật]
          </h2>
          <div className="mt-6 flex gap-6">
            <img src="./src/images/media1.svg" alt="" />
            <img src="./src/images/media2.svg" alt="" />
            <img src="./src/images/media3.svg" alt="" />
            <img src="./src/images/media4.svg" alt="" />
          </div>
          <p className="text-[1.6rem] font-normal text-[#C1C8CE] font-mons mt-20">
            Bản quyền © 2023 Culture16. Đã đăng ký Bản quyền.
          </p>
        </div>
        <div className="flex gap-40 text-white  font-mons">
          <ul className="flex flex-col gap-10">
            <li className="text-[2rem] font-bold">CULTERE</li>
            <li>Bộ sưu tập</li>
            <li>Giới thiệu</li>
            <li>Tuyển dụng</li>
          </ul>
          <ul className="flex flex-col gap-10">
            <li className="text-[2rem] font-bold">MUA HÀNG</li>
            <li>Đổi - Trả hàng</li>
            <li>FAQs</li>
            <li>Liên hệ</li>
          </ul>
          <ul className="flex flex-col gap-10">
            <li className="text-[2rem] font-bold">HỖ TRỢ</li>
            <li>Tài khoản</li>
            <li>Trang chủ</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
