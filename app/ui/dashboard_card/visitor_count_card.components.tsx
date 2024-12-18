import database from "@/app/lib/utils/database"
import DashboardCard from "@/app/ui/dashboard_card/dashboard_card.components"

export default async function VisitorCountCard() {
  const db = database()
  const query = await db.execute(
    "select count(*) from visitor where created_at = date('now', 'start of day')"
  )
  const result = query.rows.at(0)
  const count = result ? result["count(*)"]?.toString() ?? "0" : "0"

  return <DashboardCard title="New Visitors" subtitle={count} />
}
