import React from "react";
import SkillCard from "./Helper/SkillCard";

const Skill = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black/10 ">
      <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center ">
        <div className="col-span-3">
          <p className="heading__mini">My Skill</p>
          <h1 className="heading__primary">
            Lets Explore Popular <span className="text-primary">Skill</span>{" "}
            & Experience
          </h1>
          <p className="text-[15px] mb-[1.5rem]  text-black/70 opacity-70 mt-[1.5rem] ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui autem
            distinctio sit rerum, cumque laboriosam eum recusandae illo quo
            beatae eveniet explicabo dolorum, et mollitia ad omnis? Mollitia, ea
            molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Facilis, repellendus?
          </p>
          {/* <button className="relative flex h-[50px] w-40 items-center font-semibold justify-center overflow-hidden bg-red-500 text-white  shadow-2xl  transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56  ">
            <span className="relative z-10">Hire Me</span>
          </button> */}
        </div>
        <div className="col-span-4  ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] ">
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" >
              <SkillCard
                title={"HTML "}
                image={`/images/html.svg`}
                // percent={"80%"}
              />
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
              <SkillCard
                title={"CSS "}
                image={`/images/css.svg`}
                // percent={"89%"}
              />
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="400">
              <SkillCard
                title={"JavaScript "}
                image={`/images/js.svg`}
                // percent={"77%"}
              />
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="600">
              <SkillCard
                title={"TypeScript "}
                image={`/images/ts.svg`}
                // percent={"80%"}
              />
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="1000">
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
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="1200">
              <SkillCard
                title={"MonggoDB "}
                image={`/images/mongo.svg`}
                // percent={"80%"}
              />
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="1400">
              <SkillCard
                title={"Python "}
                image={`/images/python.svg`}
                // percent={"80%"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
