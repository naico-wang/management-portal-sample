import { SearchIcon } from "lucide-react"

import { Input } from "@workspace/ui/components/input"

export function AdminHeaderSearch() {
  return (
    <div className="relative w-full max-w-xs">
      <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search"
        className="h-9 w-full pl-9"
      />
    </div>
  )
}
