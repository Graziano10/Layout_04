import React, { useEffect, useState } from "react";
import Main02 from "./Main02";
import Main03 from "./Main03";

const Main = () => {
  return (
    <>
      <main>
        <div className="bg-secondary h-[25rem] p-5 flex flex-col justify-center items-center gap-5 text-center text-fourth tracking-wide x:h-[15rem]">
          <h1 className="font-bold text-3xl">Flow Sushi | NewYork</h1>
          <p className="font-semibold text-lg x:max-w-2xl">
            "A style that meets East and West. nothing is left to chance, a menu
            designed to give emotions. You always cook with someone in mind,
            otherwise you just make food."
          </p>
        </div>
        <div className="bg-secondary h-auto pt-10">
          {/* GRID */}
          <div className="flex flex-col justify-center items-center h-full x:hidden">
            <div className="grid grid-cols-2 grid-rows gap-2">
              <div className="col-span-2 row-span-1 w-full h-[15rem] s:h-[18rem] s:w-[25rem] md:h-[30rem] md:w-[40rem] x:h-[40rem] x:w-[50rem] ">
                <img
                  src="src\assets\pexels-photo-7719906.jpeg"
                  className="w-full h-full"
                />
              </div>
              <div className="h-[13rem] md:h-[18rem]">
                <img
                  src="/src/assets/pexels-photo-3296392.jpeg"
                  alt="Uramaki"
                  className="w-full h-full"
                />
              </div>
              <div className="h-[13rem] md:h-[18rem]">
                <img
                  src="/src/assets/pexels-photo-3296392.jpeg"
                  alt="Uramaki"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="x:hidden block">
            <div className="h-full flex justify-center items-center">
              <button className=" text-primary text-semibold w-72 h-10 m-8 x:mb-8 tracking-wide border-double border-4 border-primary">
                GALLERY: OUR SPECIALTIES
              </button>
            </div>
          </div>

          {/* X */}
          <div className="hidden x:block">
            <div className="flex h-full justify-center items-center gap-16 p-10">
              {/* CARD 01 */}
              <div className="max-w-sm bg-primary rounded-lg shadow">
                <a href="#">
                  <img
                    className="rounded-t-lg bg-cover bg-center h-[25rem] w-full"
                    src="src\assets\pexels-photo-3296392.jpeg"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#" className="text-fourth">
                    <h5 className="mb-2 text-2xl font-bold tracking-wide">
                      Uramaki Dragon
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-fourth tracking-wide">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </div>
              </div>
              {/* CARD 02*/}
              <div className="max-w-sm bg-primary rounded-lg shadow">
                <a href="#">
                  <img
                    className="rounded-t-lg bg-cover bg-center h-[25rem] w-full"
                    src="src\assets\pexels-photo-3296392.jpeg"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#" className="text-fourth">
                    <h5 className="mb-2 text-2xl font-bold tracking-wide">
                      Uramaki Dragon
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-fourth tracking-wide">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </div>
              </div>
              {/* CARD 03 */}
              <div className="max-w-sm bg-primary rounded-lg shadow">
                <a href="#">
                  <img
                    className="rounded-t-lg bg-cover bg-center h-[25rem] w-full"
                    src="src\assets\pexels-photo-3296392.jpeg"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#" className="text-fourth">
                    <h5 className="mb-2 text-2xl font-bold tracking-wide">
                      Uramaki Dragon
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-fourth tracking-wide">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </div>
              </div>
            </div>

            {/* --- */}
            <div className="h-full flex justify-center items-center">
              <button className=" text-primary text-semibold w-72 h-10 mb-8 tracking-wide border-double border-4 border-primary">
                GALLERY: OUR SPECIALTIES
              </button>
            </div>
          </div>
        </div>

        {/* ----------------------------------- */}

        <Main02 />

        {/* ----- */}
        
          <Main03 />

        <div className="bg-primary">05</div>
      </main>
    </>
  );
};

export default Main;
