import { Routes, Route } from "react-router-dom";
import { Home, SignUp, LogIn, ProfileExplore } from "./pages";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/profilexplore" element={<ProfileExplore />} />
      </Routes>
    </div>
  );
}
export default App;
