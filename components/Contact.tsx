import React from "react";

const Contact = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-900  ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto">
        <div className="">
          <p className="heading__mini" id="contact">Get In Touch</p>
          <h1 className="heading__primary">
             Lets make your <span className="text-primary">Brand</span>{" "}
            brilliant
          </h1>
          <p className="text-[15px] opacity-75 text-white mt-[1rem]  ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            officiis cupiditate debitis voluptas neque? Expedita, esse quam
            deleniti officia fugiat sed quas et, provident ratione saepe vero
            harum, alias non!
          </p>
          <h1 className="mt-[2rem] mb-[2rem] text-[30px]  text-primary underline font-bold  ">
            +62 823 3232 3232
          </h1>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center  ">
            <input
              type="text"
              placeholder="Name"
              className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
            />
            <input
              type="email"
              placeholder="Email"
              className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
            />
          </div>
          <input
            type="text"
            placeholder="subject"
            className="py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounedd-md px-4 "
          />
          <textarea
            placeholder="Message"
            name=""
            rows={4}
            id=""
            className="py-[0.7rem] w-full outline-none text-white bg-gray-800 px-4 rounded-md"
          ></textarea>
          <button className="py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full outline-none text-white bg-blue-700 hover:bg-blue-800 rounded-md px-4 ">
            Sumbit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
