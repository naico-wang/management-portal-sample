import { Navigate, createBrowserRouter } from "react-router-dom"

import { AdminLayout } from "@/layouts/admin-layout"
import { AuthLayout } from "@/layouts/auth-layout"
import {
  PublicOnlyGuard,
  RequireAuthGuard,
  RequirePermissionGuard,
} from "@/router/guards/auth-guards"
import { routeConfig } from "@/router/route-config"
import { DataTableDemoPage } from "@/features/admin/pages/data-table-demo-page"
import { DashboardPage } from "@/features/admin/pages/dashboard-page"
import { LoginPage } from "@/features/auth/pages/login-page"
import { SettingsSectionLayout } from "@/features/settings/layouts/settings-section-layout"
import { EnvironmentPage } from "@/features/settings/pages/environment-page"
import { LimitsPage } from "@/features/settings/pages/limits-page"
import { NotificationsPage } from "@/features/settings/pages/notifications-page"
import { SettingsGeneralPage } from "@/features/settings/pages/settings-general-page"
import { AccessDeniedPage } from "@/features/system/pages/access-denied-page"
import { UsersSectionLayout } from "@/features/users/layouts/users-section-layout"
import { AuditTrailPage } from "@/features/users/pages/audit-trail-page"
import { RolesPage } from "@/features/users/pages/roles-page"
import { UsersDirectoryPage } from "@/features/users/pages/users-directory-page"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={routeConfig.dashboard.path} replace />,
  },
  {
    element: <PublicOnlyGuard />,
    children: [
      {
        path: "/login",
        element: <AuthLayout />,
        children: [{ index: true, element: <LoginPage /> }],
      },
    ],
  },
  {
    path: "/access-denied",
    element: <AccessDeniedPage />,
  },
  {
    element: <RequireAuthGuard />,
    children: [
      {
        path: "/",
        element: <AdminLayout />,
        handle: {
          title: "Management Portal",
          breadcrumb: "Management Portal",
        },
        children: [
          {
            index: true,
            element: <Navigate to={routeConfig.dashboard.path} replace />,
          },
          {
            element: (
              <RequirePermissionGuard
                permission={routeConfig.dashboard.permission}
              />
            ),
            children: [
              {
                path: "home/dashboard",
                element: <DashboardPage />,
                handle: routeConfig.dashboard,
              },
              {
                path: "home/data-table",
                element: <DataTableDemoPage />,
                handle: routeConfig.dataTable,
              },
            ],
          },
          {
            element: (
              <RequirePermissionGuard
                permission={routeConfig.users.directory.permission}
              />
            ),
            children: [
              {
                element: <UsersSectionLayout />,
                children: [
                  {
                    path: "users/directory",
                    element: <UsersDirectoryPage />,
                    handle: routeConfig.users.directory,
                  },
                  {
                    path: "users/roles",
                    element: <RolesPage />,
                    handle: routeConfig.users.roles,
                  },
                  {
                    path: "users/audit-trail",
                    element: <AuditTrailPage />,
                    handle: routeConfig.users.auditTrail,
                  },
                ],
              },
            ],
          },
          {
            element: (
              <RequirePermissionGuard
                permission={routeConfig.settings.general.permission}
              />
            ),
            children: [
              {
                element: <SettingsSectionLayout />,
                children: [
                  {
                    path: "settings/general",
                    element: <SettingsGeneralPage />,
                    handle: routeConfig.settings.general,
                  },
                  {
                    path: "settings/environment",
                    element: <EnvironmentPage />,
                    handle: routeConfig.settings.environment,
                  },
                  {
                    path: "settings/notifications",
                    element: <NotificationsPage />,
                    handle: routeConfig.settings.notifications,
                  },
                  {
                    path: "settings/limits",
                    element: <LimitsPage />,
                    handle: routeConfig.settings.limits,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
])
