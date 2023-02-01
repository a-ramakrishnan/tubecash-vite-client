import { Link } from "react-router-dom";
import Hero from "./Hero.jsx";
import Business from "./Business.jsx";

const Public = () => {
  const content = (
    <section className="bg-[#010101] flex flex-col min-h-screen w-full">
      <header className="flex  text-gray-50 p-2">
        <h1 className="mr-4 font-sans text-3xl text-transparent bg-clip-text  font-semibold bg-gradient-to-r from-orange-600 to-orange-300">
          Welcome to <span className="nowrap">TubeCash</span>
        </h1>
        <div className="ml-auto flex items-center">
          <Link
            className="mr-6  text-xl text-transparent font-bold bg-clip-text  bg-gradient-to-r from-gray-400 to-gray-50"
            to="/login"
          >
            Log in
          </Link>
        </div>
      </header>
      <div className=" pb-2 ml-2 mr-2 border-t border-gray-400 "></div>
      <main className="flex-grow p-2">
        <div className={`flex justify-center items-start`}>
          <div className={`xl:max-w-[1280px] w-full`}>
            <Hero />
          </div>
        </div>

        <div className={`flex justify-center items-start sm:px-16 px-6`}>
          <div className={`xl:max-w-[1280px] w-full`}>
            <Business />
          </div>
        </div>
      </main>

      <footer aria-label="Site Footer" className=" bg-[#010101] p-2">
        <div className="flex-grow border-t border-gray-400 pb-2"></div>
        <div className="flex justify-between items-center mt-auto">
          <p className="text-gray-100 font-sans px-4">(C) Tubecash 2023</p>
          <h1 className="mr-4 pr-4 font-sans text-xl text-transparent bg-clip-text  font-semibold bg-gradient-to-r from-orange-600 to-orange-300">
            Amplify, Expand and Go Big
          </h1>
        </div>
      </footer>
    </section>
  );
  return content;
};
export default Public;
