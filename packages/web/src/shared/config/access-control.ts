export const APP_PERMISSIONS = {
  dashboardView: "dashboard:view",
  settingsView: "settings:view",
  usersView: "users:view",
} as const

export type AppPermission =
  (typeof APP_PERMISSIONS)[keyof typeof APP_PERMISSIONS]

export const DEFAULT_ADMIN_PERMISSIONS: AppPermission[] = [
  APP_PERMISSIONS.dashboardView,
  APP_PERMISSIONS.usersView,
  APP_PERMISSIONS.settingsView,
]
