import type { ReactNode } from "react"

import { Toaster } from "@workspace/ui/components/toaster"
import { TooltipProvider } from "@workspace/ui/components/tooltip"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/features/auth/model/auth-context"

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          {children}
          <Toaster position="top-right" richColors />
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
