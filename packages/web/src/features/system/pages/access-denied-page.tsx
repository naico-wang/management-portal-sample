import { Link } from "react-router-dom"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { routeConfig } from "@/router/route-config"

export function AccessDeniedPage() {
  return (
    <main className="bg-muted/30 flex min-h-svh items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Access denied</CardTitle>
          <CardDescription>
            Your current role does not have permission to view this page.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Request access from an administrator or return to the dashboard.
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link to={routeConfig.dashboard.path}>Back to dashboard</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}
