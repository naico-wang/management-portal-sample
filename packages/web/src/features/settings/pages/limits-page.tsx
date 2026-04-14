import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

export function LimitsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Operational Limits</CardTitle>
        <CardDescription>
          Guardrails applied to exports, jobs, and admin operations.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between rounded-3xl border p-4">
          <span className="font-medium">Bulk export rows</span>
          <span className="text-muted-foreground text-sm">50,000</span>
        </div>
        <div className="flex items-center justify-between rounded-3xl border p-4">
          <span className="font-medium">Concurrent background jobs</span>
          <span className="text-muted-foreground text-sm">12</span>
        </div>
      </CardContent>
    </Card>
  )
}
