import {
  type Dispatch,
  type SetStateAction,
  useDeferredValue,
  useMemo,
  useState,
} from "react"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { DataTable } from "@workspace/ui/components/data-table"
import { dataTableDemoRows } from "@/features/admin/model/data-table-demo-data"

const statusOptions = ["Done", "In Process"] as const
const typeOptions = [
  "Checklist",
  "Narrative",
  "Access Matrix",
  "Audit Pack",
  "Summary",
  "Analysis",
  "Plan",
  "Packet",
  "Runbook",
] as const
const reviewerOptions = [
  "Anita Chen",
  "Marcus Li",
  "Leo Park",
  "Assign reviewer",
] as const

function FilterTagGroup({
  label,
  options,
  selectedValues,
  onToggle,
}: {
  label: string
  options: readonly string[]
  selectedValues: string[]
  onToggle: (value: string) => void
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = selectedValues.includes(option)

          return (
            <Button
              key={option}
              type="button"
              size="xs"
              variant={isSelected ? "default" : "outline"}
              className="cursor-pointer rounded-full"
              onClick={() => onToggle(option)}
            >
              {option}
            </Button>
          )
        })}
      </div>
    </div>
  )
}

export function DataTableDemoPage() {
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedReviewers, setSelectedReviewers] = useState<string[]>([])
  const deferredStatuses = useDeferredValue(selectedStatuses)
  const deferredTypes = useDeferredValue(selectedTypes)
  const deferredReviewers = useDeferredValue(selectedReviewers)
  const isFiltering =
    selectedStatuses !== deferredStatuses ||
    selectedTypes !== deferredTypes ||
    selectedReviewers !== deferredReviewers

  const toggleValue = (
    value: string,
    setValue: Dispatch<SetStateAction<string[]>>
  ) => {
    setValue((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]
    )
  }

  const filteredRows = useMemo(() => {
    return dataTableDemoRows.filter((row) => {
      const matchesStatus =
        deferredStatuses.length === 0 || deferredStatuses.includes(row.status)
      const matchesType =
        deferredTypes.length === 0 || deferredTypes.includes(row.type)
      const matchesReviewer =
        deferredReviewers.length === 0 ||
        deferredReviewers.includes(row.reviewer)

      return matchesStatus && matchesType && matchesReviewer
    })
  }, [deferredReviewers, deferredStatuses, deferredTypes])

  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Data Table</h1>
        <p className="text-sm text-muted-foreground">
          Explore filtering, row actions, and table interactions in one place.
        </p>
      </div>

      <Card className="overflow-hidden">
        <DataTable
          data={filteredRows}
          isLoading={isFiltering}
          toolbarContent={
            <div className="w-full">
              <div className="flex w-full flex-col gap-4 rounded-3xl border bg-muted/30 p-4">
                <FilterTagGroup
                  label="Status"
                  options={statusOptions}
                  selectedValues={selectedStatuses}
                  onToggle={(value) => toggleValue(value, setSelectedStatuses)}
                />
                <FilterTagGroup
                  label="Type"
                  options={typeOptions}
                  selectedValues={selectedTypes}
                  onToggle={(value) => toggleValue(value, setSelectedTypes)}
                />
                <FilterTagGroup
                  label="Reviewer"
                  options={reviewerOptions}
                  selectedValues={selectedReviewers}
                  onToggle={(value) => toggleValue(value, setSelectedReviewers)}
                />
                <div className="flex justify-end pt-2">
                  <Button
                    size="sm"
                    onClick={() => {
                      setSelectedStatuses([])
                      setSelectedTypes([])
                      setSelectedReviewers([])
                    }}
                  >
                    Reset filters
                  </Button>
                </div>
              </div>
            </div>
          }
        />
      </Card>
    </div>
  )
}
