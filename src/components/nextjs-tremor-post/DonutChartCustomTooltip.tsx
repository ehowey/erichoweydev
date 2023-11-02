import { DonutChart, Card } from '@tremor/react'

const sun = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  )
}

const data = [
  {
    Weather: 'Sunny',
    Classmates: 10,
    icon: sun,
  },
  {
    Weather: 'Snowy',
    Classmates: 5,
    icon: sun,
  },
  {
    Weather: 'Cloudy',
    Classmates: 4,
    icon: sun,
  },
  {
    Weather: 'Rainy',
    Classmates: 2,
    icon: sun,
  },
  {
    Weather: 'Foggy',
    Classmates: 1,
    icon: sun,
  },
]

// const valueFormatter = (number: number) => {
//   // Use reduce method to calculate total number of classmates
//   const totalClassmates = data.reduce(
//     (accumulator, currentValue) => accumulator + currentValue.Classmates,
//     0,
//   )
//   // Calculate the percentage and round it to a whole number
//   const percentage = Math.round((number / totalClassmates) * 100)
//   // Return a string
//   return `${percentage}%`
// }

const customTooltip = ({ payload, active, label }) => {
  if (!active || !payload) return null
  return (
    <div className="rounded-tremor-default text-tremor-default bg-tremor-background shadow-tremor-dropdown border-tremor-border dark:bg-dark-tremor-background dark:shadow-dark-tremor-dropdown dark:border-dark-tremor-border border">
      <div className="border-tremor-border dark:border-dark-tremor-border border-b px-4 py-2">
        <p className="text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis font-medium">
          {label}
        </p>
      </div>
      <div className="space-y-1 px-4 py-2">
        {payload.map((category, idx) => (
          <div
            className="flex items-center justify-between space-x-8"
            key={idx}
          >
            <div className="flex items-center space-x-2">
              <span
                className={`rounded-tremor-full border-tremor-background shadow-tremor-card dark:border-dark-tremor-background dark:shadow-dark-tremor-card h-3 w-3 shrink-0 border-2 bg-${category.color}-500`}
              ></span>
              <p className="text-tremor-content dark:text-dark-tremor-content whitespace-nowrap text-right">
                {category.dataKey}
              </p>
            </div>
            <p className="text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis whitespace-nowrap text-right font-medium tabular-nums">
              {category.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function DonutChartDemo() {
  return (
    <div className="not-prose my-10">
      <Card>
        <DonutChart
          data={data}
          index="Weather"
          category="Classmates"
          variant="pie"
          customTooltip={customTooltip}
        />
      </Card>
    </div>
  )
}
