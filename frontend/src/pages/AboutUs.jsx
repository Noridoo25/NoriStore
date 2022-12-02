import React from "react";
import aboutUsImg from "../assets/about.png";
const AboutUs = () => {
  return (
    <div className="">
      <div className="h-full flex md:flex-row sm:flex-col mt-28 m-10 bg-primaryBlue rounded-3xl py-5">
        <div class="md:w-[50%] sm:w-[100%] px-5">
          <h1 class="text-primaryBlue text-3xl text-center font-semibold uppercase tracking-widest my-5">
            About Us
          </h1>
          <p class="mt-5 text-lightGray mx-10 text-justify leading-6">
            <strong>NoriStore</strong> là cửa hàng chuyên cung cấp các loại
            sách đa dạng như sách giáo khoa, văn học, truyện tranh,... Chúc bạn có trải
            nghiệm mua sắm tuyệt vời ở NoriStore.
            <br />
            <br />
            Là sản phẩm đầu tay cũng như là đứa con tinh thần của mình
            <br />
            <br />
            Thành viên sáng lập:
            <ul className="list-disc pl-4">
              <li>Ngô Thanh Phú</li>
            </ul>
            <br />
            Sứ mệnh của NoriStore là sẽ cũng cố hơn nữa về mặt kiến thức để có thể
            đưa nào hoạt động rộng rãi và chính thức
          </p>
        </div>
        <div className="md:w-[50%] sm:w-[100%] p-5 my-auto">
          <img
            src={aboutUsImg}
            alt="aboutusImg"
            className="rounded-xl w-[100%] "
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
