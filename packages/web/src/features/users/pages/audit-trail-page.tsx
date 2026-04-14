import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

const events = [
  ["2026-04-14 09:10", "Avery Chen updated role assignments"],
  ["2026-04-14 08:42", "Jordan Kim accepted invitation"],
  ["2026-04-13 18:30", "MFA policy updated for admin group"],
] as const

export function AuditTrailPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Audit Trail</CardTitle>
        <CardDescription>
          Recent user management and access control events.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {events.map(([time, event]) => (
          <div key={time} className="rounded-3xl border p-4">
            <p className="text-muted-foreground text-xs">{time}</p>
            <p className="mt-1 text-sm font-medium">{event}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
