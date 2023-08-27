const Main = () => {
  return (
    <>
      <main>
        <div className="bg-secondary h-[25rem] p-5 flex flex-col justify-center items-center gap-5 text-center text-fourth tracking-wide">
          <h1 className="font-bold text-3xl">Flow Sushi | NewYork</h1>
          <p className="font-semibold text-lg x:max-w-2xl">
            "A style that meets East and West. nothing is left to chance, a menu
            designed to give emotions. You always cook with someone in mind,
            otherwise you just make food."
          </p>
        </div>
        <div className="bg-secondary h-auto">
          {/* GRID */}
          <div className="flex flex-col justify-center items-center h-full x:hidden">
            <div className="grid grid-cols-2 grid-rows-2 gap-2 p-10">
              <div className="col-span-2 row-span-1 w-full h-[15rem] s:h-[18rem] s:w-[25rem] md:h-[30rem] md:w-[40rem] x:h-[40rem] x:w-[50rem] ">
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
              <div className="h-[13rem] md:h-[18rem]">
                <img
                  src="/src/assets/pexels-photo-3296392.jpeg"
                  alt="Uramaki"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* X */}
          <div className="hidden x:block">
            <div className="flex justify-center items-center h-[50rem] gap-3 p-20">
              <div className="w-auto h-full">
                <img
                  src="/src/assets/pexels-photo-3296392.jpeg"
                  alt="Uramaki"
                  className="w-[30rem] h-auto"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <div>
                    {" "}
                    <img
                      src="/src/assets/pexels-photo-3296392.jpeg"
                      alt="Uramaki"
                      className="w-auto h-full"
                    />
                  </div>
                  <div>
                    {" "}
                    <img
                      src="/src/assets/pexels-photo-3296392.jpeg"
                      alt="Uramaki"
                      className="w-[20rem] h-[25rem]"
                    />
                  </div>
                </div>
                <div className="h-auto w-auto ">
                  <img
                    src="/src/assets/pexels-photo-3296392.jpeg"
                    alt="Uramaki"
                    className="w-[45rem] h-[13.3rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary">03</div>
        <div className="bg-secondary">04</div>
        <div className="bg-primary">05</div>
      </main>
    </>
  );
};

export default Main;
