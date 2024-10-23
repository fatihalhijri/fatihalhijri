import React from 'react';

const HeroSection: React.FC = () => {
  const handleClick = () => {
    window.open('https://wa.me/6281234567890', '_blank'); // Ganti dengan nomor WhatsApp Anda
  };

  return (
    <div
      className="flex justify-center items-center h-[400px] bg-gradient-to-r from-gray-100 to-gray-200 bg-cover bg-center"
      style={{
        backgroundImage: " url('/wave/wave-1.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        backgroundSize: "cover"
      }}
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-5">
          Let's Write Your Story Together
        </h1>
        <button
          className="bg-black text-white py-2 px-6 rounded-lg text-lg transition transform duration-300 hover:bg-gray-700 hover:scale-105"
          onClick={handleClick}
        >
          Send a Message
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
