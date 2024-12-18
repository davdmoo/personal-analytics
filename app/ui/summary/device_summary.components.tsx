import database from "@/app/lib/utils/database"
import SummaryCard from "./summary_card.components"

export default async function DeviceSummaryCard() {
  const db = database()
  const query = await db.execute(`
    select
      d.type,
      v.id as visitor_id,
      count(d.id) as count
    from analytic a
      inner join visitor v on a.visitor_id = v.id
      inner join device d on v.device_id = d.id
    group by d.type
    order by count desc;
  `)

  return (
    <SummaryCard title="Devices" subtitle="Visitors">
      <ul className="w-full">
        {query.rows.map((row, index) => {
          const deviceType = row["type"] as string

          return (
            <li key={index} className="flex flex-row justify-between flex-1">
              <p>{deviceType.length === 0 ? "Unrecognized" : deviceType}</p>
              <p>{row["count"] as string}</p>
            </li>
          )
        })}
      </ul>
    </SummaryCard>
  )
}
