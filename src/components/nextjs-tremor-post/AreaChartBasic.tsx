import { AreaChart, Card } from '@tremor/react'

//rain is mm, snow is cm
const data = [
  {
    month: 'January',
    rain: 0.2,
    snow: 3.7,
  },
  {
    month: 'February',
    rain: 0,
    snow: 32.5,
  },
  {
    month: 'March',
    rain: 0,
    snow: 11,
  },
  {
    month: 'April',
    rain: 0,
    snow: 43,
  },
  {
    month: 'May',
    rain: 11.3,
    snow: 1,
  },
  {
    month: 'June',
    rain: 137.9,
    snow: 0,
  },
  {
    month: 'July',
    rain: 64.1,
    snow: 0,
  },
  {
    month: 'August',
    rain: 30.1,
    snow: 0,
  },
  {
    month: 'September',
    rain: 10.8,
    snow: 0,
  },
  {
    month: 'October',
    rain: 5.6,
    snow: 24.2,
  },
  {
    month: 'November',
    rain: 0,
    snow: 29.4,
  },
  {
    month: 'December',
    rain: 0.3,
    snow: 26.1,
  },
]

const defaultTooltip = ({ payload, active, label }) => {
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

export default function LineChartDemo() {
  return (
    <div className="my-10">
      <Card>
        <AreaChart
          data={data}
          index="month"
          categories={['rain', 'snow']}
          // customTooltip={defaultTooltip}
        />
      </Card>
    </div>
  )
}
