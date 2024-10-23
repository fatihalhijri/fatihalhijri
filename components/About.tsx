import { CheckIcon } from "@heroicons/react/16/solid";
import React from "react";
import SkillCard from "./Helper/SkillCard";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Muhammad_Fatih_Alhijri.pdf"; // Path ke file PDF di folder 'public'
    link.download = "Muhammad_Fatih_Alhijri.pdf"; // Nama file yang akan didownload
    link.click();
  };
  return (
    <div className="mt-[-3.5rem] pt-[5rem] pb-[3rem] bg-black/10 dark:bg-darkTua ">
      <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center ">
      <div className="col-span-3 ">
          <p className="heading__mini" id="tentang">
            Tentang Saya
          </p>
          <h1 className="heading__primary">
            <span className="text-primary">Programmer </span> Muda{" "}
          </h1>
          <p className="text-[15px] mt-[1.5rem] text-black/70 dark:text-white opacity-75 pb-5">
            Saya adalah seorang programmer pemula yang sedang mendalami
            pengembangan web. Saya antusias belajar teknologi baru dan terus
            berusaha meningkatkan keterampilan saya dalam membuat aplikasi yang
            efisien dan berkualitas.
          </p>
          <button
            // onClick={handleDownload}
            className="before:ease  relative h-12 w-40 
                shadow-2xl overflow-hidden bg-orange-600 text-white font-semibold  before:absolute before:left-0 before:-ml-2  before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-green-700 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180"
          >
            <span className="relative z-10">Download CV</span>
          </button>
          
        </div>
        <div className="col-span-4  ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-[1rem] ">
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
              <SkillCard
                title={"HTML "}
                image={`/images/html.svg`}
                // percent={"80%"}
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-delay="200"
            >
              
              <SkillCard
                title={"CSS "}
                image={`/images/css.svg`}
                // percent={"89%"}
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-delay="400"
            >
              <SkillCard
                title={"JavaScript "}
                image={`/images/js.svg`}
                // percent={"77%"}
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-delay="600"
            >
              <SkillCard
                title={"TypeScript "}
                image={`/images/ts.svg`}
                // percent={"80%"}
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-delay="1000"
            >
              <SkillCard
                title={"Node JS "}
                image={`/images/node.svg`}
                // percent={"80%"}
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-delay="1100"
            >
              <SkillCard
                title={"React Js "}
                image={`/images/react.svg`}
                // percent={"80%"}
              />
            </div>
            {/* <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-delay="1200"
            >
              <SkillCard
                title={"MonggoDB "}
                image={`/images/mongo.svg`}
                // percent={"80%"}
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-delay="1400"
            >
              <SkillCard
                title={"Python "}
                image={`/images/python.svg`}
                // percent={"80%"}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
