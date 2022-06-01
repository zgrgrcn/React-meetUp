import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritiesPage from "./pages/Favorities";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new" element={<NewMeetupPage />} />
        <Route path="/fav" element={<FavoritiesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
