"use client"

import type { LucideIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { TrendingUpIcon, TrendingDownIcon } from "lucide-react"

export type SectionCardItem = {
  description: string
  footer: string
  id: string
  summary: string
  trend: string
  trendDirection: "up" | "down"
  value: string
}

const trendIcons: Record<SectionCardItem["trendDirection"], LucideIcon> = {
  up: TrendingUpIcon,
  down: TrendingDownIcon,
}

export function SectionCards({ items }: { items: SectionCardItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
      {items.map((item) => {
        const TrendIcon = trendIcons[item.trendDirection]

        return (
          <Card key={item.id} className="@container/card">
            <CardHeader>
              <CardDescription>{item.description}</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                {item.value}
              </CardTitle>
              <CardAction>
                <Badge variant="outline">
                  <TrendIcon />
                  {item.trend}
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                {item.summary} <TrendIcon className="size-4" />
              </div>
              <div className="text-muted-foreground">{item.footer}</div>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}
