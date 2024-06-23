import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AnimationLayout from "./AnimationLayout";
import FourZeroFour from "./pages/FourZeroFour";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AnimationLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<FourZeroFour />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
