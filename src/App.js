import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor } from "./redux/store";
// import PrivateRoute from "./components/PrivateRoute";
// import PrivateRouteAdmin from "./components/PrivateRouteAdmin";
import PublicRoute from "./components/PublicRoute";
import "./App.css";

// User
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

// Admin
import CreateAdmin from "./pages/Admin/Create";
import DetailAdmin from "./pages/Admin/Detail";
import UpdateAdmin from "./pages/Admin/Update";

const App = (props) => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Switch>
          <PublicRoute exact path="/" restricted component={Register} />
          <PublicRoute exact path="/login" restricted component={Login} />

          <PublicRoute exact path="/home" component={Home} />

          <PublicRoute exact path="/createadmin" component={CreateAdmin} />
          <PublicRoute exact path="/detailadmin" component={DetailAdmin} />
          <PublicRoute exact path="/updateadmin" component={UpdateAdmin} />
        </Switch>
      </Router>
    </PersistGate>
  );
};

export default App;

// const App = (props) => {
//   return (
//     <PersistGate loading={null} persistor={persistor}>
//       <Router>
//         <Switch>
//           <PublicRoute exact path="/" restricted component={Register} />
//           <PublicRoute exact path="/login" restricted component={Login} />

//           <PrivateRoute exact path="/home" component={Home} />

//           <PrivateRouteAdmin
//             exact
//             path="/createadmin"
//             component={CreateAdmin}
//           />
//           <PrivateRouteAdmin
//             exact
//             path="/detailadmin"
//             component={DetailAdmin}
//           />
//           <PrivateRouteAdmin
//             exact
//             path="/updateadmin"
//             component={UpdateAdmin}
//           />
//         </Switch>
//       </Router>
//     </PersistGate>
//   );
// };
