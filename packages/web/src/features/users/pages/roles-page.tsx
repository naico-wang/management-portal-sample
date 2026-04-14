import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

const roles = [
  ["Platform Admin", "Full admin access", "6 users"],
  ["Operations Manager", "Store and workflow administration", "14 users"],
  ["Finance Analyst", "Reporting and export access", "9 users"],
] as const

export function RolesPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Role Matrix</CardTitle>
        <CardDescription>
          Review role definitions and current assignments.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {roles.map(([name, description, count]) => (
          <div key={name} className="rounded-3xl border p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-medium">{name}</p>
                <p className="text-muted-foreground text-sm">{description}</p>
              </div>
              <span className="bg-muted rounded-full px-3 py-1 text-xs font-medium">
                {count}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
