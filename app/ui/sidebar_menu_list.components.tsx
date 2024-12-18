import Link from "next/link"

export default function SidebarMenu(props: { isExpanded: boolean }) {
  return props.isExpanded ? (
    <div className="p-2">
      <h1 className="text-4xl font-bold mb-8">Analytics</h1>
      <ul className="mt-4 space-y-4">
        <li>
          <Link href="/">Dashboard</Link>
        </li>
      </ul>
    </div>
  ) : (
    // list of icons
    <h1>Test</h1>
  )
}
