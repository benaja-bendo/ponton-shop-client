import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index";

export default function App() {
  return <RouterProvider router={router} />;
}
