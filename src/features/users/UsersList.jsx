import { useGetUsersQuery } from "./usersApiSlice.jsx";
import User from "./User.jsx";

const UsersList = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery("Users List", {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  let content;

  if (isLoading) content = <p>Loading...</p>;

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>;
  }

  if (isSuccess) {
    console.log(users);

    const { ids } = users;

    const tableContent =
      ids?.length && ids.map((userId) => <User key={userId} userId={userId} />);

    content = (
      <div className="overflow-x-auto mt-8 bg-gray-50 text-gray-800 border-2 border-gray-600 rounded-xl w-4/5 ml-36">
        <table className="min-w-full  divide-y-2 divide-gray-600  text-md ">
          <thead className="text-gray-700 ">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium ">
                Username
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium ">
                E-mail
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium ">
                Roles
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium ">
                Edit
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 ">{tableContent}</tbody>
        </table>
      </div>
    );
  }

  return content;
};
export default UsersList;
