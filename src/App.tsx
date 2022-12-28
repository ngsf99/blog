import Footer from "./layout/footer/Footer";
import Home from "./pages/home/Home";
import Navbar from "./layout/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/Profile";

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
