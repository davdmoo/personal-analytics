import database from "@/app/lib/utils/database"
import DashboardCard from "@/app/ui/dashboard_card/dashboard_card.components"

export default async function SessionDurationCard() {
  const db = database()
  const query = await db.execute(
    "select avg(session_end - session_start) as avg_session_duration from session where session_start = date('now', 'start of day');"
  )
  const result = query.rows[0]["avg_session_duration"] || "0"

  return <DashboardCard title="Session" subtitle={`${result}s`} />
}
