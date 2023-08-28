import React, { useEffect, useState } from "react";

const Main03 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 0 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === numSlides - 1 ? numSlides - 1 : prevSlide + 1
    );
  };

  const numSlides = 3;

  useEffect(() => {
    const carouselItems = document.querySelectorAll("[data-carousel-item]");
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
      {/* CAROUSEL 02 */}
      <div className="bg-secondary">
        <div className="h-full relative z-10 block x:hidden">
          <div
            id="default-carousel"
            className="relative w-full p-7"
            data-carousel="slide"
          >
            <h1 className="text-fourth font-semibold text-center text-3xl md:text-5xl x:text-2xl">
              Payment methods
            </h1>

            <div className="relative h-full overflow-hidden rounded-lg ">
              <div data-carousel-item>
                <div className="flex justify-center items-center h-full x:flex-row">
                  {/* Slide 1 */}

                  <div className="duration-700 ease-in-out flex flex-col justify-center items-center h-full w-full text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="white"
                      className="w-10 h-10"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                      />
                    </svg>

                    <p className="text-fourth text-center p-3 font-normal tracking-wide">
                      Cash
                    </p>
                  </div>

                  {/* ---02--- */}
                  <div className="flex flex-col justify-center items-center h-full w-full my-10 text-lg">
                  <svg
                      className="w-10 h-10"
                      viewBox="0 0 24 24"
                      fill="#AC9C8D"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 9H21M7 15H9M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="text-fourth text-center p-3 font-normal tracking-wide">
                      Credit card
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2*/}
            <div className="relative h-full overflow-hidden rounded-lg ">
              <div data-carousel-item>
                <div className="flex justify-center items-center h-full x:flex-row">
                  <div className="duration-700 ease-in-out flex flex-col justify-center items-center h-full w-full text-lg">
                    <svg
                      className="w-10 h-10"
                      viewBox="0 0 24 24"
                      fill="#AC9C8D"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 9H21M7 15H9M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <p className="text-fourth text-center p-3 font-normal tracking-wide">
                      MasterCard
                    </p>
                  </div>

                  {/* ---02--- */}
                  <div className="flex flex-col justify-center items-center h-full w-full my-10 text-lg">
                    <svg
                      className="w-10 h-10"
                      viewBox="0 0 24 24"
                      fill="#AC9C8D"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 9H21M7 15H9M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <p className="text-fourth text-center p-3 font-normal tracking-wide">
                      Visa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3*/}

            <div className="relative h-full overflow-hidden rounded-lg ">
              <div data-carousel-item>
                <div className="flex justify-center items-center h-full x:flex-row">
                  <div className="duration-700 ease-in-out flex flex-col justify-center items-center h-full w-full text-lg">
                    <svg
                      className="w-10 h-10"
                      viewBox="0 0 24 24"
                      fill="#AC9C8D"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 9H21M7 15H9M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="text-fourth text-center p-3 font-normal tracking-wide">
                      Revolut
                    </p>
                  </div>

                  {/* ---02--- */}
                  <div className="flex flex-col justify-center items-center h-full w-full my-10 text-lg">
                    <svg
                      className="w-10 h-10"
                      viewBox="0 0 24 24"
                      fill="#AC9C8D"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 9H21M7 15H9M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <p className="text-fourth text-center p-3 font-normal tracking-wide">
                      Maestro
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ... Repeat similar structure for other slides ... */}

            {/* Slide indicators */}
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-2 left-1/2">
              {[...Array(numSlides)].map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`w-3 h-3 rounded-full border-2 block ${
                    index === currentSlide ? "bg-primary" : "border-fouth"
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
              onClick={handlePrevSlide}
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
              onClick={handleNextSlide}
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



        <div className="hidden x:block">
          <div className="h-full flex justify-center items-center">
            {" "}
            <h1 className="text-fourth font-semibold text-center text-3xl md:text-5xl x:text-5xl mt-5">
              Payment methods
            </h1>
          </div>
          <div className="h-full flex justify-center items-center gap-20">
            <div className="flex justify-center items-center h-full gap-20 x:flex-row">
              {/* Slide 1 */}

              <div className="duration-700 ease-in-out flex flex-col justify-center items-center h-full w-full text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="white"
                  className="w-14 h-14"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                  />
                </svg>

                <p className="text-fourth text-center p-3 font-normal tracking-wide">
                  Cash
                </p>
              </div>

              {/* ---02--- */}
              <div className="flex flex-col justify-center items-center h-full w-full my-10 text-lg">
              <svg
                  className="w-14 h-14"
                  viewBox="0 0 24 24"
                  fill="#AC9C8D"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9H21M7 15H9M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p className="text-fourth text-center p-3 font-normal tracking-wide w-[8rem]">
                  Credit card
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="flex justify-center items-center h-full gap-20 ">
              <div className="duration-700 ease-in-out flex flex-col justify-center items-center h-full w-full text-lg">
                <svg
                  className="w-14 h-14"
                  viewBox="0 0 24 24"
                  fill="#AC9C8D"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9H21M7 15H9M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p className="text-fourth text-center p-3 font-normal tracking-wide">
                  MasterCard
                </p>
              </div>

              {/* ---02--- */}
              <div className="flex flex-col justify-center items-center h-full w-full my-10 text-lg">
                <svg
                  className="w-14 h-14"
                  viewBox="0 0 24 24"
                  fill="#AC9C8D"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9H21M7 15H9M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p className="text-fourth text-center p-3 font-normal tracking-wide">
                  Visa
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="flex justify-center items-center h-full gap-20">
              <div className="duration-700 ease-in-out flex flex-col justify-center items-center h-full w-full text-lg">
                <svg
                  className="w-14 h-14"
                  viewBox="0 0 24 24"
                  fill="#AC9C8D"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9H21M7 15H9M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="text-fourth text-center p-3 font-normal tracking-wide">
                  Revolut
                </p>
              </div>

              {/* ---02--- */}
              <div className="flex flex-col justify-center items-center h-full w-full my-10 text-lg">
                <svg
                  className="w-14 h-14"
                  viewBox="0 0 24 24"
                  fill="#AC9C8D"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9H21M7 15H9M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p className="text-fourth text-center p-3 font-normal tracking-wide">
                  Maestro
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main03;
