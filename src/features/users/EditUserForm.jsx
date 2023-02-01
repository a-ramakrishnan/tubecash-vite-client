import { useState, useEffect } from "react";
import {
  useUpdateUserMutation,
  useDeleteUserMutation,
} from "./usersApiSlice.jsx";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Roles } from "../../config/roles.jsx";

const USER_REGEX = /^[A-z]{3,20}$/;
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/;

const EditUserForm = ({ user }) => {
  const [updateUser, { isLoading, isSuccess, isError, error }] =
    useUpdateUserMutation();

  const [
    deleteUser,
    { isSuccess: isDelSuccess, isError: isDelError, error: delerror },
  ] = useDeleteUserMutation();

  const navigate = useNavigate();

  const [username, setUsername] = useState(user.username);
  const [validUsername, setValidUsername] = useState(false);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [roles, setRoles] = useState(user.roles);
  const [email, setEmail] = useState(user.email);
  const [active, setActive] = useState(user.active);

  useEffect(() => {
    setValidUsername(USER_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);

  useEffect(() => {
    console.log(isSuccess);
    if (isSuccess || isDelSuccess) {
      setUsername("");
      setPassword("");
      setEmail("");
      setRoles([]);
      navigate("/dash/users");
    }
  }, [isSuccess, isDelSuccess, navigate]);

  const onUsernameChanged = (e) => setUsername(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);
  const onemailChanged = (e) => setEmail(e.target.value);

  const onRolesChanged = (e) => {
    const values = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setRoles(values);
  };

  const onActiveChanged = () => setActive((prev) => !prev);

  const onSaveUserClicked = async (e) => {
    if (password) {
      await updateUser({
        id: user.id,
        email,
        username,
        password,
        roles,
        active,
      });
    } else {
      await updateUser({ id: user.id, email, username, roles, active });
    }
  };

  const onDeleteUserClicked = async () => {
    await deleteUser({ id: user.id });
  };

  const options = Object.values(Roles).map((role) => {
    return (
      <option key={role} value={role}>
        {" "}
        {role}
      </option>
    );
  });

  let canSave;
  if (password) {
    canSave =
      [roles.length, email, validUsername, validPassword].every(Boolean) &&
      !isLoading;
  } else {
    canSave = [roles.length, email, validUsername].every(Boolean) && !isLoading;
  }

  const errClass = isError || isDelError ? "errmsg" : "offscreen";
  const validUserClass = !validUsername ? "form__input--incomplete" : "";
  const validPwdClass =
    password && !validPassword ? "form__input--incomplete" : "";
  const validRolesClass = !Boolean(roles.length)
    ? "form__input--incomplete"
    : "";

  const errContent = (error?.data?.message || delerror?.data?.message) ?? "";

  const content = (
    <div className="min-h-screen ml-32 mt-32">
      <section className="relative w-3/5 items-end bg-gray-50 lg:h-full">
        <p className={errClass}>{errContent}</p>

        {/*<form className="form" onSubmit={(e) => e.preventDefault()}>*/}
        {/*  <div className="form__title-row">*/}
        {/*    <h2>Edit User</h2>*/}
        {/*    <div className="form__action-buttons">*/}
        {/*      <button*/}
        {/*        className="icon-button"*/}
        {/*        title="Save"*/}
        {/*        onClick={onSaveUserClicked}*/}
        {/*        disabled={!canSave}*/}
        {/*      >*/}
        {/*        <FontAwesomeIcon icon={faSave} />*/}
        {/*      </button>*/}
        {/*      <button*/}
        {/*        className="icon-button"*/}
        {/*        title="Delete"*/}
        {/*        onClick={onDeleteUserClicked}*/}
        {/*      >*/}
        {/*        <FontAwesomeIcon icon={faTrashCan} />*/}
        {/*      </button>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <label className="form__label" htmlFor="username">*/}
        {/*    Username: <span className="nowrap">[3-20 letters]</span>*/}
        {/*  </label>*/}
        {/*  <input*/}
        {/*    className={`form__input ${validUserClass}`}*/}
        {/*    id="username"*/}
        {/*    name="username"*/}
        {/*    type="text"*/}
        {/*    autoComplete="off"*/}
        {/*    value={username}*/}
        {/*    onChange={onUsernameChanged}*/}
        {/*  />*/}

        {/*  <label className="form__label" htmlFor="email">*/}
        {/*    E-mail:{" "}*/}
        {/*    <span className="nowrap">[Please specify a valid email]</span>*/}
        {/*  </label>*/}
        {/*  <input*/}
        {/*    className={`form__input`}*/}
        {/*    id="email"*/}
        {/*    name="email"*/}
        {/*    type="email"*/}
        {/*    autoComplete="off"*/}
        {/*    value={email}*/}
        {/*    onChange={onemailChanged}*/}
        {/*  />*/}

        {/*  <label className="form__label" htmlFor="password">*/}
        {/*    Password: <span className="nowrap">[empty = no change]</span>{" "}*/}
        {/*    <span className="nowrap">[4-12 chars incl. !@#$%]</span>*/}
        {/*  </label>*/}
        {/*  <input*/}
        {/*    className={`form__input ${validPwdClass}`}*/}
        {/*    id="password"*/}
        {/*    name="password"*/}
        {/*    type="password"*/}
        {/*    value={password}*/}
        {/*    onChange={onPasswordChanged}*/}
        {/*  />*/}

        {/*  <label*/}
        {/*    className="form__label form__checkbox-container"*/}
        {/*    htmlFor="user-active"*/}
        {/*  >*/}
        {/*    ACTIVE:*/}
        {/*    <input*/}
        {/*      className="form__checkbox"*/}
        {/*      id="user-active"*/}
        {/*      name="user-active"*/}
        {/*      type="checkbox"*/}
        {/*      checked={active}*/}
        {/*      onChange={onActiveChanged}*/}
        {/*    />*/}
        {/*  </label>*/}

        {/*  <label className="form__label" htmlFor="roles">*/}
        {/*    ASSIGNED ROLES:*/}
        {/*  </label>*/}
        {/*  <select*/}
        {/*    id="roles"*/}
        {/*    name="roles"*/}
        {/*    className={`form__select ${validRolesClass}`}*/}
        {/*    multiple={true}*/}
        {/*    size="3"*/}
        {/*    value={roles}*/}
        {/*    onChange={onRolesChanged}*/}
        {/*  >*/}
        {/*    {options}*/}
        {/*  </select>*/}
        {/*</form>*/}

        <form className="mt-8 " onSubmit={(e) => e.preventDefault()}>
          <div className="flex justify-between ">
            <h2 className="font-semibold text-2xl">Edit User</h2>
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
                <span className="text-xs nowrap">[empty = no change]</span>{" "}
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
              onClick={onDeleteUserClicked}
              disabled={!canSave}
              className="bg-red-700 px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Delete User
            </button>
            <button
              title="Delete"
              onClick={onSaveUserClicked}
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#0f0f0f] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Save User
            </button>
          </div>
        </form>
      </section>
    </div>
  );

  return content;
};
export default EditUserForm;
