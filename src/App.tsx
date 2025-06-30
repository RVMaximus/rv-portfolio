import { routes } from "./components/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
