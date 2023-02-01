import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth.jsx";

const DashFooter = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { username, status } = useAuth();

  const onGoHomeClicked = () => navigate("/dash");

  let goHomeButton = null;
  if (pathname !== "/dash") {
    goHomeButton = (
      <button className="text-white" title="Home" onClick={onGoHomeClicked}>
        <FontAwesomeIcon icon={faHouse} />
      </button>
    );
  }

  const content = (
    // <footer className="dash-footer">
    <footer
      aria-label="Site Footer"
      className=" bg-[#010101] p-2 flex justify-between"
    >
      <div className="flex items-center">
        {goHomeButton}
        <p className="text-gray-100 font-sans px-2">Current User: {username}</p>
        <p className="text-gray-100 font-sans px-2">Status: {status}</p>
      </div>
      <div className="flex justify-between items-center mt-auto">
        <p className="text-gray-100 font-sans px-4">(C) Tubecash 2023</p>
        <h1 className="mr-2 pr-2 font-sans text-xl text-transparent bg-clip-text  font-semibold bg-gradient-to-r from-orange-600 to-orange-300">
          Amplify, Expand and Go Big
        </h1>
      </div>
    </footer>
  );
  return content;
};
export default DashFooter;
