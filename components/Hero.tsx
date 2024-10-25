
import TypeWrite from "./Helper/TypeWrite";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const handleClick = () => {
    window.open("https://wa.me/6281234567890", "_blank");
  };

  return (
    <div className=" md:pt-[4vh]  h-[85vh] md:h-[100vh]   bg-white dark:bg-dark">
      <div className="flex justify-center flex-col  lg:w-[80%] md:w-[85%] w-[90%]  h-[100%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem]  items-center ">
          <div className="text-black/70 font-semibold text-base flex gap-5">
            {/* <h1 data-aos="fade-right text-base">WELCOME TO MY POTOFOLIO</h1> */}
            <div className="flex items-center">
              <div className="  lg:flex md:hidden flex-col lg:gap-5 md:gap-3 hidden   ">
                <div className="w-12 h-12 flex items-center justify-center rounded-full  dark:bg-white ">
                  <Link href={"https://www.instagram.com/el_hijri/"}>
                    <Image
                      alt="instagram"
                      src={"/images/instagram.png"}
                      width={100}
                      height={100}
                      className=" md:w-10 md:h-10  h-8 w-8"
                    />
                  </Link>
                </div>
                <div className="w-12 h-12 flex items-center justify-center rounded-full  dark:bg-white">
                  <Link
                    href={"https://www.linkedin.com/in/muhammad-fatih-alhijri/"}
                  >
                    <Image
                      alt="linkedIn"
                      src={"/images/linkedin.png"}
                      width={100}
                      height={100}
                      className="md:w-10 md:h-10  h-8 w-8"
                    />
                  </Link>
                </div>
                <div className="w-12 h-12 flex items-center justify-center rounded-full  dark:bg-white">
                  <Link href={"https://github.com/fatihalhijri"}>
                    <Image
                      alt="github"
                      src={"/images/github.png"}
                      width={100}
                      height={100}
                      className="md:w-10 md:h-10  h-8 w-8"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <h1 className="xl:text-[50px] lg:text-[40px] sm:text-[35px]  text-[25px] font-semibold leading-[3rem] text-black dark:text-white">
                Hi.Im <span className="text-primary ">Fatih</span>
              </h1>
              <TypeWrite></TypeWrite>
              <p className="mt-[1.2rem] text-[15px] md:text-17 dark:text-white  dark:opacity-85 text-black/70  font-medium text-base ">
                Selamat datang di portofolio saya! Di sini, Anda dapat melihat
                karya-karya saya di bidang pengembangan frontend dan desain
                grafis.
                {/* Selamat datang di portofolio saya! Di sini, Anda dapat melihat
                karya-karya saya di bidang pengembangan frontend dan desain
                grafis. Saya siap menghadapi tantangan baru dan terus belajar
                untuk menjadi lebih baik di setiap proyek. */}
              </p>
              <div className="  mt-[1rem] flex-row gap-2 lg:hidden  flex ">
                <div className="w-10 h-10 flex items-center justify-center rounded-full  dark:bg-white">
                  <Link href={"https://www.instagram.com/el_hijri/"}>
                    <Image
                      alt="instagram"
                      src={"/images/instagram.png"}
                      width={100}
                      height={100}
                      className=" h-8 w-8"
                      // className="md:w-12 md:h-12  h-8 w-8"
                    />
                  </Link>
                </div>
                <div className="w-10 h-10 flex items-center justify-center rounded-full  dark:bg-white">
                  <Link
                    href={"https://www.linkedin.com/in/muhammad-fatih-alhijri/"}
                  >
                    <Image
                      alt="linkedIn"
                      src={"/images/linkedin.png"}
                      width={100}
                      height={100}
                      className="  h-8 w-8"
                    />
                  </Link>
                </div>
                <div className="w-10 h-10 flex items-center justify-center rounded-full  dark:bg-white">
                  <Link href={"https://github.com/fatihalhijri"}>
                    <Image
                      alt="github"
                      src={"/images/github.png"}
                      width={100}
                      height={100}
                      className="  h-8 w-8"
                    />
                  </Link>
                </div>
              </div>
              <div className="mt-3 ">
                <button onClick={handleClick} className="text-center px-6 py-3 bg-primary  text-black/70 dark:text-white font-semibold   shadow-lg transition-all hover:bg-blue-600">
                  pekerjakan saya
                </button>
              </div>
              {/* <div className="mt-[1rem] flex items-center space-x-6  ">
                <button className="relative flex h-[50px] w-40 items-center font-semibold justify-center overflow-hidden bg-red-500 text-white  shadow-2xl  transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56  ">
                  <span className="relative z-10" onClick={handleClick}>
                    pekerjakan saya
                  </span>
                </button>
                
              </div> */}
            </div>
          </div>
          <div className="hidden md:flex ">
            {/* <Image
              // src={"/images/fatih-hero-L.png"}
              src={
                isDarkMode
                  ? "/images/fatih-hero-D.png"
                  : "/images/fatih-hero-L.png"
              }
              alt="hero"
              width={700}
              height={700}
              className="object-contain "
            /> */}
            {/* Light Mode Image */}
            <Image
              src="/images/fatih-hero-D.png"
              alt="hero "
              width={550}
              height={550}
              className="object-contain hidden dark:block"
            />
            <Image
              src="/images/fatih-hero-L.png"
              alt="hero"
              width={700}
              height={700}
              className="object-contain block dark:hidden"
            />
            {/* Dark Mode Image */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
