import { Routes, Route } from "react-router-dom";
import { Home, SignUp, LogIn } from "./pages";
import Profile from "./pages/Profile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
export default App;
