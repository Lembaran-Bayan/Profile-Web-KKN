import Image from "next/image";
import Logo from "@/../public/Logo.png";
import Instagram from "@/../public/Instagram.png";
import Gmail from "@/../public/Gmail.png";
import Tiktok from "@/../public/Tiktok.png";
import DecoSwirl from "@/../public/DecoSwirl.png";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>KKN-PPM UGM Lembaran Bayan</title>
        <link rel="shortcut icon" href="/Logo.png" type="image/x-icon" />
      </Head>
      <main className="bg-[url('/Tim.png')] font-jakarta bg-cover bg-center min-h-screen flex flex-col justify-between pt-[60px] pb-[40px] md:pb-[80px] items-center text-black backdrop-blur-[20px] overflow-hidden">
        <div
          data-aos="fade-down"
          className="max-w-[90%] bg-gradient-to-br from-white/30 to-white/15 z-[1] rounded-[20px] flex justify-center items-center px-8 lg:px-10 py-4 outline outline-white/60 backdrop-blur-[8px] flex-col md:flex-row gap-2 md:gap-5"
        >
          <Image
            src={Logo}
            alt="Logo"
            className="w-[60px]"
          />
          <div className="relative">
            <h1 className="text-[18px] md:text-[25px] 2xl:text-[32px] text-center text-white z-[1] font-jakarta">
              KKN-PPM <span className="font-bold italic">Lembaran Bayan</span> 2024
            </h1>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="z-[1] flex items-center gap-2 md:gap-5 bg-gradient-to-br from-white/30 to-white/15 px-5 py-2 rounded-[10px] outline outline-white/60 font-semibold text-white flex-wrap max-w-[85%] justify-center backdrop-blur-[8px]"
        >
          <a
            target="_blank"
            rel="norel noreferrer"
            className="flex items-center gap-2 hover:underline text-[14px] sm:text-[16px]"
            href="https://instagram.com/lembaran.bayan"
          >
            <Image
              src={Instagram}
              alt="Instagram"
              className="w-[25px] sm:w-[29px] my-2"
            />
            <span>lembaran.bayan</span>
          </a>
          <a
            target="_blank"
            rel="norel noreferrer"
            className="flex items-center gap-2 hover:underline text-[14px] sm:text-[16px]"
            href="https://www.tiktok.com/@lembaran.bayan"
          >
            <Image
              src={Tiktok}
              alt="Instagram"
              className="w-[40px] md:w-[46px]"
            />
            <span>lembaran.bayan</span>
          </a>
          <a
            target="_blank"
            rel="norel noreferrer"
            className="flex items-center gap-2 hover:underline text-[14px] sm:text-[16px]"
            href="mailto:lembaranbayan@gmail.com"
          >
            <Image
              src={Gmail}
              alt="Instagram"
              className="w-[43px] md:w-[46px] my-2"
            />
            <span>lembaranbayan@gmail.com</span>
          </a>
        </div>

        <div
          className="absolute top-0 left-0"
          data-aos="fade-right"
          data-aos-delay="800"
        >
          <Image
            src={DecoSwirl}
            alt=""
            className="w-[300px] sm:w-[350px] md:w-[400px] translate-x-[-30%] translate-y-[-10%]"
          />
        </div>
        <div
          className="absolute bottom-0 right-0"
          data-aos="fade-left"
          data-aos-delay="1000"
        >
          <Image
            src={DecoSwirl}
            alt=""
            className="w-[300px] sm:w-[350px] md:w-[400px] translate-x-[30%] translate-y-[15%] rotate-[150deg]"
          />
        </div>
        {/* overlay */}
        <div className="w-screen h-screen absolute top-0 bg-gradient-to-br from-[#298C86]/40 to-[#FAFF04]/25" />
      </main>
    </>
  );
}

