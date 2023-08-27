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

  const numSlides2 = 5; // Total number of slides

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
        <div className="h-full relative z-10">
          <div
            id="default-carousel"
            className="relative w-full p-7"
            data-carousel="slide"
          >
            <h1 className="text-fourth mb-9 font-semibold text-center text-3xl md:text-5xl x:text-6xl">
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
                      stroke-width="1.0"
                      stroke="white"
                      className="w-10 h-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>

                    <p className="text-fourth text-center p-3 font-normal tracking-wide">
                      Lorem ipsum
                    </p>
                  </div>

                  {/* ---02--- */}
                  <div className="flex flex-col justify-center items-center h-full w-full my-10 text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="white"
                      className="w-10 h-10"
                    >
                      <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
                    </svg>
                    <p className="text-fourth text-center font-normal tracking-wide">
                      Lorem ipsum
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2*/}
            <div className="relative h-full overflow-hidden rounded-lg ">
              <div data-carousel-item2>
                <div className="flex justify-center items-center h-full x:flex-row">
                  {/* Slide 1 */}

                  <div className="duration-700 ease-in-out flex flex-col justify-center items-center h-full w-full text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.0"
                      stroke="white"
                      className="w-10 h-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>

                    <p className="text-fourth text-center p-3 font-normal tracking-wide">
                      Lorem ipsum
                    </p>
                  </div>

                  {/* ---02--- */}
                  <div className="flex flex-col justify-center items-center h-full w-full my-10 text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="white"
                      className="w-10 h-10"
                    >
                      <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
                    </svg>
                    <p className="text-fourth text-center font-normal tracking-wide">
                      Lorem ipsum
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3*/}

            <div className="relative h-full overflow-hidden rounded-lg ">
              <div data-carousel-item2>
                <div className="flex justify-center items-center h-full x:flex-row">
                  {/* Slide 1 */}

                  <div className="duration-700 ease-in-out flex flex-col justify-center items-center h-full w-full text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.0"
                      stroke="white"
                      className="w-10 h-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>

                    <p className="text-fourth text-center p-3 font-normal tracking-wide">
                      Lorem ipsum
                    </p>
                  </div>

                  {/* ---02--- */}
                  <div className="flex flex-col justify-center items-center h-full w-full my-10 text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="white"
                      className="w-10 h-10"
                    >
                      <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
                    </svg>
                    <p className="text-fourth text-center font-normal tracking-wide">
                      Lorem ipsum
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 4*/}

            <div className="relative h-full overflow-hidden rounded-lg ">
              <div data-carousel-item2>
                <div className="flex justify-center items-center h-full x:flex-row">
                  {/* Slide 1 */}

                  <div className="duration-700 ease-in-out flex flex-col justify-center items-center h-full w-full text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.0"
                      stroke="white"
                      className="w-10 h-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>

                    <p className="text-fourth text-center p-3 font-normal tracking-wide">
                      Lorem ipsum
                    </p>
                  </div>

                  {/* ---02--- */}
                  <div className="flex flex-col justify-center items-center h-full w-full my-10 text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="white"
                      className="w-10 h-10"
                    >
                      <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
                    </svg>
                    <p className="text-fourth text-center font-normal tracking-wide">
                      Lorem ipsum
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 5*/}
            <div className="relative h-full overflow-hidden rounded-lg ">
              <div data-carousel-item2>
                <div className="flex justify-center items-center h-full x:flex-row">
                    
                  {/* Slide 1 */}

                  <div className="duration-700 ease-in-out flex flex-col justify-center items-center h-full w-full text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.0"
                      stroke="white"
                      className="w-10 h-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>

                    <p className="text-fourth text-center p-3 font-normal tracking-wide">
                      Lorem ipsum
                    </p>
                  </div>

                  {/* ---02--- */}
                  <div className="flex flex-col justify-center items-center h-full w-full my-10 text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="white"
                      className="w-10 h-10"
                    >
                      <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
                    </svg>
                    <p className="text-fourth text-center font-normal tracking-wide">
                      Lorem ipsum
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
                    index === currentSlide ? "border-invert" : "border-black"
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
              className="absolute top-[50%] left-[-2%] z-30 h-auto px-4 cursor-pointer"
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
              className="absolute top-[50%] right-[-2%] z-30 h-auto px-4 cursor-pointer bg-trasparent"
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
      </div>
    </>
  );
};

export default Main02;
