import * as React from "react"

import {
  DEFAULT_ADMIN_PERMISSIONS,
  type AppPermission,
} from "@/shared/config/access-control"

type AuthUser = {
  email: string
  id: string
  name: string
  permissions: AppPermission[]
}

type AuthContextValue = {
  hasPermission: (permission?: AppPermission) => boolean
  isAuthenticated: boolean
  login: (email: string) => void
  logout: () => void
  user: AuthUser | null
}

const AUTH_STORAGE_KEY = "management-portal.auth-user"

const AuthContext = React.createContext<AuthContextValue | undefined>(undefined)

function readStoredUser(): AuthUser | null {
  const raw = localStorage.getItem(AUTH_STORAGE_KEY)

  if (!raw) {
    return null
  }

  try {
    return JSON.parse(raw) as AuthUser
  } catch {
    localStorage.removeItem(AUTH_STORAGE_KEY)
    return null
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<AuthUser | null>(() =>
    readStoredUser()
  )

  const login = React.useCallback((email: string) => {
    const nextUser: AuthUser = {
      id: "admin-user",
      name: "Admin User",
      email,
      permissions: DEFAULT_ADMIN_PERMISSIONS,
    }

    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(nextUser))
    setUser(nextUser)
  }, [])

  const logout = React.useCallback(() => {
    localStorage.removeItem(AUTH_STORAGE_KEY)
    setUser(null)
  }, [])

  const hasPermission = React.useCallback(
    (permission?: AppPermission) => {
      if (!permission) {
        return true
      }

      return user?.permissions.includes(permission) ?? false
    },
    [user]
  )

  const value = React.useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      login,
      logout,
      hasPermission,
    }),
    [hasPermission, login, logout, user]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = React.useContext(AuthContext)

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }

  return context
}
