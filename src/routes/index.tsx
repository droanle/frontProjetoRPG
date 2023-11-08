import React from "react";
import { Route, Routes as Switch, BrowserRouter } from "react-router-dom";

import Home from "@pages/Home";
import Icons from "@/views/pages/Icons";

import AdventuresRoutes from "./adventures";
import ToolsRoute from "./tools";
import NotesRoute from "./notes";

import SelectBook from "@pages/SelectBook";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/icons" element={<Icons />} />

      <Route path="/" element={<SelectBook page="home" />} />
      <Route path="/home" element={<SelectBook page="home" />} />

      <Route path="/adventures" element={<SelectBook page="adventures" />} />
      <Route path="/notes" element={<SelectBook page="notes" />} />
      <Route path="/tools" element={<SelectBook page="tools" />} />

      <Route path="/:book">
        <Route path="" element={<Home page="home" />} />
        <Route path="home" element={<Home page="home" />} />
      </Route>

      <Route
        path="/:book/*"
        element={
          <>
            <AdventuresRoutes />
            <ToolsRoute />
            <NotesRoute />
          </>
        }
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
