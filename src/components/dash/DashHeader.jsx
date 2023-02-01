import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGear,
  faUserPlus,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { useSendLogoutMutation } from "../../features/auth/authApiSlice.jsx";
import useAuth from "../../hooks/useAuth.jsx";

const DASH_REGEX = /^\/dash(\/)?$/;

const USERS_REGEX = /^\/dash\/users(\/)?$/;

const DashHeader = () => {
  const { isManager, isAdmin } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [sendLogout, { isLoading, isSuccess, isError, error }] =
    useSendLogoutMutation();

  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);

  const onNewUserClicked = () => navigate("/dash/users/new");
  const onUsersClicked = () => navigate("/dash/users");

  let dashClass = null;
  if (!DASH_REGEX.test(pathname) && !USERS_REGEX.test(pathname)) {
    dashClass = "dash-header__container--small";
  }

  const logoutButton = (
    <button className="icon-button" title="Logout" onClick={sendLogout}>
      <FontAwesomeIcon icon={faRightFromBracket} />
    </button>
  );

  let newUserButton = null;
  if (USERS_REGEX.test(pathname)) {
    newUserButton = (
      <button
        className="icon-button"
        title="New User"
        onClick={onNewUserClicked}
      >
        <FontAwesomeIcon icon={faUserPlus} />
      </button>
    );
  }

  let userButton = null;
  if (isManager || isAdmin) {
    if (!USERS_REGEX.test(pathname) && pathname.includes("/dash")) {
      userButton = (
        <button className="icon-button" title="Users" onClick={onUsersClicked}>
          <FontAwesomeIcon icon={faUserGear} />
        </button>
      );
    }
  }

  const errClass = isError ? "errmsg" : "offscreen";

  let buttonContent;
  if (isLoading) {
    buttonContent = <p>Logging Out...</p>;
  } else {
    buttonContent = (
      <>
        {newUserButton}
        {userButton}
        {logoutButton}
      </>
    );
  }

  const content = (
    <>
      <p className={errClass}>{error?.data?.message}</p>
      {/*<header className="dash-header">*/}
      {/*  <div className={`dash-header__container ${dashClass}`}>*/}
      {/*    <Link to="/dash">*/}
      {/*      <h1 className="dash-header__title">Tubecash</h1>*/}
      {/*    </Link>*/}
      {/*    <nav className="dash-header__nav">{buttonContent}</nav>*/}
      {/*  </div>*/}
      {/*</header>*/}
      <header aria-label="Page Header">
        <div className="bg-[#010101] border-b border-b-amber-50 mx-auto px-4 py-4 sm:py-6 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <Link to="/dash">
                <h1 className="text-2xl font-bold text-gray-100 sm:text-3xl">
                  Tubecash
                </h1>
              </Link>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <nav className="inline-flex items-center gap-12 justify-center rounded-md border border-gray-200 px-5 py-3 text-gray-200 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring">
                {buttonContent}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );

  return content;
};
export default DashHeader;
