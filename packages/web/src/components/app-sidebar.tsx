import { startTransition } from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"
import { cn } from "@workspace/ui/lib/utils"
import { NavUser } from "@workspace/ui/components/nav-user"
import { Separator } from "@workspace/ui/components/separator"
import { TeamSwitcher } from "@workspace/ui/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@workspace/ui/components/sidebar"
import { ChevronRightIcon } from "lucide-react"
import { useAuth } from "@/features/auth/model/auth-context"
import { sidebarSections, sidebarTeams } from "@/router/route-config"

function isPathActive(currentPath: string, itemPath: string) {
  return currentPath === itemPath || currentPath.startsWith(`${itemPath}/`)
}

export function AppSidebar() {
  const location = useLocation()
  const navigate = useNavigate()
  const { logout, user } = useAuth()

  function handleLogout() {
    logout()
    startTransition(() => {
      navigate("/login", { replace: true })
    })
  }

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <TeamSwitcher teams={[...sidebarTeams]} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {sidebarSections.map((section) => {
            const Icon = section.icon
            const isSectionActive = section.items.some(
              (item) => isPathActive(location.pathname, item.path)
            )

            return (
              <Collapsible
                key={section.label}
                asChild
                defaultOpen={isSectionActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={section.label}>
                      <Icon />
                      <span>{section.label}</span>
                      <ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {section.items.map((item) => {
                        const isActive = isPathActive(location.pathname, item.path)

                        return (
                          <SidebarMenuSubItem key={item.path}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={isActive}
                              className={cn(
                                "data-[active=true]:bg-primary/10 data-[active=true]:text-primary data-[active=true]:hover:bg-primary/15 data-[active=true]:hover:text-primary"
                              )}
                            >
                              <NavLink to={item.path}>
                                <span>{item.title}</span>
                              </NavLink>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        )
                      })}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            )
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <Separator />
        {user ? (
          <NavUser
            onLogout={handleLogout}
            user={{
              name: user.name,
              email: user.email,
              avatar: "/avatars/shadcn.jpg",
            }}
          />
        ) : null}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
