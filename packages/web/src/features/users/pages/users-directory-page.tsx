import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

const users = [
  ["Avery Chen", "Platform Admin", "Active"],
  ["Jordan Kim", "Operations Manager", "Pending Invite"],
  ["Taylor Singh", "Finance Analyst", "Active"],
] as const

export function UsersDirectoryPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Directory</CardTitle>
        <CardDescription>
          Manage active members and invitation status.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {users.map(([name, role, status]) => (
          <div
            key={name}
            className="flex items-center justify-between gap-4 rounded-3xl border p-4"
          >
            <div>
              <p className="font-medium">{name}</p>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
            <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
              {status}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
