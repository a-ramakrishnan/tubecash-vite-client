import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh, faChartBar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Channel = ({ channelId }) => {
  const navigate = useNavigate();
  if (channelId) {
    const refreshTokens = () =>
      navigate(`/dash/channelinfo/${channelId.channelID}`);
    const viewStats = () =>
      navigate(`/dash/channelstats/${channelId.channelID}`);

    return (
      <tr className="bg-gray-50 text-gray-800">
        <td className="whitespace-nowrap px-4 py-2 font-medium ">
          {channelId.channelName}
        </td>
        <td className="whitespace-nowrap px-4 py-2 font-medium ">
          {channelId.channelID}
        </td>
        <td className="whitespace-nowrap px-4 py-2 font-medium ">
          {channelId.createdAt}
        </td>
        <td className="whitespace-nowrap px-4 py-2 font-medium ">
          {channelId.googleID}
        </td>
        <td className="whitespace-nowrap px-4 py-2 font-medium ">
          {channelId.lastUpdatedDate}
        </td>
        {/*<td className="whitespace-nowrap bg-[#1f1f1f] px-4 py-2 font-medium text-gray-300">*/}
        {/*  {channelId.scope}*/}
        {/*</td>*/}

        <td className="whitespace-nowrap px-4 py-2 font-medium ">
          <button onClick={refreshTokens}>
            <FontAwesomeIcon icon={faRefresh} />
          </button>
        </td>
        <td className="whitespace-nowrap px-4 py-2 font-medium ">
          <button onClick={viewStats}>
            <FontAwesomeIcon icon={faChartBar} />
          </button>
        </td>
      </tr>
    );
  } else return null;
};
export default Channel;
