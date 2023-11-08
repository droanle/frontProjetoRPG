import React from "react";
import { Route, Routes } from "react-router-dom";

import Notes from "@/views/pages/notes/Main";

const NotesRoute = () => (
  <Routes>
    <Route path="notes" element={<Notes page="notes" />} />
  </Routes>
);

export default NotesRoute;
