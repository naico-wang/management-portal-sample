import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

export function NotificationsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>
          Routing rules for alerts, digests, and operational updates.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="rounded-3xl border p-4">
          <p className="font-medium">Incident alerts</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Delivered to email and Slack for on-call groups.
          </p>
        </div>
        <div className="rounded-3xl border p-4">
          <p className="font-medium">Daily digest</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Sent at 08:00 local time to operations managers.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
