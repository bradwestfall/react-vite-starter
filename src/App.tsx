import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage } from "./components/HomePage";
import "./globals.css";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="contact" element={<div>Contact</div>} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export function App() {
  return <RouterProvider router={router} />;
}

function NotFoundPage() {
  return <div>Not Found</div>;
}
