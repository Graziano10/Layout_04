import Main from "./Main";
import Navbar from "./Navbar";

const Header = () => {



  const imgHeader = {
    backgroundImage: "url('/src/assets/pexels-photo-3296392.jpeg')",
  };




  return (
    <>
      <Navbar />
      <header>
        <div className="h-[35rem] w-full bg-cover bg-center" style={imgHeader}>
          <div className="flex flex-col items-center justify-center h-full ">
            {" "}
            <h1 className="text-fourth text-3xl tracking-wide font-semibold">FLOW</h1>
            <h1 className="text-fourth text-3xl tracking-wide font-semibold py-5">Sushi Experience</h1>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
