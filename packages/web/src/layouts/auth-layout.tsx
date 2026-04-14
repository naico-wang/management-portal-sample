import { Outlet } from "react-router-dom"

function LoginAside() {
  return (
    <div className="space-y-4">
      <img
        src="/logo.svg"
        alt="Management Portal"
        className="h-[90px] w-[90px]"
      />
      <p className="text-muted-foreground text-sm font-medium uppercase tracking-[0.2em]">
        Management Portal
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-balance">
        Product Operation Portal
      </h1>
      <p className="text-muted-foreground text-sm leading-6">
        Sign in to manage users, review operational data, and keep your
        configuration aligned across teams and environments.
      </p>
    </div>
  )
}

export function AuthLayout() {
  return (
    <main className="grid min-h-svh lg:grid-cols-2">
      <section className="bg-background flex items-center p-6 md:p-10">
        <div className="mx-auto w-full max-w-md">
          <LoginAside />
        </div>
      </section>
      <section className="bg-muted flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <Outlet />
        </div>
      </section>
    </main>
  )
}
