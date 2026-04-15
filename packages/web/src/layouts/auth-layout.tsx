import { Outlet } from "react-router-dom"

import { Card, CardContent } from "@workspace/ui/components/card"

function LoginAside() {
  return (
    <div className="space-y-4 text-center">
      <img
        src="/logo.svg"
        alt="Management Portal"
        className="mx-auto h-[90px] w-[90px]"
      />
      <p className="text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase">
        Management Portal
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-balance">
        Product Operation Portal
      </h1>
      <p className="text-sm leading-6 text-muted-foreground">
        Product Operation Portal Description
      </p>
    </div>
  )
}

export function AuthLayout() {
  return (
    <main className="min-h-svh bg-background">
      <div className="mx-auto flex min-h-svh w-full max-w-xl items-center p-6 md:p-10">
        <Card className="w-full">
          <CardContent className="flex flex-col items-center gap-10 pt-6 text-center">
            <section className="flex items-center justify-center">
              <LoginAside />
            </section>
            <section className="w-full">
              <Outlet />
            </section>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
