import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectUserById } from "./usersApiSlice.jsx";

const User = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, userId));

  const navigate = useNavigate();

  if (user) {
    const handleEdit = () => navigate(`/dash/users/${userId}`);

    const userRolesString = user.roles.toString().replaceAll(",", ", ");

    const cellStatus = user.active ? "" : "table__cell--inactive";

    return (
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium">
          {user.username}
        </td>
        <td className="whitespace-nowrap px-4 py-2 font-medium ">
          {user.email}
        </td>
        <td className="whitespace-nowrap px-4 py-2 font-medium ">
          {userRolesString}
        </td>

        <td className="whitespace-nowrap px-4 py-2 font-medium ">
          <button onClick={handleEdit}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </td>
      </tr>
    );
  } else return null;
};
export default User;
