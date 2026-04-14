import type { LucideIcon } from "lucide-react"
import {
  AudioLinesIcon,
  BarChart3Icon,
  GalleryVerticalEndIcon,
  Settings2Icon,
  TerminalIcon,
  UsersIcon,
} from "lucide-react"

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
    path: "/dashboard",
    title: "Dashboard",
    breadcrumb: "Dashboard",
    permission: APP_PERMISSIONS.dashboardView,
  },
  users: {
    index: {
      path: "/users",
      title: "Users",
      breadcrumb: "Users",
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
    index: {
      path: "/settings",
      title: "Settings",
      breadcrumb: "Settings",
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
  users: Record<"index" | "roles" | "auditTrail", RouteMeta>
  settings: Record<"index" | "environment" | "notifications" | "limits", RouteMeta>
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
    items: [routeConfig.dashboard],
  },
  {
    label: "Access Control",
    icon: UsersIcon,
    items: [
      routeConfig.users.index,
      routeConfig.users.roles,
      routeConfig.users.auditTrail,
    ],
  },
  {
    label: "Configuration",
    icon: Settings2Icon,
    items: [
      routeConfig.settings.index,
      routeConfig.settings.environment,
      routeConfig.settings.notifications,
      routeConfig.settings.limits,
    ],
  },
]

export const sidebarTeams = [
  {
    name: "Lululemon Ops",
    logo: <GalleryVerticalEndIcon />,
    plan: "Enterprise",
  },
  {
    name: "Regional Admin",
    logo: <AudioLinesIcon />,
    plan: "Business",
  },
  {
    name: "Platform Team",
    logo: <TerminalIcon />,
    plan: "Internal",
  },
] as const
