import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./utilitles/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

import {
  Footer,
  Home,
  LogIn,
  Navbar,
  SignUp,
  CreateProject,
  EditProject,
  ProjectDetails,
  ProjectList,
  PublicProjectDetails,
  PublicProjectList,
} from "./components";

function App() {
  return (
    <div>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LogIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="publicprojects/" element={<PublicProjectList />} />
          <Route
            exact
            path="publicprojects/:id"
            element={<PublicProjectDetails />}
          />
          <Route
            exact
            path="/projects"
            element={
              <PrivateRoute>
                <ProjectList />
              </PrivateRoute>
            }
          />{" "}
          <Route
            exact
            path="/projects/:id"
            element={
              <PrivateRoute>
                <ProjectDetails />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/projects/:id/edit"
            element={
              <PrivateRoute>
                <EditProject />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/projects/create"
            element={
              <PrivateRoute>
                <CreateProject />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
