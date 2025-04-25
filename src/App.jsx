import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<UserRoutes />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
