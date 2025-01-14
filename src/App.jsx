import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import AuthProvider from "./providers/AuthProvider"; // Import the AuthProvider

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
