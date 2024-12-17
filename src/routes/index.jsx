// layouts
import AuthenticationLayout from "@/components/layouts/AuthenticationLayout";
import MainLayout from "@/components/layouts/MainLayout";
import RootLayout from "@/components/layouts/RootLayout";

// common pages
import HomePage from "@/pages/(common)/HomePage";

// admin pages
import EmployeesPage from "@/pages/(admin)/EmployeesPage/index";

// authentication pages
import SigninPage from "@/pages/(authentication)/SigninPage";

export const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "employees",
            element: <EmployeesPage />,
          },
        ],
      },
      {
        path: "authentication",
        element: <AuthenticationLayout />,
        children: [
          {
            path: "sing-in",
            element: <SigninPage />,
          },
          {
            path: "sing-up",
            element: <SigninPage />,
          },
        ],
      },
    ],
  },
];
