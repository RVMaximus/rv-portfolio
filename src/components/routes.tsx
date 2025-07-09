import { Home } from "../pages/Home/Home";
import { Profile } from "../pages/Profile/Profile";
import { Blogs } from "../pages/Blogs/Blogs";
// import { Projects } from "../pages/Projects/Projects";
import { Tools } from "../pages/Tools/Tools";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import NotFound from "./NotFound";

const RootLayout = () => (
  <>
    <Navigation />
    <Outlet />
  </>
);

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "home", Component: Home },
      { path: "blogs", Component: Blogs },
      // { path: "projects", Component: Projects },
      { path: "profile", Component: Profile },
      { path: "tools", Component: Tools },
      { path: "*", Component: NotFound },
    ],
  },
]);
