import React from "react";
import { Route, Routes } from "react-router-dom";

import Tools from "@pages/tools/Main";

const ToolsRoute = () => (
  <Routes>
    <Route path="/tools">
      <Route path="" element={<Tools page="tools" />} />
      <Route path="loots" element={<></>} />
      <Route path="combat" element={<></>} />
    </Route>
  </Routes>
);

export default ToolsRoute;
