import type { AppPermission } from "@/shared/config/access-control"

export type AppRouteHandle = {
  breadcrumb?: string
  permission?: AppPermission
  title?: string
}
