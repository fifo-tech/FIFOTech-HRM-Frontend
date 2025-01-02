// layouts
import AuthenticationLayout from "@/components/layouts/AuthenticationLayout";
import MainLayout from "@/components/layouts/MainLayout";
import RootLayout from "@/components/layouts/RootLayout";

// common pages
import HomePage from "@/pages/(common)/HomePage";

// admin pages
import AttendanceDailyListPage from "@/pages/(admin)/(attendance)/AttendanceDailyListPage";
import AttendanceMonthlyReportPage from "@/pages/(admin)/(attendance)/AttendanceMonthlyReportPage";
import AttendanceOvertimeRequestPage from "@/pages/(admin)/(attendance)/AttendanceOvertimeRequestPage";
import ManualAttendancePage from "@/pages/(admin)/(attendance)/ManualAttendancePage";
import EmployeeDetailsPage from "@/pages/(admin)/(employee)/EmployeeDetailsPage";
import EmployeesPage from "@/pages/(admin)/(employee)/EmployeesPage/index";
import HrAnnouncementPage from "@/pages/(admin)/(hr)/HrAnnouncementPage";
import HrDepartmentPage from "@/pages/(admin)/(hr)/HrDepartmentPage";
import HrDesignationPage from "@/pages/(admin)/(hr)/HrDesignationPage";
import HrPoliciesPage from "@/pages/(admin)/(hr)/HrPoliciesPage";
import ComplaintsListPage from "@/pages/(admin)/complaints/ComplaintsListPage";

// authentication pages

import EmployeesExitPage from "@/pages/(admin)/(employee)/EmployeesExitPage";
import EmployeesRolesAndPrivilegesPage from "@/pages/(admin)/(employee)/EmployeesRolesAndPrivilegesPage";
import EmployeesShiftAndSchedulingPage from "@/pages/(admin)/(employee)/EmployeesShiftAndSchedulingPage";
import ApplicantsListPage from "@/pages/(admin)/(recruitment)/ApplicantsListPage";
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
            path: "employee-roles",
            element: <EmployeesRolesAndPrivilegesPage />,
          },
          {
            path: "office-shifts",
            element: <EmployeesShiftAndSchedulingPage />,
          },
          {
            path: "employees-exit",
            element: <EmployeesExitPage />,
          },
          {
            path: "departments-list",
            element: <HrDepartmentPage />,
          },
          {
            path: "designations-list",
            element: <HrDesignationPage />,
          },
          {
            path: "policies-list",
            element: <HrPoliciesPage />,
          },
          {
            path: "announcement-list",
            element: <HrAnnouncementPage />,
          },
          {
            path: "attendance-monthly-report",
            element: <AttendanceMonthlyReportPage />,
          },
          {
            path: "attendance-daily-list",
            element: <AttendanceDailyListPage />,
          },
          {
            path: "manual-attendance",
            element: <ManualAttendancePage />,
          },
          {
            path: "overtime-request",
            element: <AttendanceOvertimeRequestPage />,
          },
          {
            path: "complaint-list",
            element: <ComplaintsListPage />,
          },
          {
            path: "Applicants-list",
            element: <ApplicantsListPage />,
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
