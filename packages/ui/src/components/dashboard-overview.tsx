import { ChartAreaInteractive } from "@workspace/ui/components/chart-area-interactive"
import { DataTable } from "@workspace/ui/components/data-table"
import {
  SectionCards,
  type SectionCardItem,
} from "@workspace/ui/components/section-cards"
import { type ChartAreaDatum } from "@workspace/ui/components/chart-area-interactive"
import { type schema } from "@workspace/ui/components/data-table"
import { z } from "zod"

type DashboardOverviewProps = {
  chartData: ChartAreaDatum[]
  sectionCards: SectionCardItem[]
  tableRows: z.infer<typeof schema>[]
}

export function DashboardOverview({
  chartData,
  sectionCards,
  tableRows,
}: DashboardOverviewProps) {
  return (
    <div className="@container/main flex flex-1 flex-col gap-4">
      <SectionCards items={sectionCards} />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive data={chartData} />
      </div>
      <DataTable data={tableRows} />
    </div>
  )
}
