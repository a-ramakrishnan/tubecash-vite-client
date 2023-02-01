import { store } from "../../app/store.jsx";

import { usersApiSlice } from "../users/usersApiSlice.jsx";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Prefetch = () => {
  useEffect(() => {
    console.log("subscribing");

    const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate());

    return () => {
      console.log("unsubscribing");

      users.unsubscribe();
    };
  }, []);

  return <Outlet />;
};
export default Prefetch;
