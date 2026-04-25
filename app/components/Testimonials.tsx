"use client";

import Image from "next/image";
import { useState } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviewDetails = [
    {
      photo: "",
      name: "Aisha Yusuf",
      position: "Founder, CraftHub NG",
      review:
        "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
    },
    {
      photo: "",
      name: "John Davies",
      position: "Marketing Manager, E-Commerce Emporium",
      review:
        "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
    },
    {
      photo: "",
      name: "Chinonso Nwankwo",
      position: "HR Director, FutureTech Solutions",
      review:
        "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
    },
    {
      photo: "",
      name: "Rita Ahmed",
      position: "Creative Director, ArtInnovate Studios",
      review:
        "The Creative and Digital Media services at Tobams Group brought our ideas to life. Simple, creative, and impactful – exactly what we needed for our projects.",
    },
    {
      photo: "",
      name: "David Johnson",
      position: "Small Business Owner",
      review:
        "Tobams Group's Digital Marketing tips transformed my small business. Their guidance is simple, effective, and perfect for anyone looking to grow online.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewDetails.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + reviewDetails.length) % reviewDetails.length,
    );
  };

  // Get visible testimonials based on screen size
  const getVisibleTestimonials = () => {
    // For mobile: show 1
    // For large screens: show 3 with preview of next
    return [
      reviewDetails[currentIndex],
      reviewDetails[(currentIndex + 1) % reviewDetails.length],
      reviewDetails[(currentIndex + 2) % reviewDetails.length],
    ];
  };

  return (
    <section className="py-8 lg:py-16">
      <main className="section flex flex-col gap-6 lg:gap-10 items-end">
        <div className="flex flex-col items-center gap-6 lg:gap-10">
          <h2 className="headings">Testimonials</h2>

          <div className="relative overflow-hidden">
            {/* Mobile: Show 1, Desktop: Show 3 */}
            <div className="flex gap-6 transition-transform duration-300 ease-in-out">
              {/* Mobile view - show current testimonial only */}
              <div className="lg:hidden w-full">
                <div className="bg-white border-l-2 border-secondary rounded-lg py-5 px-6">
                  <div className="flex gap-5">
                    <Image
                      src="/profile-img.svg"
                      alt="profile"
                      width={44}
                      height={44}
                      className="rounded-full"
                    />

                    <div className="flex flex-col">
                      <h5 className="font-semibold text-[16px]">
                        {reviewDetails[currentIndex].name}
                      </h5>
                      <p className="text-sm text-subdue">
                        {reviewDetails[currentIndex].position}
                      </p>
                    </div>
                  </div>

                  <p className="text-[14px] mt-6">
                    {reviewDetails[currentIndex].review}
                  </p>
                </div>
              </div>

              {/* Desktop view - show 3 testimonials with preview */}
              <div className="hidden lg:flex gap-6">
                {getVisibleTestimonials().map((item, index) => (
                  <div
                    key={item.name}
                    className={`bg-white border-l-2 border-secondary rounded-lg py-5 px-6 transition-all duration-300 ${
                      index === 0
                        ? "opacity-100 scale-100"
                        : "opacity-60 scale-95"
                    }`}
                  >
                    <div className="flex gap-5">
                      <Image
                        src="/profile-img.svg"
                        alt="profile"
                        width={44}
                        height={44}
                        className="rounded-full"
                      />

                      <div className="flex flex-col">
                        <h5 className="font-semibold text-[16px]">
                          {item.name}
                        </h5>
                        <p className="text-sm text-subdue">{item.position}</p>
                      </div>
                    </div>

                    <p className="text-[14px] mt-6">{item.review}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* button control */}
        <div className="flex gap-3">
          <button onClick={prevSlide} className="cursor-pointer">
            <Image
              src="/arrow-left.svg"
              alt="arrow-left"
              width={32}
              height={32}
            />
          </button>
          <button onClick={nextSlide} className="cursor-pointer">
            <Image
              src="/arrow-right.svg"
              alt="arrow-right"
              width={32}
              height={32}
            />
          </button>
        </div>
      </main>
    </section>
  );
}
