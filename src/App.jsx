import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import DashboredLayouts from "./layouts/DashboredLayouts";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route
        path="/login"
        element={<Login setIsLoggedIn={setIsLoggedIn} />}
      />

      <Route
        path="/dashbored"
        element={
          isLoggedIn ? (
            <DashboredLayouts
              setIsLoggedIn={setIsLoggedIn}
            />
          ) : (
            <Navigate to="/login" />)
        }
      />
    </Routes>
    
  );
}

export default App;



