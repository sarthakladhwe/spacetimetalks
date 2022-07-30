import React from "react";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home/Home"
import Write from "./pages/Write/Write"
import Settings from "./pages/Settings/Settings"
import Single from "./pages/Single/Single"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register";
import { Context } from './context/Context'

import { Routes, Route} from "react-router-dom";

function App() {

  const {userDetails, isLoggedIn} = React.useContext(Context);

  console.log("Is loed in",isLoggedIn)
  console.log("Is loed in",userDetails)

  return (
    <div className="App">
      {/* <Topbar /> */}
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/write" element={isLoggedIn ? <Write /> : <Register />} />
        <Route path="/settings" element={isLoggedIn ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/register" element={isLoggedIn ? <Home/> : <Register />} />
        <Route path="/login" element={isLoggedIn ? <Home/> : <Login />} />
      </Routes>
    </div>
  );
}

export default App;
