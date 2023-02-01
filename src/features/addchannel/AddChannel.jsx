import getGoogleOAuthURL from "../../utils/getGoogleURL.jsx";
import { Link } from "react-router-dom";

const AddChannel = () => {
  return (
    <div className='className="bg-[#010101] flex flex-col min-h-screen w-full'>
      <a className="inline-flex mb-4 mt-8 ml-8 w-48 items-center justify-between rounded border border-indigo-600 px-8 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">
        <p className="text-sm font-medium">
          <Link to={getGoogleOAuthURL()}>Login with Google</Link>
        </p>

        <svg
          className="ml-3 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
      <p className="text-sm ml-8 font-light font-sans text-gray-100">
        By clicking on the above Login with Google, you are accepting the{" "}
        <a href="#">Terms and Conditions </a> and{" "}
        <a href="#">Privacy policy </a> of Tubecash
      </p>
    </div>
  );
};

export default AddChannel;
