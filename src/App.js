import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

/**
 * App is a wrapper for <Layout>, you should not need to change this file.
 */

function App() {
  return (
    <div className="app-routes">
      <Routes>
        <Route path="/*" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
