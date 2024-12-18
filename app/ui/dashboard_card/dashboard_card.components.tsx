export default function DashboardCard({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  return (
    <div className="w-full md:w-60 lg:w-72 mb-4 flex flex-col">
      <div className="bg-lighter-background p-4 text-center rounded">
        <h2 className="mb-1 font-bold">{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}
