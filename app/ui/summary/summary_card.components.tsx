import React from "react"

interface SummaryProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  title: string
  subtitle: string
  children: React.ReactNode
}

export default async function SummaryCard({
  title,
  subtitle,
  children,
  ...rest
}: SummaryProps) {
  return (
    <div
      className="flex flex-col mt-6 flex-1 p-4 mx-2 rounded bg-foreground text-background"
      {...rest}
    >
      <div className="flex flex-row mb-2 justify-between">
        <h2 className="font-bold">{title}</h2>
        <h2 className="font-semibold">{subtitle}</h2>
      </div>
      <div className="flex flex-row">{children}</div>
    </div>
  )
}
