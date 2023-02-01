import { useState, useEffect } from "react";
import { useAddNewUserMutation } from "./usersApiSlice.jsx";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { Roles } from "../../config/roles.jsx";

const USER_REGEX = /^[A-z]{3,20}$/;
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/;

const NewUserForm = () => {
  const [addNewUser, { isLoading, isSuccess, isError, error }] =
    useAddNewUserMutation();

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [roles, setRoles] = useState(["Employee"]);

  useEffect(() => {
    setValidUsername(USER_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);

  useEffect(() => {
    if (isSuccess) {
      setUsername("");
      setPassword("");
      setEmail("");
      setRoles([]);
      navigate("/dash/users");
    }
  }, [isSuccess, navigate]);

  const onUsernameChanged = (e) => setUsername(e.target.value);
  const onemailChanged = (e) => setEmail(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);

  const onRolesChanged = (e) => {
    const values = Array.from(
      e.target.selectedOptions, //HTMLCollection
      (option) => option.value
    );
    setRoles(values);
  };

  const canSave =
    [roles.length, validUsername, email, validPassword].every(Boolean) &&
    !isLoading;

  const onSaveUserClicked = async (e) => {
    e.preventDefault();
    console.log(canSave, username, email);
    if (canSave) {
      console.log(username, email);
      await addNewUser({ username, email, password, roles });
    }
  };

  const options = Object.values(Roles).map((role) => {
    return (
      <option key={role} value={role}>
        {" "}
        {role}
      </option>
    );
  });

  const errClass = isError ? "errmsg" : "offscreen";
  const validUserClass = !validUsername ? "form__input--incomplete" : "";
  const validPwdClass = !validPassword ? "form__input--incomplete" : "";
  const validRolesClass = !Boolean(roles.length)
    ? "form__input--incomplete"
    : "";

  const content = (
    <div className="min-h-screen ml-32 mt-32">
      <section className="relative w-3/5 items-end bg-gray-50 lg:h-full">
        <p className={errClass}>{error?.data?.message}</p>

        <form className="mt-8 " onSubmit={onSaveUserClicked}>
          <div className="flex justify-between ">
            <h2 className="font-semibold text-2xl">New User</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="username"
              >
                Username: <span className="text-xs nowrap">[3-20 letters]</span>
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="off"
                value={username}
                onChange={onUsernameChanged}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="email"
              >
                E-mail:{" "}
                <span className="text-xs nowrap">
                  [Please specify a valid email]
                </span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="off"
                value={email}
                onChange={onemailChanged}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="password"
              >
                Password:{" "}
                <span className="text-xs nowrap">[4-12 chars incl. !@#$%]</span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={onPasswordChanged}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div className="flex">
              <label
                className="text-gray-700 dark:text-gray-200 mr-8"
                htmlFor="roles"
              >
                Assigned Roles:
              </label>

              <select
                id="roles"
                name="roles"
                className={`form__select ${validRolesClass}`}
                multiple={true}
                size="3"
                value={roles}
                onChange={onRolesChanged}
              >
                {options}
              </select>
            </div>
          </div>

          <div className="flex justify-end mt-6 gap-8">
            <button
              title="Save"
              disabled={!canSave}
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#0f0f0f] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Save User
            </button>
          </div>
        </form>
      </section>
    </div>

    // <>
    //   <p className={errClass}>{error?.data?.message}</p>
    //
    //   <form className="form" onSubmit={onSaveUserClicked}>
    //     <div className="form__title-row">
    //       <h2>New User</h2>
    //       <div className="form__action-buttons">
    //         <button className="icon-button" title="Save" disabled={!canSave}>
    //           <FontAwesomeIcon icon={faSave} />
    //         </button>
    //       </div>
    //     </div>
    //     <label className="form__label" htmlFor="username">
    //       Username: <span className="nowrap">[3-20 letters]</span>
    //     </label>
    //     <input
    //       className={`form__input ${validUserClass}`}
    //       id="username"
    //       name="username"
    //       type="text"
    //       autoComplete="off"
    //       value={username}
    //       onChange={onUsernameChanged}
    //     />
    //
    //     <label className="form__label" htmlFor="email">
    //       E-mail: <span className="nowrap">[Please specify a valid email]</span>
    //     </label>
    //     <input
    //       className={`form__input`}
    //       id="email"
    //       name="email"
    //       type="email"
    //       autoComplete="off"
    //       value={email}
    //       onChange={onemailChanged}
    //     />
    //
    //     <label className="form__label" htmlFor="password">
    //       Password: <span className="nowrap">[4-12 chars incl. !@#$%]</span>
    //     </label>
    //     <input
    //       className={`form__input ${validPwdClass}`}
    //       id="password"
    //       name="password"
    //       type="password"
    //       value={password}
    //       onChange={onPasswordChanged}
    //     />
    //
    //     <label className="form__label" htmlFor="roles">
    //       ASSIGNED ROLES:
    //     </label>
    //     <select
    //       id="roles"
    //       name="roles"
    //       className={`form__select ${validRolesClass}`}
    //       multiple={true}
    //       size="3"
    //       value={roles}
    //       onChange={onRolesChanged}
    //     >
    //       {options}
    //     </select>
    //   </form>
    // </>
  );

  return content;
};
export default NewUserForm;
