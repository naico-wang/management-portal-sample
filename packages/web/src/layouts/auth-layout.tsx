import { Outlet } from "react-router-dom"

function LoginAside() {
  return (
    <div className="space-y-4">
      <p className="text-muted-foreground text-sm font-medium uppercase tracking-[0.2em]">
        Management Portal
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-balance">
        One layout for authentication, one layout for the admin workspace.
      </h1>
      <p className="text-muted-foreground text-sm leading-6">
        Login pages use a full-screen split layout. After authentication, the
        site switches to the admin shell with a sidebar, sticky header, and a
        dedicated content region for each page.
      </p>
    </div>
  )
}

export function AuthLayout() {
  return (
    <main className="grid min-h-svh lg:grid-cols-2">
      <section className="bg-muted flex items-center p-6 md:p-10">
        <div className="mx-auto w-full max-w-md">
          <LoginAside />
        </div>
      </section>
      <section className="bg-background flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <Outlet />
        </div>
      </section>
    </main>
  )
}
