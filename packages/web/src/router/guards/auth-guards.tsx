import { Navigate, Outlet, useLocation } from "react-router-dom"

import { useAuth } from "@/features/auth/model/auth-context"
import type { AppPermission } from "@/shared/config/access-control"
import { routeConfig } from "@/router/route-config"

export function PublicOnlyGuard() {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Navigate to={routeConfig.dashboard.path} replace />
  }

  return <Outlet />
}

export function RequireAuthGuard() {
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  return <Outlet />
}

export function RequirePermissionGuard({
  permission,
}: {
  permission: AppPermission
}) {
  const { hasPermission } = useAuth()

  if (!hasPermission(permission)) {
    return <Navigate to="/access-denied" replace />
  }

  return <Outlet />
}
