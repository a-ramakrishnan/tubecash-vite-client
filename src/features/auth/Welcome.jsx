import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth.jsx";

const Welcome = () => {
  const { username, isManager, isAdmin } = useAuth();
  const date = new Date();
  const today = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);

  const content = (
    <main className="relative h-screen overflow-hidden bg-gray-50 dark:bg-gray-800 -m-2">
      <div className="flex items-start justify-between">
        <div className="relative hidden h-screen shadow-lg lg:block w-100">
          <div className="h-full bg-white dark:bg-gray-700">
            <div className="flex items-center justify-start pt-6 m-4 mt-auto">
              <p className="text-xl font-bold dark:text-white">{username}</p>
            </div>
            <nav className="mt-6">
              <div>
                <Link
                  className="flex  text-sm font-normal items-center justify-start w-full m-4 mt-auto text-gray-800 transition-colors duration-200 dark:text-white"
                  to="/"
                >
                  Home
                </Link>
              </div>
            </nav>
          </div>
        </div>
        <div className="flex flex-col w-full md:space-y-4">
          <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
            <div className="mt-24 grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="w-full">
                <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
                  <div className="flex items-end my-6 space-x-2">
                    <Link to="/dash/addchannel">
                      <p className="text-5xl font-bold text-black dark:text-white">
                        Add a Channel
                      </p>
                    </Link>
                  </div>
                  <div className="dark:text-white">
                    <div className="flex items-center justify-between pb-2 mb-2 font-semibold text-sm border-b border-gray-200 sm:space-x-12">
                      <p>Process -{">"} </p>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                      <p>Login with Google</p>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                      <p>Choose the Channel you want to add</p>
                    </div>
                    <div className="flex items-center justify-between text-sm ">
                      <p>
                        You will be redirected back to the dashboard post
                        addition
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
                  <div className="flex items-end my-6 space-x-2">
                    <Link to="/dash/channelinfo">
                      <p className="text-5xl font-bold text-black dark:text-white">
                        View All Channels
                      </p>
                    </Link>
                  </div>
                  <div className="dark:text-white">
                    <div className="flex items-center justify-between pb-2 mb-2 font-semibold text-sm border-b border-gray-200 sm:space-x-12">
                      <p>What is available -{">"} </p>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                      <p>Basic Channel Information</p>
                    </div>
                    <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                      <p>Ability to update information for the channel</p>
                    </div>
                    <div className="flex items-center justify-between text-sm ">
                      <p>View Statistics for the channel</p>
                    </div>
                  </div>
                </div>
              </div>
              {(isManager || isAdmin) && (
                <div className="w-full">
                  <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
                    <div className="flex items-end my-6 space-x-2">
                      <Link to="/dash/users">
                        <p className="text-5xl font-bold text-black dark:text-white">
                          View All Users
                        </p>
                      </Link>
                    </div>
                    <div className="dark:text-white">
                      <div className="flex items-center justify-between pb-2 mb-2 font-semibold text-sm border-b border-gray-200 sm:space-x-12">
                        <p>What is available -{">"} </p>
                      </div>
                      <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                        <p>View all the users</p>
                      </div>
                      <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                        <p>Edit information about the user</p>
                      </div>
                      <div className="flex items-center justify-between text-sm ">
                        <p>Add New User</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {(isManager || isAdmin) && (
                <div className="w-full">
                  <div className="relative w-full px-4 py-6 bg-white shadow-lg dark:bg-gray-700">
                    <div className="flex items-end my-6 space-x-2">
                      <Link to="/dash/users/new">
                        <p className="text-5xl font-bold text-black dark:text-white">
                          Add a New User
                        </p>
                      </Link>
                    </div>
                    <div className="dark:text-white">
                      <div className="flex items-center justify-between pb-2 mb-2 font-semibold text-sm border-b border-gray-200 sm:space-x-12">
                        <p>What is required -{">"} </p>
                      </div>
                      <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                        <p>Unique Username</p>
                      </div>
                      <div className="flex items-center justify-between pb-2 mb-2 space-x-12 text-sm border-b border-gray-200 md:space-x-24">
                        <p>E-Mail ID</p>
                      </div>
                      <div className="flex items-center justify-between text-sm ">
                        <p>Role Information</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );

  return content;
};
export default Welcome;
