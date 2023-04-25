import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "./app.css";
import HomePage from "./pages/HomePage.js";
import NewsPage from "./pages/NewsPage";
import DepartmentServices from "./pages/DepartmentServicesPage";
import JobToolsPage from "./pages/JobToolsPage";
import WhoWeArePage from "./pages/WhoWeAre";
import CovidInfo from "./pages/CovidInfoPage";
function App() {
  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        {/* public routes */}
        <Route index element={<HomePage />}></Route>
        <Route path="news" element={<NewsPage />}></Route>
        <Route
          path="department-services"
          element={<DepartmentServices />}
        ></Route>
        <Route path="job-tools" element={<JobToolsPage />}></Route>
        <Route path="who-we-are" element={<WhoWeArePage />}></Route>
        <Route path="covid-info" element={<CovidInfo />}></Route>
        {/* End public routes */}
        {/* <Route path="login" element={<Login />} /> */}

        {/* Protected Routes */}

        {/* End Protected Routes */}
      </Route>
    </Routes>
  );
}

export default App;
