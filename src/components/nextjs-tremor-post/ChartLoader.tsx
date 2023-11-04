export default function ChartLoader() {
  return (
    <div
      role="status"
      className="animate-pulse rounded border border-gray-200 p-4"
    >
      <div className="grid h-80 place-items-center">
        <span className="text-2xl font-semibold">Loading...</span>
      </div>
    </div>
  )
}
