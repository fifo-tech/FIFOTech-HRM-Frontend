// layouts
import AuthenticationLayout from "@/components/layouts/AuthenticationLayout";
import MainLayout from "@/components/layouts/MainLayout";
import RootLayout from "@/components/layouts/RootLayout";
import ProtectedRoute from "@/components/ProtectedRoute";

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

import EmployeeEditPage from "@/pages/(admin)/(employee)/EmployeeEditPage";
import EmployeesExitPage from "@/pages/(admin)/(employee)/EmployeesExitPage";
import EmployeesRolesAndPrivilegesPage from "@/pages/(admin)/(employee)/EmployeesRolesAndPrivilegesPage";
import EmployeesShiftAndSchedulingPage from "@/pages/(admin)/(employee)/EmployeesShiftAndSchedulingPage";
import HrDepartmentEditPage from "@/pages/(admin)/(hr)/HrDepartmentEditPage";
import HrDesignationEditPage from "@/pages/(admin)/(hr)/HrDesignationEditPage";
import LeaveListPage from "@/pages/(admin)/(leave-request)/LeaveListPage";
import LeaveTypePage from "@/pages/(admin)/(leave-request)/LeaveTypePage";
import ApplicantsListPage from "@/pages/(admin)/(recruitment)/ApplicantsListPage";
import CareerCompletedListPage from "@/pages/(admin)/(recruitment)/CareerCompletedListPage";
import CareerPostsListPage from "@/pages/(admin)/(recruitment)/CareerPostsListPage";
import CreateCareerPostPage from "@/pages/(admin)/(recruitment)/CreateCareerPostPage";
// authentication pages
import AddEmployeeAttendancePage from "@/pages/(admin)/(attendance)/AddEmployeeAttendancePage";
import AddSelfAttendancePage from "@/pages/(admin)/(attendance)/AddSelfAttendancePage";
import EmployeesRolesAndPrivilegesEditPage from "@/pages/(admin)/(employee)/EmployeesRolesAndPrivilegesEditPage";
import SigninPage from "@/pages/(authentication)/SigninPage";

export const routes = [
  {
    path: "/",
    element: <RootLayout />, // Main layout
    children: [
      {
        path: "/",
        element: <AuthenticationLayout />, // Sign-in layout
        children: [
          {
            index: true, // Default route as SigninPage
            element: <SigninPage />,
          },
          {
            path: "sign-up",
            element: <SigninPage />,
          },
        ],
      },
      {
        path: "dashboard", // Separate path for the dashboard
        element: (
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        ), // Wrap MainLayout with ProtectedRoute
        children: [
          {
            index: true, // Home page of the dashboard
            //path: "/",
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
            path: "roles/:id/edit",
            element: <EmployeesRolesAndPrivilegesEditPage />,
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
            path: "employee-edit/:id",
            element: <EmployeeEditPage />,
          },

          {
            path: "departments-list",
            element: <HrDepartmentPage />,
          },
          {
            path: "departments/:id/edit",
            element: <HrDepartmentEditPage />,
          },
          {
            path: "designations-list",
            element: <HrDesignationPage />,
          },
          {
            path: "designations/:id/edit",
            element: <HrDesignationEditPage />,
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
            path: "add-self-attendance",
            element: <AddSelfAttendancePage />,
          },
          {
            path: "add-employee-attendance",
            element: <AddEmployeeAttendancePage />,
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
          {
            path: "create-career-post",
            element: <CreateCareerPostPage />,
          },
          {
            path: "career-posts-list",
            element: <CareerPostsListPage />,
          },
          {
            path: "career-completed-list",
            element: <CareerCompletedListPage />,
          },
          {
            path: "leaves-list",
            element: <LeaveListPage />,
          },
          {
            path: "leave-types",
            element: <LeaveTypePage />,
          },
        ],
      },
    ],
  },
];
