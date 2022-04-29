import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home/Home"
import Write from "./pages/Write/Write"
import Settings from "./pages/Settings/Settings"
import Single from "./pages/Single/Single"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register";

import { Routes, Route} from "react-router-dom";

function App() {
  const user = false
  return (
    <div className="App">
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/register" element={user ? <Home/> : <Register />} />
        <Route path="/login" element={user ? <Home/> : <Login />} />
      </Routes>
    </div>
  );
}

export default App;
