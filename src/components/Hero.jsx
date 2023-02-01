import { tubecashpng } from "../assets";

const Hero = () => {
    return (
        <section
            id="home"
            className={`flex md:flex-row flex-col sm:px-16 px-6`}
        >
            <div
                className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6`}
            >
                <div className="flex flex-col justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                        <br className="sm:block hidden" />{" "}
                        <span className="text-gradient">
              Amplify, Expand and Go Big with
            </span>{" "}
                    </h1>
                    <div
                        className={`flex-1 flex flex justify-center items-center md:my-0 my-10 relative`}
                    >
                        <img
                            src={tubecashpng}
                            alt="tubecash logo"
                            className="w-[100%] h-[100%] relative z-[5]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;