import { useDeferredValue, useMemo, useState } from "react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { DataTable } from "@workspace/ui/components/data-table"
import { Input } from "@workspace/ui/components/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import { dataTableDemoRows } from "@/features/admin/model/data-table-demo-data"

const statusOptions = ["all", "Done", "In Process"] as const
const typeOptions = [
  "all",
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
  "all",
  "Anita Chen",
  "Marcus Li",
  "Leo Park",
  "Assign reviewer",
] as const

export function DataTableDemoPage() {
  const [keyword, setKeyword] = useState("")
  const [status, setStatus] = useState<(typeof statusOptions)[number]>("all")
  const [type, setType] = useState<(typeof typeOptions)[number]>("all")
  const [reviewer, setReviewer] =
    useState<(typeof reviewerOptions)[number]>("all")
  const deferredKeyword = useDeferredValue(keyword)
  const deferredStatus = useDeferredValue(status)
  const deferredType = useDeferredValue(type)
  const deferredReviewer = useDeferredValue(reviewer)
  const isFiltering =
    keyword !== deferredKeyword ||
    status !== deferredStatus ||
    type !== deferredType ||
    reviewer !== deferredReviewer

  const filteredRows = useMemo(() => {
    const normalizedKeyword = deferredKeyword.trim().toLowerCase()

    return dataTableDemoRows.filter((row) => {
      const matchesKeyword =
        normalizedKeyword.length === 0 ||
        [row.header, row.type, row.status, row.reviewer]
          .join(" ")
          .toLowerCase()
          .includes(normalizedKeyword)
      const matchesStatus =
        deferredStatus === "all" || row.status === deferredStatus
      const matchesType = deferredType === "all" || row.type === deferredType
      const matchesReviewer =
        deferredReviewer === "all" || row.reviewer === deferredReviewer

      return matchesKeyword && matchesStatus && matchesType && matchesReviewer
    })
  }, [deferredKeyword, deferredReviewer, deferredStatus, deferredType])

  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Data Table</h1>
        <p className="text-muted-foreground text-sm">
          Explore filtering, row actions, and table interactions in one place.
        </p>
      </div>

      <Card className="overflow-hidden">
        <DataTable
          data={filteredRows}
          isLoading={isFiltering}
          toolbarContent={
            <>
              <Input
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
                placeholder="Search header, type, status, reviewer..."
                className="w-full min-w-[16rem] md:w-[20rem]"
              />
              <Select
                value={status}
                onValueChange={(value) =>
                  setStatus(value as (typeof statusOptions)[number])
                }
              >
                <SelectTrigger className="w-full md:w-[10rem]" size="sm">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item === "all" ? "All status" : item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={type}
                onValueChange={(value) =>
                  setType(value as (typeof typeOptions)[number])
                }
              >
                <SelectTrigger className="w-full md:w-[11rem]" size="sm">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  {typeOptions.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item === "all" ? "All types" : item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={reviewer}
                onValueChange={(value) =>
                  setReviewer(value as (typeof reviewerOptions)[number])
                }
              >
                <SelectTrigger className="w-full md:w-[12rem]" size="sm">
                  <SelectValue placeholder="Reviewer" />
                </SelectTrigger>
                <SelectContent>
                  {reviewerOptions.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item === "all" ? "All reviewers" : item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setKeyword("")
                  setStatus("all")
                  setType("all")
                  setReviewer("all")
                }}
              >
                Reset filters
              </Button>
            </>
          }
        />
      </Card>
    </div>
  )
}
