const Main04 = () => {
  return (
    <>
      <div className="bg-primary">
        <div className="flex justify-center items-center h-full">
          {" "}
          <h1 className="text-fourth font-semibold text-center text-3xl md:text-5xl x:text-2xl">
            Opening hours
          </h1>
        </div>
        <div className="h-full flex justify-center items-center gap-10 p-5">
            <p>Monday</p>
            <p>18:00-00:00</p>
        </div>
        <div className="h-full flex justify-center items-center gap-10 p-5">
            <p>Martedi - Sunday</p>
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
