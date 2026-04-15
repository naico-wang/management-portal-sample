import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

export function EnvironmentPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Environment</CardTitle>
        <CardDescription>
          Deployment and infrastructure configuration overview.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3 md:grid-cols-2">
        <div className="rounded-3xl border p-4">
          <p className="font-medium">Production</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Connected to managed VPC and private services.
          </p>
        </div>
        <div className="rounded-3xl border p-4">
          <p className="font-medium">Staging</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Mirrors production integrations with sandbox credentials.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
