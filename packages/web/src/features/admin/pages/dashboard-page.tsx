import { DashboardOverview } from "@workspace/ui/components/dashboard-overview"
import {
  dashboardChartData,
  dashboardSectionCards,
  dashboardTableRows,
} from "@/features/admin/model/dashboard-data"

export function DashboardPage() {
  return (
    <DashboardOverview
      chartData={dashboardChartData}
      sectionCards={dashboardSectionCards}
      tableRows={dashboardTableRows}
    />
  )
}
