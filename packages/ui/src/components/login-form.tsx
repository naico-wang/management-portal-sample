import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"
import * as React from "react"

export function LoginForm({
  className,
  onSsoLogin,
  ...props
}: React.ComponentProps<"div"> & {
  onSsoLogin?: () => void
}) {
  return (
    <div className={cn("flex flex-col items-center gap-4 text-center", className)} {...props}>
      <Button
        type="button"
        className="h-12 w-full cursor-pointer"
        onClick={() => onSsoLogin?.()}
      >
        Login with SSO
      </Button>
      <p className="text-sm text-muted-foreground">如果需要权限，请申请XXXXX组</p>
    </div>
  )
}
