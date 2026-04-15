import type { LucideIcon } from "lucide-react"
import { BarChart3Icon, Settings2Icon, UsersIcon } from "lucide-react"

import {
  APP_PERMISSIONS,
  type AppPermission,
} from "@/shared/config/access-control"

type RouteMeta = {
  breadcrumb: string
  path: string
  permission: AppPermission
  title: string
}

export const routeConfig = {
  dashboard: {
    path: "/home/dashboard",
    title: "Dashboard",
    breadcrumb: "Dashboard",
    permission: APP_PERMISSIONS.dashboardView,
  },
  dataTable: {
    path: "/home/data-table",
    title: "Data Table",
    breadcrumb: "Data Table",
    permission: APP_PERMISSIONS.dashboardView,
  },
  users: {
    directory: {
      path: "/users/directory",
      title: "User Directory",
      breadcrumb: "Directory",
      permission: APP_PERMISSIONS.usersView,
    },
    roles: {
      path: "/users/roles",
      title: "Roles",
      breadcrumb: "Roles",
      permission: APP_PERMISSIONS.usersView,
    },
    auditTrail: {
      path: "/users/audit-trail",
      title: "Audit Trail",
      breadcrumb: "Audit Trail",
      permission: APP_PERMISSIONS.usersView,
    },
  },
  settings: {
    general: {
      path: "/settings/general",
      title: "General Settings",
      breadcrumb: "General",
      permission: APP_PERMISSIONS.settingsView,
    },
    environment: {
      path: "/settings/environment",
      title: "Environment",
      breadcrumb: "Environment",
      permission: APP_PERMISSIONS.settingsView,
    },
    notifications: {
      path: "/settings/notifications",
      title: "Notifications",
      breadcrumb: "Notifications",
      permission: APP_PERMISSIONS.settingsView,
    },
    limits: {
      path: "/settings/limits",
      title: "Limits",
      breadcrumb: "Limits",
      permission: APP_PERMISSIONS.settingsView,
    },
  },
} as const satisfies {
  dashboard: RouteMeta
  dataTable: RouteMeta
  users: Record<"directory" | "roles" | "auditTrail", RouteMeta>
  settings: Record<
    "general" | "environment" | "notifications" | "limits",
    RouteMeta
  >
}

export type SidebarSection = {
  icon: LucideIcon
  items: RouteMeta[]
  label: string
}

export const sidebarSections: SidebarSection[] = [
  {
    label: "Operations",
    icon: BarChart3Icon,
    items: [routeConfig.dashboard, routeConfig.dataTable],
  },
  {
    label: "Access Control",
    icon: UsersIcon,
    items: [
      routeConfig.users.directory,
      routeConfig.users.roles,
      routeConfig.users.auditTrail,
    ],
  },
  {
    label: "Configuration",
    icon: Settings2Icon,
    items: [
      routeConfig.settings.general,
      routeConfig.settings.environment,
      routeConfig.settings.notifications,
      routeConfig.settings.limits,
    ],
  },
]

export const sidebarTeams = [
  {
    name: "Lululemon Ops",
    logo: <img src="/logo.svg" alt="Lululemon Ops" className="size-8" />,
    plan: "Enterprise",
  },
  {
    name: "Regional Admin",
    logo: <img src="/logo.svg" alt="Regional Admin" className="size-8" />,
    plan: "Business",
  },
  {
    name: "Platform Team",
    logo: <img src="/logo.svg" alt="Platform Team" className="size-8" />,
    plan: "Internal",
  },
] as const
