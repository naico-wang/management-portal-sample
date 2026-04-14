import { Outlet, useMatches } from "react-router-dom"

import { AdminHeaderSearch } from "@workspace/ui/components/admin-header-search"
import { AdminShell } from "@workspace/ui/components/admin-shell"
import { AppSidebar } from "@/components/app-sidebar"
import type { AppRouteHandle } from "@/shared/types/router"

function useRouteHandle() {
  const matches = useMatches()
  const matched = [...matches]
    .reverse()
    .find((match) => match.handle && typeof match.handle === "object")

  return (matched?.handle as AppRouteHandle | undefined) ?? {}
}

function useBreadcrumbs() {
  const matches = useMatches()

  return matches.flatMap((match) => {
    const handle = match.handle as AppRouteHandle | undefined

    if (!handle?.breadcrumb) {
      return []
    }

    return [
      {
        label: handle.breadcrumb,
        href: match.pathname,
      },
    ]
  })
}

export function AdminLayout() {
  const { title } = useRouteHandle()
  const breadcrumbs = useBreadcrumbs()

  return (
    <AdminShell
      title={title ?? "Admin"}
      breadcrumbs={breadcrumbs}
      actions={<AdminHeaderSearch />}
      sidebar={<AppSidebar />}
    >
      <Outlet />
    </AdminShell>
  )
}
