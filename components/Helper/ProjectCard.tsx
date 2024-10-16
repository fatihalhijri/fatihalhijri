import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  tech1: string;
  tech2: string;
  tech3: string;
  tech4: string;
  deskripsi: string;
  image: string;
}

const ProjectCard = ({
  title,
  tech1,
  tech2,
  tech3,
  tech4,
  image,
  deskripsi,
}: Props) => {
  return (
    <div id="project" className="  grid w-[80%] mx-auto py-[5rem]  grid-cols-1 md:grid-cols-1  items-center gap-8">
      {/* Image Section */}
      <div className="p-4 rounded-xl relative cursor-pointer hover:-rotate-3 transform transition-all duration-300 ease-out hover:scale-105">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="object-contain rounded-xl mx-auto shadow-lg"
        />
      </div>

      {/* Text and Button Section */}
      <div>
        <h1 className="text-2xl font-bold text-black/70 mb-4">{title}</h1>
        <p className="text-black/70 opacity-75 text-lg mb-6">{deskripsi}</p>

        {/* Tech Stack Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <h1 className="px-6 py-3 bg-blue-700 text-black/70 font-semibold  text-center shadow-lg transition-all hover:bg-blue-600">
            {tech1}
          </h1>
          <h1 className="px-6 py-3 bg-teal-500 text-black/70 font-semibold  text-center shadow-lg transition-all hover:bg-teal-200">
            {tech2}
          </h1>
          <h1 className="px-6 py-3 bg-sky-500 text-black/70 font-semibold  text-center shadow-lg transition-all hover:bg-sky-400">
            {tech3}
          </h1>
          <h1 className="px-6 py-3 bg-blue-500 text-black/70 font-semibold  text-center shadow-lg transition-all hover:bg-blue-400">
            {tech4}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
