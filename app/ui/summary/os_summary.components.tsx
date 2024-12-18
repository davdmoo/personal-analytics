import database from "@/app/lib/utils/database"
import SummaryCard from "./summary_card.components"

export default async function OsSummaryCard() {
  const db = database()
  const query = await db.execute(`
    select
      os.name as os_name,
      os.version as os_version,
      v.id as visitor_id,
      count(os.id) as count
    from analytic a
      inner join visitor v on a.visitor_id = v.id
      inner join operating_system os on v.os_id = os.id
    group by os.name, os.version
    order by count desc;
  `)

  return (
    <SummaryCard title="Operating Systems" subtitle="Visitors">
      <ul className="w-full">
        {query.rows.map((row, index) => (
          <li key={index} className="flex flex-row justify-between flex-1">
            <p>{`${row["os_name"] as string} ${
              row["os_version"] as string
            }`}</p>
            <p>{row["count"] as string}</p>
          </li>
        ))}
      </ul>
    </SummaryCard>
  )
}
