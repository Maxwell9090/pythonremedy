import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import DemoscreativetimcombyhtmltodesignFREEversion from "pages/DemoscreativetimcombyhtmltodesignFREEversion";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "demoscreativetimcombyhtmltodesignfreeversion",
      element: <DemoscreativetimcombyhtmltodesignFREEversion />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
