import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Container from "./pages/container";
import { pdfjs } from "react-pdf";
import { lazy } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const AboutPage = lazy(() => import("./pages/about"));
const ResumePage = lazy(() => import("./pages/resume"));
const ProjectsPage = lazy(() => import("./pages/projects"));
const ContactPage = lazy(() => import("./pages/contact"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Container />,
      children: [
        { element: <Navigate to="about" />, index: true },
        { path: "about", element: <AboutPage /> },
        { path: "resume", element: <ResumePage /> },
        { path: "projects", element: <ProjectsPage /> },
        { path: "contact", element: <ContactPage /> },
      ],
    },
    { path: "*", element: <Navigate to="/about" /> },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
