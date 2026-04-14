import { startTransition } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { LoginForm } from "@workspace/ui/components/login-form"
import { useAuth } from "@/features/auth/model/auth-context"
import { routeConfig } from "@/router/route-config"

type LoginLocationState = {
  from?: string
}

export function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useAuth()

  const redirectTo =
    (location.state as LoginLocationState | null)?.from ??
    routeConfig.dashboard.path

  return (
    <LoginForm
      onGoogleLogin={() => {
        login("admin@management-portal.local")
        startTransition(() => {
          navigate(routeConfig.dashboard.path, { replace: true })
        })
      }}
      onLogin={() => {
        login("admin@management-portal.local")
        startTransition(() => {
          navigate(redirectTo, { replace: true })
        })
      }}
    />
  )
}
