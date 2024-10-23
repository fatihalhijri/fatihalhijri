import React from "react";
import ServiceCard from "./Helper/ServiceCard";

const Service = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-white dark:bg-dark ">
      <div className="text-center text-white">
        <p className="heading__mini" id="service">Yang Sering Dilakukan</p>
        <h1 className="heading__primary">
        Pemrograman Yang Biasa <br /><span className="text-primary">Dilakukan</span> 
        </h1>
      </div>
      <div className="md:pt-[5rem] pt-[2rem] w-[80%]  mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-[3rem] items-center ">
        <div>
            <ServiceCard title="React Website" num="01" desc="Membangun UI dinamis dengan komponen reusable menggunakan ReactJS." img="layer"  />
        </div>
        <div>
            <ServiceCard title="Next Website" num="02" desc="Membuat website cepat dengan server-side rendering menggunakan Next.js." img="layer" />
        </div>
        <div>
            <ServiceCard title="FullStack Website" num="03" desc="Membangun aplikasi lengkap dengan frontend dan backend terintegrasi." img="layer" />
        </div>
        <div>
            <ServiceCard title="Node JS Apis" num="04" desc="Mengembangkan server yang cepat dan scalable menggunakan Node.js." img="layer" />
        </div>
        <div>
            <ServiceCard title="Website Design" num="05" desc="Merancang website responsif dan nyaman untuk semua perangkat." img="layer" />
        </div>
        <div>
            <ServiceCard title="Bug Fixing Website" num="06" desc="Memperbaiki bug dan memastikan website berjalan lancar." img="layer" />
        </div>
      </div>
    </div>
  );
};

export default Service;
