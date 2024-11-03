import React, { useState } from "react";
import ProjectCard from "./Helper/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";

const Project = () => {
  const projects = [
    {
      title: "FullStack MySmk Website Application",
      tech1: "React",
      tech2: "NextJs",
      tech3: "NodeJs",
      tech4: "NestJs",
      deskripsi:
        "Saya sudah berkolaborasi dengan SMK Madinatul Quran untuk membuat aplikasi website FullStack MySmk Madinatul Quran",
      image: "/images/mysmk.webp", // Ganti dengan path gambar sesuai
    },
    {
      title: "E-Commerce Website Design",
      tech1: "ReactJs",
      tech2: "NextJs",
      tech3: "Node Js",
      tech4: "TailwindCss",
      deskripsi:
        "Saya sudah menyelesaikan design simple website e-commerce sederhana bernama sabun Sunfia!",
      image: "/images/bg-sunfia.webp", // Ganti dengan path gambar sesuai
    },
    {
      title: "Website Perpustakaan",
      tech1: "ReactJs",
      tech2: "NextJs",
      tech3: "NestJs",
      tech4: "TypeScript",
      deskripsi: "Membangun Design website perpustakaan sederhana  ",
      image: "/images/bg-perpus.webp", // Ganti dengan path gambar sesuai
    },
    {
      title: "Basic Website Chat",
      tech1: "React",
      tech2: "NextJs",
      tech3: "Node Js",
      tech4: "TypeScript",
      deskripsi: "Sedang mengembangkan website chat, beberapa fitur utama selesai, namun belum sepenuhnya selesai.",
      image: "/images/bg-chat.png", // Ganti dengan path gambar sesuai
    },

    // Tambahkan project lainnya di sini
  ];
  const [showMore, setShowMore] = useState(false);

 
  const toggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  // Tentukan jumlah project yang akan ditampilkan berdasarkan status showMore
  const visibleProjects = showMore ? projects.length : 2;
  return (
    <div
      id="proyek"
      className="pt-[5rem] pb-[3rem] bg-black/10 dark:bg-darkTua"
    >
      <div className="text-center">
        <p className="heading__mini">Proyek Terbaru</p>
        <h1 className="heading__primary">
          <span className="text-primary">Proyek </span> Saya
        </h1>
      </div>
      <div className="grid lg:grid-cols-2  md:w-[90%] w-[100%] mx-auto">
        <AnimatePresence>
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }} // Awal: tidak terlihat
              animate={{ opacity: 1 }} // Setelah render: terlihat
              exit={{ opacity: 0 }} // Saat keluar: hilang
              transition={{ duration: 0.5 }} // Durasi animasi 0.5 detik
            >
              <ProjectCard
                key={index}
                title={project.title}
                tech1={project.tech1}
                tech2={project.tech2}
                tech3={project.tech3}
                tech4={project.tech4}
                deskripsi={project.deskripsi}
                image={project.image}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="text-center flex justify-center  mt-10 ">
        <button
          onClick={toggleShowMore}
          className="relative flex flex-row  h-[50px] w-[81%] items-center font-semibold justify-center  bg-primary text-white  shadow-2xl    "
        >
          {showMore ? "Lihat Lebih Sedikit" : "Lihat Lebih Banyak"}{" "}
          {showMore ? (
            <ChevronUpIcon width={28} height={28} />
          ) : (
            <ChevronDownIcon width={28} height={28} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Project;
