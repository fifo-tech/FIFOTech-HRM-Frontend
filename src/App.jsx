import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";
import { routes } from "./routes";

const App = () => {
  const router = createBrowserRouter(routes);

  return (
    <AuthProvider>
      <div>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
};

export default App;
