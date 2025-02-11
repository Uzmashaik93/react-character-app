import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CharacterDetails from "./pages/CharacterDetailsPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters/:characterId" element={<CharacterDetails />} />

        <Route path="*" element={<h3>Page not found</h3>} />
      </Routes>
    </>
  );
}

export default App;
