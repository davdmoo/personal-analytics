export default function SidebarMenu(props: { isExpanded: boolean }) {
  return props.isExpanded ? (
    <>
      <h1 className="text-xl font-bold">Sidebar</h1>
      <ul className="mt-4 space-y-4">
        <li>Dashboard</li>
        <li>API Keys</li>
        <li>Visitors</li>
        <li>Sessions</li>
      </ul>
    </>
  ) : (
    // list of icons
    <h1>Test</h1>
  )
}
