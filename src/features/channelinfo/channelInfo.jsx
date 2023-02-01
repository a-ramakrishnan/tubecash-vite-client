import axios from "axios";
import { useEffect, useState } from "react";
import Channel from "./Channel.jsx";

import { store } from "../../app/store.jsx";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth.jsx";

const ChannelInfo = () => {
  const [channels, setChannels] = useState([]);
  const { username } = useAuth();
  let content;
  const state = store.getState();
  useEffect(() => {
    setTimeout(async () => {
      const config = {
        method: "GET",
        url: `${import.meta.env.VITE_APP_GOOGLE_SERVER_ENDPOINT}/channelinfo`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${state.auth.token}`,
        },
      };
      await axios(config).then((response) => {
        setChannels(response.data);
        console.log("Response is", response.data);
      });
    }, 1000);
  }, [state.auth.token]);

  if (channels) {
    const tableContent = channels?.length
      ? channels.map((channel) => (
          <Channel key={channel._id} channelId={channel} />
        ))
      : null;

    content = (
      <main className="relative h-screen overflow-hidden bg-gray-50 dark:bg-gray-800 -m-2">
        <div className="flex items-start">
          <div className="relative hidden mr-4 h-screen shadow-lg lg:block w-100">
            <div className="h-full bg-white dark:bg-gray-700">
              <div className="flex items-center justify-start pt-6 m-4 mt-auto">
                <p className="text-xl font-bold dark:text-white">{username}</p>
              </div>
              <nav className="mt-6">
                <div>
                  <Link
                    className="text-sm font-normal flex items-center justify-start m-4 mt-auto text-gray-800 transition-colors duration-200 dark:text-white"
                    to="/"
                  >
                    Home
                  </Link>
                </div>
              </nav>
            </div>
          </div>

          <div className="overflow-x-auto mt-4 border-2 rounded-xl w-9/10 ml-2">
            <table className="min-w-full  divide-y-2 divide-gray-300 text-md ">
              <thead className="text-gray-900 bg-gray-200 ">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium ">
                    ChannelName
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium ">
                    Channel ID
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium ">
                    Date & time of addition
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium ">
                    Google ID
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium ">
                    Last Updated Date
                  </th>
                  {/*<th className="whitespace-nowrap px-4 py-2 text-left font-medium ">*/}
                  {/*  Scope*/}
                  {/*</th>*/}
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium ">
                    Refresh Tokens
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-medium ">
                    View Stats
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 ">
                {tableContent}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    );
  }

  return content;
};
export default ChannelInfo;
