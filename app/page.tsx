import SessionDurationCard from "@/app/ui/dashboard_card/session_duration_card.components"
import ViewCountCard from "@/app/ui/dashboard_card/view_count_card.components"
import VisitorCountCard from "@/app/ui/dashboard_card/visitor_count_card.components"
import { Suspense } from "react"
import BrowserSummaryCard from "./ui/summary/browser_summary.components"
import DeviceSummaryCard from "./ui/summary/device_summary.components"
import OsSummaryCard from "./ui/summary/os_summary.components"

export default function Home() {
  return (
    <div className="flex flex-col p-6">
      <div className="flex flex-col md:flex-row lg:flex-row justify-center min-w-full md:space-x-2 lg:space-x-4">
        <Suspense fallback={<p>Loading total views today..</p>}>
          <ViewCountCard />
        </Suspense>

        <Suspense fallback={<p>Loading visitor count..</p>}>
          <VisitorCountCard />
        </Suspense>

        <Suspense fallback={<p>Loading session duration..</p>}>
          <SessionDurationCard />
        </Suspense>
      </div>

      {/* Add chart components here */}

      <div className="flex lg:flex-row md:flex-row flex-col">
        <Suspense fallback={<p>Loading browser summary..</p>}>
          <BrowserSummaryCard />
        </Suspense>

        <Suspense fallback={<p>Loading OS summary..</p>}>
          <OsSummaryCard />
        </Suspense>

        <Suspense fallback={<p>Loading device summary..</p>}>
          <DeviceSummaryCard />
        </Suspense>
      </div>
    </div>
  )
}
