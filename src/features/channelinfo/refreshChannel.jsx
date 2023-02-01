import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { store } from "../../app/store.jsx";
const RefreshChannel = () => {
  const { channelId } = useParams();
  const state = store.getState();
  const updateTokens = async () => {
    console.log(channelId);

    const postData = {
      channelID: channelId,
    };

    const config = {
      method: "post",
      url: `${
        import.meta.env.VITE_APP_GOOGLE_SERVER_ENDPOINT
      }/channelinfo/updateTokens`,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${state.auth.token}`,
      },
      data: JSON.stringify(postData),
    };
    await axios(config).then((response) => {
      console.log("Response is", response);
    });
  };

  const updateChannelStatistics = async () => {
    const postData = {
      channelID: channelId,
    };
    const config = {
      method: "post",
      url: `${
        import.meta.env.VITE_APP_GOOGLE_SERVER_ENDPOINT
      }/channelinfo/fullstats`,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${state.auth.token}`,
      },
      data: JSON.stringify(postData),
    };
    await axios(config).then((response) => {
      console.log("Response is", response);
    });
  };
  const updateVideoRevenueStatistics = async () => {
    const postData = {
      channelID: channelId,
    };

    const config = {
      method: "post",
      url: `${
        import.meta.env.VITE_APP_GOOGLE_SERVER_ENDPOINT
      }/channelinfo/videostats`,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${state.auth.token}`,
      },
      data: JSON.stringify(postData),
    };
    await axios(config).then((response) => {
      console.log("Response is", response);
    });
  };

  const dailyVideoRevenueStatistics = async () => {
    const postData = {
      channelID: channelId,
    };

    const config = {
      method: "post",
      url: `${
        import.meta.env.VITE_APP_GOOGLE_SERVER_ENDPOINT
      }/channelinfo/dailyvideostats`,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${state.auth.token}`,
      },
      data: JSON.stringify(postData),
    };
    await axios(config).then((response) => {
      console.log("Response is", response);
    });
  };

  const getPerformanceStatsFromYoutube = async () => {
    const postData = {
      channelID: channelId,
    };

    const config = {
      method: "post",
      url: `${
        import.meta.env.VITE_APP_GOOGLE_SERVER_ENDPOINT
      }/channelinfo/performancestats`,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${state.auth.token}`,
      },
      data: JSON.stringify(postData),
    };
    await axios(config).then((response) => {
      console.log("Response is", response);
    });
  };
  const updateAllVideoInfo = async () => {
    console.log(channelId);

    const postData = {
      channelID: channelId,
    };

    const config = {
      method: "post",
      url: `${
        import.meta.env.VITE_APP_GOOGLE_SERVER_ENDPOINT
      }/channelinfo/getFullVideoData`,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${state.auth.token}`,
      },
      data: JSON.stringify(postData),
    };
    await axios(config).then((response) => {
      console.log("Response is", response);
    });
  };

  return (
    <section className="flex flex-col gap-2 text-gray-50 ml-4 mt-4">
      <div>
        <button
          className="inline-flex my-4 w-48 items-center justify-between rounded border border-indigo-600 px-8 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
          onClick={updateTokens}
        >
          UpdateTokens
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
        </button>
        <h5 className="text-xs">
          Click on the button above before proceeding with any other operation
        </h5>
      </div>

      <div>
        <button
          className="inline-flex my-4 w-48 items-center justify-between rounded border border-indigo-600 px-8 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
          onClick={updateChannelStatistics}
        >
          Full Channel Statistics
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
        </button>
        <h5 className="text-xs">
          This will only update Full Channel Statistics.
        </h5>
      </div>
      <div>
        <button
          className="inline-flex my-4 w-48 items-center justify-between rounded border border-indigo-600 px-8 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
          onClick={updateVideoRevenueStatistics}
        >
          Video Revenue Stats
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
        </button>

        <h5 className="text-xs">
          This will update the video level revenue information
        </h5>
      </div>
      <div>
        <button
          className="inline-flex my-4 w-48 items-center justify-between rounded border border-indigo-600 px-8 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
          onClick={dailyVideoRevenueStatistics}
        >
          Daily Video Revenue Stats
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
        </button>

        <h5 className="text-xs">
          This will update the video level revenue information
        </h5>
      </div>
      <div>
        <button
          className="inline-flex my-4 w-48 items-center justify-between rounded border border-indigo-600 px-8 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
          onClick={getPerformanceStatsFromYoutube}
        >
          Performance Stats
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
        </button>
      </div>
      <div>
        <button
          className="inline-flex my-4 w-48 items-center justify-between rounded border border-indigo-600 px-8 py-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
          onClick={updateAllVideoInfo}
        >
          All Video Information
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
        </button>
      </div>
    </section>
  );
};
export default RefreshChannel;
