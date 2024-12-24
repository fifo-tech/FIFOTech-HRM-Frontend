// layouts
import AuthenticationLayout from "@/components/layouts/AuthenticationLayout";
import MainLayout from "@/components/layouts/MainLayout";
import RootLayout from "@/components/layouts/RootLayout";

// common pages
import HomePage from "@/pages/(common)/HomePage";

// admin pages
import EmployeeDetailsPage from "@/pages/(admin)/(employee)/EmployeeDetailsPage";
import EmployeesPage from "@/pages/(admin)/(employee)/EmployeesPage/index";
import HrDesignationPage from "@/pages/(admin)/(hr)/HrDesignationPage";

// authentication pages
import HrDepartmentPage from "@/pages/(admin)/(hr)/HrDepartmentPage";
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
          {
            path: "employee-details/:id",
            element: <EmployeeDetailsPage />,
          },
          {
            path: "departments-list",
            element: <HrDepartmentPage />,
          },
          {
            path: "designations-list",
            element: <HrDesignationPage />,
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
