import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";
import AboutPage from "./pages/about";
import ResumePage from "./pages/resume";
import Container from "./pages/container";
import ProjectsPage from "./pages/projects";
import ContactPage from "./pages/contact";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

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
