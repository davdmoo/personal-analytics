import database from "@/app/lib/utils/database"
import SummaryCard from "./summary_card.components"

export default async function BrowserSummaryCard() {
  const db = database()
  const query = await db.execute(`
    select
      b.name as browser_name,
      v.id as visitor_id,
      count(b.id) as count
    from analytic a
      inner join visitor v on a.visitor_id = v.id
      inner join browser b on v.browser_id = b.id
    group by b.name
    order by count desc;
  `)

  return (
    <SummaryCard title="Browsers" subtitle="Visitors">
      <ul className="w-full">
        {query.rows.map((row, index) => (
          <li key={index} className="flex flex-row justify-between flex-1">
            <p>{row["browser_name"] as string}</p>
            <p>{row["count"] as string}</p>
          </li>
        ))}
      </ul>
    </SummaryCard>
  )
}
