import React, { useEffect, useState } from "react";

const Main02 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide2 = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 0 : prevSlide - 1));
  };

  const handleNextSlide2 = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === numSlides2 - 1 ? numSlides2 - 1 : prevSlide + 1
    );
  };

  const numSlides2 = 4; // Total number of slides

  useEffect(() => {
    const carouselItems = document.querySelectorAll("[data-carousel-item2]");
    const slideIndicators = document.querySelectorAll(
      "[data-carousel-slide-to]"
    );

    carouselItems.forEach((item, index) => {
      if (index === currentSlide) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });

    slideIndicators.forEach((indicator, index) => {
      if (index === currentSlide) {
        indicator.setAttribute("aria-current", "true");
      } else {
        indicator.setAttribute("aria-current", "false");
      }
    });
  }, [currentSlide]);

  return (
    <>
      {/* CAROUSEL 01 */}
      <div className="bg-primary">
        <div className="h-full relative z-10 block x:hidden">
          <div
            id="default-carousel"
            className="relative w-full p-7"
            data-carousel="slide"
          >
            <h1 className="text-fourth font-semibold text-center text-3xl md:text-5xl x:text-5xl">
              Services
            </h1>

            <div className="relative h-full overflow-hidden rounded-lg ">
              <div data-carousel-item2>
                <div className="flex justify-center items-center h-full x:flex-row">
                  {/* Slide 1 */}

                  <div className="duration-700 ease-in-out flex flex-col justify-center items-center h-full w-full text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="white"
                      class="w-10 h-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>

                    <p className="text-fourth text-center p-3 font-normal tracking-wide">
                      Accessibility
                    </p>
                  </div>

                  {/* ---02--- */}
                  <div className="flex flex-col justify-center items-center h-full w-full my-10 text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="white"
                      class="w-10 h-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
                      />
                    </svg>

                    <p className="text-fourth text-center p-3 font-normal tracking-wide">
                      Menù
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2*/}
            <div className="relative h-full overflow-hidden rounded-lg ">
              <div data-carousel-item2>
                <div className="flex justify-center items-center h-full x:flex-row">
                  <div className="duration-700 ease-in-out flex flex-col justify-center items-center h-full w-full text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="white"
                      class="w-10 h-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>

                    <p className="text-fourth text-center p-3 font-normal tracking-wide">
                      Outdoor tables
                    </p>
                  </div>

                  {/* ---02--- */}
                  <div className="flex flex-col justify-center items-center h-full w-full my-10 text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="white"
                      class="w-10 h-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>

                    <p className="text-fourth text-center p-3 font-normal tracking-wide">
                      Wi-fi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3*/}

            <div className="relative h-full overflow-hidden rounded-lg ">
              <div data-carousel-item2>
                <div className="flex justify-center items-center h-full x:flex-row">
                  <div className="duration-700 ease-in-out flex flex-col justify-center items-center h-full w-full text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="white"
                      class="w-10 h-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>

                    <p className="text-fourth text-center p-3 font-normal tracking-wide">
                      Take away
                    </p>
                  </div>

                  {/* ---02--- */}
                  <div className="flex flex-col justify-center items-center h-full w-full my-10 text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="white"
                      class="w-10 h-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                      />
                    </svg>

                    <p className="text-fourth text-center p-3 font-normal tracking-wide">
                      Cosy
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 4*/}
            <div className="relative h-full overflow-hidden rounded-lg ">
              <div data-carousel-item2>
                <div className="flex justify-center items-center h-full x:flex-row">
                  <div className="duration-700 ease-in-out flex flex-col justify-center items-center h-full w-full text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="white"
                      class="w-10 h-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                      />
                    </svg>

                    <p className="text-fourth text-center p-3 font-normal tracking-wide">
                      Smile
                    </p>
                  </div>

                  {/* ---02--- */}
                  <div className="flex flex-col justify-center items-center h-full w-full my-10 text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="white"
                      class="w-10 h-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                      />
                    </svg>

                    <p className="text-fourth text-center p-3 font-normal tracking-wide">
                      We accept animals
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ... Repeat similar structure for other slides ... */}

            {/* Slide indicators */}
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-2 left-1/2">
              {[...Array(numSlides2)].map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`w-3 h-3 rounded-full border-2 block ${
                    index === currentSlide ? "bg-secondary" : "border-fouth"
                  }`}
                  aria-current={index === currentSlide ? "true" : "false"}
                  aria-label={`Slide ${index + 1}`}
                  data-carousel-slide-to={index}
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))}
            </div>

            {/* Slider bcontrols */}
            <button
              type="button"
              className="absolute top-[45%] left-[0%] z-30 h-auto px-4 cursor-pointer x:left-[1%]"
              data-carousel-prev
              onClick={handlePrevSlide2}
            >
              <div className="w-12 h-12 flex justify-center items-center x:w-20 x:h-20">
                <svg
                  className="w-4 h-4 text-fourth x:w-6 x:h-6 hover:text-invert"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </div>
            </button>
            <button
              type="button"
              className="absolute top-[45%] right-[0%] z-30 h-auto px-4 cursor-pointer bg-trasparent x:right-[1%]"
              data-carousel-next
              onClick={handleNextSlide2}
            >
              <div className="w-12 h-12 flex justify-center items-center x:w-20 x:h-20">
                <svg
                  className="w-4 h-4 text-fourth x:w-6 x:h-6 hover:text-invert"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* --- */}

        <div className="hidden x:block">
          <div className="h-full flex justify-center items-center">
            {" "}
            <h1 className="text-fourth font-semibold text-center text-3xl md:text-5xl x:text-5xl mt-5">
              Services
            </h1>
          </div>
          <div className="h-full flex justify-center items-center gap-10">
            <div className="flex justify-center items-center h-full gap-10 x:flex-row">
              {/* Slide 1 */}

              <div className="duration-700 ease-in-out flex flex-col justify-center items-center h-full w-full text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="white"
                  class="w-10 h-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>

                <p className="text-fourth text-center p-3 font-normal tracking-wide">
                  Accessibility
                </p>
              </div>

              {/* ---02--- */}
              <div className="flex flex-col justify-center items-center h-full w-full my-10 text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="white"
                  class="w-10 h-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
                  />
                </svg>

                <p className="text-fourth text-center p-3 font-normal tracking-wide w-[8rem]">
                  Menù
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="flex justify-center items-center h-full gap-10 ">
              <div className="duration-700 ease-in-out flex flex-col justify-center items-center h-full w-full text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="white"
                  class="w-10 h-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>

                <p className="text-fourth text-center p-3 font-normal tracking-wide">
                  Outdoor tables
                </p>
              </div>

              {/* ---02--- */}
              <div className="flex flex-col justify-center items-center h-full w-full my-10 text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="white"
                  class="w-10 h-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>

                <p className="text-fourth text-center p-3 font-normal tracking-wide">
                  Wi-fi
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="flex justify-center items-center h-full gap-10">
              <div className="duration-700 ease-in-out flex flex-col justify-center items-center h-full w-full text-lg">
              <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="white"
                      class="w-10 h-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                <p className="text-fourth text-center p-3 font-normal tracking-wide">
                  Take awey
                </p>
              </div>

              {/* ---02--- */}
              <div className="flex flex-col justify-center items-center h-full w-full my-10 text-lg">
              <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="white"
                      class="w-10 h-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                      />
                    </svg>

                <p className="text-fourth text-center p-3 font-normal tracking-wide">
                  Cosy
                </p>
              </div>
            </div>
            {/* 4 */}
            <div className="flex justify-center items-center h-full gap-10">
              <div className="duration-700 ease-in-out flex flex-col justify-center items-center h-full w-full text-lg">
              <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="white"
                      class="w-10 h-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                      />
                    </svg>

                <p className="text-fourth text-center p-3 font-normal tracking-wide">
                  Smile
                </p>
              </div>

              {/* ---02--- */}
              <div className="flex flex-col justify-center items-center h-full w-full my-10 text-lg">
              <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="white"
                      class="w-10 h-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                      />
                    </svg>

                <p className="text-fourth text-center p-3 font-normal tracking-wide">
                  We accept animals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main02;
