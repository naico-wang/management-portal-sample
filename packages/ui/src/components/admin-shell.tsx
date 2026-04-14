import { Fragment, type ReactNode } from "react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"
import { Separator } from "@workspace/ui/components/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar"

type BreadcrumbEntry = {
  href?: string
  label: string
}

type AdminShellProps = {
  actions?: ReactNode
  breadcrumbs?: BreadcrumbEntry[]
  children: ReactNode
  sidebar?: ReactNode
  title: string
}

export function AdminShell({
  actions,
  breadcrumbs,
  children,
  sidebar,
  title,
}: AdminShellProps) {
  const items =
    breadcrumbs && breadcrumbs.length > 0 ? breadcrumbs : [{ label: title }]

  return (
    <SidebarProvider>
      {sidebar}
      <SidebarInset>
        <header className="bg-background/95 sticky top-0 z-10 flex h-16 shrink-0 items-center justify-between gap-4 border-b px-4 backdrop-blur supports-[backdrop-filter]:bg-background/80">
          <div className="flex min-w-0 items-center gap-3">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb className="min-w-0">
              <BreadcrumbList className="min-w-0 flex-nowrap">
                {items.map((item, index) => {
                  const isLast = index === items.length - 1
                  const itemClassName = !isLast
                    ? "hidden min-w-0 md:inline-flex"
                    : "min-w-0"

                  return (
                    <Fragment key={`${item.label}-${index}`}>
                      <BreadcrumbItem
                        className={itemClassName}
                      >
                        {isLast ? (
                          <BreadcrumbPage className="truncate">
                            {item.label}
                          </BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink
                            href={item.href ?? "#"}
                            className="max-w-[14rem] truncate"
                          >
                            {item.label}
                          </BreadcrumbLink>
                        )}
                      </BreadcrumbItem>
                      {!isLast ? (
                        <BreadcrumbSeparator
                          className="hidden shrink-0 md:block"
                        />
                      ) : null}
                    </Fragment>
                  )
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          {actions ? <div className="flex items-center gap-3">{actions}</div> : null}
        </header>
        <section className="flex-1 p-4 md:p-6">{children}</section>
      </SidebarInset>
    </SidebarProvider>
  )
}
