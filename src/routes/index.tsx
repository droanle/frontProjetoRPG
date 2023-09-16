import React from "react";
import { Route, Routes as Switch, BrowserRouter } from "react-router-dom";

import Home from "@pages/Home";
import Icons from "@/views/pages/Icons";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/icons" element={<Icons />} />

      <Route path="/" element={<Home page="home" />} />
      <Route path="/home" element={<Home page="home" />} />

      <Route path="/:book">
        <Route path="" element={<Home page="home" />} />
        <Route path="home" element={<Home page="home" />} />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
