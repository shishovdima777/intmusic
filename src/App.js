import { Routes, Route } from "react-router-dom";
import { Home, SignUp, LogIn, Profile, Explore } from "./pages";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </div>
  );
}
export default App;
