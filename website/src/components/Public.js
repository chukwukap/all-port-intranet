import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NewsPage from "../pages/NewsPage";

function Public() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </>
  );
}

export default Public;
