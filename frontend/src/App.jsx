import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import ExplorePage from "./pages/ExplorePage";
import LikesPage from "./pages/LikesPage";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex text-white">
      <Sidebar />
      <div className="max-w-5xl my-5 mx-auto text-white transition-all duration-300 flex-1" >
        <Routes>
          <Route path="/" element={<HomePage />}>my-5 mx-auto text-white</Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route path="/explore" element={<ExplorePage />}></Route>
          <Route path="/likes" element={<LikesPage />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
