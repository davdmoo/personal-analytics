import SidebarMenu from "./sidebar_menu_list.components"

// TODO: state management for expanded
export default function Sidebar({ isExpanded }: { isExpanded: boolean }) {
  return (
    <div
      className={`bg-gray-800 text-white min-h-screen transition-all duration-300 ease-in-out ${
        isExpanded ? "w-64" : "w-0"
      } overflow-hidden`}
    >
      <div
        className={`p-4 ${
          isExpanded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      >
        <SidebarMenu isExpanded={isExpanded} />
      </div>
    </div>
  )
}
