import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Public from "./components/Public.jsx";
import Login from "./features/auth/Login.jsx";
import DashLayout from "./components/dash/DashLayout.jsx";
import Welcome from "./features/auth/Welcome.jsx";
import UsersList from "./features/users/UsersList.jsx";

import AddChannel from "./features/addchannel/AddChannel.jsx";
import EditUser from "./features/users/EditUser.jsx";
import NewUserForm from "./features/users/NewUserForm.jsx";
import Prefetch from "./features/auth/Prefetch.jsx";
import ChannelInfo from "./features/channelinfo/channelInfo.jsx";
import RefreshChannel from "./features/channelinfo/refreshChannel.jsx";
import ChannelStats from "./features/channelinfo/ChannelStats.jsx";
import PersistLogin from "./features/auth/PersistLogin.jsx";
import { Roles } from "./config/roles.jsx";
import RequireAuth from "./features/auth/RequireAuth.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route element={<PersistLogin />}>
          <Route
            element={<RequireAuth allowedRoles={[...Object.values(Roles)]} />}
          >
            <Route element={<Prefetch />}>
              <Route path="dash" element={<DashLayout />}>
                <Route index element={<Welcome />} />

                <Route path="addchannel">
                  <Route index element={<AddChannel />} />
                </Route>
                <Route path="channelinfo">
                  <Route index element={<ChannelInfo />} />
                  <Route path=":channelId" element={<RefreshChannel />} />
                </Route>
                <Route path="channelstats">
                  {/*<Route index element={<ChannelInfo />} />*/}
                  <Route path=":channelId" element={<ChannelStats />} />
                </Route>

                <Route
                  element={
                    <RequireAuth allowedRoles={[Roles.Manager, Roles.Admin]} />
                  }
                >
                  <Route path="users">
                    <Route index element={<UsersList />} />
                    <Route path=":id" element={<EditUser />} />
                    <Route path="new" element={<NewUserForm />} />
                  </Route>
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
