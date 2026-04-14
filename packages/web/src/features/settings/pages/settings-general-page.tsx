import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

export function SettingsGeneralPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Workspace Preferences</CardTitle>
        <CardDescription>Global configuration for the admin portal.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <div className="flex items-center justify-between rounded-3xl border p-4">
          <div>
            <p className="font-medium">Session timeout</p>
            <p className="text-muted-foreground">
              Automatically sign out after inactivity.
            </p>
          </div>
          <Button variant="outline">30 min</Button>
        </div>
        <div className="flex items-center justify-between rounded-3xl border p-4">
          <div>
            <p className="font-medium">Theme mode</p>
            <p className="text-muted-foreground">
              Allow users to choose system, dark, or light mode.
            </p>
          </div>
          <Button variant="outline">System</Button>
        </div>
      </CardContent>
    </Card>
  )
}
