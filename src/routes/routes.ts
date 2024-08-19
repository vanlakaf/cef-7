import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import ProjectsPage from "../pages/ProjectsPage";
import ContactMePage from "../pages/ContactMePage";
import LegalNoticePage from "../pages/LegalNoticePage";
import BlogPage from "../pages/BlogPage";
import BlogDetailsPage from "../pages/BlogDetailsPage";
import NotFoundPage from "../pages/NotFoundPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/services",
    Component: ServicesPage,
  },
  {
    path: "/projects",
    Component: ProjectsPage,
  },
  {
    path: "/contact-me",
    Component: ContactMePage,
  },
  {
    path: "/legal-notice",
    Component: LegalNoticePage,
  },
  {
    path: "/blog",
    Component: BlogPage,
  },
  {
    path: "/blog/:blogId",
    Component: BlogDetailsPage,
  },
  {
    path: "/*",
    Component: NotFoundPage,
  },
]);
