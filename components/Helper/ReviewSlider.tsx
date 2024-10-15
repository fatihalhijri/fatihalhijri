import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReviewCard from "./ClientReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1300, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ReviewSlider = () => {
  return (
    <div>
      <Carousel
        responsive={responsive}
        additionalTransfrom={0}
        arrows={true}
        autoPlay={true} // Menambahkan autoPlay
        autoPlaySpeed={2000} // Mengatur kecepatan menjadi 2 detik (2000 ms)
        centerMode={false}
        infinite
        itemClass="item"
      >
        <ClientReviewCard
          img="/images/user1.jpg"
          user="Fatih Al hijri"
          role="Web Developer"
        />
        <ClientReviewCard
          img="/images/user2.jpg"
          user="Ariiq Maazin Hibatullah"
          role="FullStack Developer"
        />
        <ClientReviewCard
          img="/images/user3.jpg"
          user="Abdul Aziz"
          role="Design Grafis"
        />
        <ClientReviewCard
          img="/images/user4.jpg"
          user="Muhammad Fiqri"
          role="React Developer"
        />
        <ClientReviewCard
          img="/images/user3.jpg"
          user="Fathir Anafi"
          role="UI/UX Grafis "
        />
      </Carousel>
    </div>
  );
};

export default ReviewSlider;
