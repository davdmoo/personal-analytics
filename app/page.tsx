export default function Home() {
  return (
    <div className="flex">
      <div className="flex flex-row justify-center px-6 py-6 min-w-full space-x-4">
        <div className="w-72 flex flex-col">
          <div className="bg-black px-4 py-4">
            <h2>Views</h2>
            <p>1</p>
          </div>
        </div>

        <div className="w-72 flex flex-col">
          <div className="bg-black px-4 py-4">
            <h2>Visitors</h2>
            <p>1</p>
          </div>
        </div>

        <div className="w-72 flex flex-col">
          <div className="bg-black px-4 py-4">
            <h2>Visit duration</h2>
            <p>0s</p>
          </div>
        </div>
      </div>
    </div>
  )
}
