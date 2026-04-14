import { NavLink, Outlet } from "react-router-dom"

import { cn } from "@workspace/ui/lib/utils"

const items = [
  { to: "/users", label: "Directory", end: true },
  { to: "/users/roles", label: "Roles" },
  { to: "/users/audit-trail", label: "Audit Trail" },
] as const

export function UsersSectionLayout() {
  return (
    <div className="flex flex-col gap-6">
      <nav className="flex flex-wrap gap-2">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              cn(
                "rounded-full border px-4 py-2 text-sm transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background hover:bg-muted"
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  )
}
