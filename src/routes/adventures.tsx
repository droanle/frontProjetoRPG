import React from "react";
import { Route, Routes } from "react-router-dom";

import Adventures from "@pages/adventures/Main";

const AdventuresRoutes = () => (
  <Routes>
    <Route path="adventures" element={<Adventures page="adventures" />} />
  </Routes>
);

export default AdventuresRoutes;
