const Main04 = () => {
  return (
    <>
      <div className="bg-primary">
        <div className="flex justify-center items-center h-full">
          {" "}
          <h1 className="text-fourth font-semibold text-center text-3xl p-5 md:text-5xl x:text-2xl pt-5">
            Opening hours
          </h1>
        </div>
        <div className="text-fourth text-normal flex-col  h-full flex justify-center items-center gap-2 p-3 tracking-wide x:flex-row x:gap-10 x:p-5">
          <p>Monday</p>
          <p>18:00-00:00</p>
        </div>
        <div className="text-fourth text-normal flex-col h-full flex justify-center items-center gap-2 p-3 tracking-wide x:flex-row x:gap-10 x:p-5 x:pb-9 ">
          <p>Tuesday - Sunday</p>
          <div className="flex flex-col">
            <p>12:00-16:00</p>
            <p>18:00-00:00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main04;
