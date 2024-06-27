import "./App.css";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter basename="/devchallenge-ai-project">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
