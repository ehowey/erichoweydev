import { DonutChart, Card } from '@tremor/react'
import { type TooltipProps } from 'recharts'
import type {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent'
import { CloudIcon, FogIcon, RainIcon, SnowIcon, SunIcon } from './logos'

const data = [
  {
    Weather: 'Sunny',
    Classmates: 10,
    icon: SunIcon,
  },
  {
    Weather: 'Snowy',
    Classmates: 5,
    icon: SnowIcon,
  },
  {
    Weather: 'Cloudy',
    Classmates: 4,
    icon: CloudIcon,
  },
  {
    Weather: 'Rainy',
    Classmates: 2,
    icon: RainIcon,
  },
  {
    Weather: 'Foggy',
    Classmates: 1,
    icon: FogIcon,
  },
]

const customTooltip = ({
  payload,
  active,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (!active || !payload) return null
  const Icon = payload[0].payload.icon
  const totalClassmates = data.reduce(
    (accumulator, currentValue) => accumulator + currentValue.Classmates,
    0,
  )
  return (
    <div className="rounded-tremor-default text-tremor-default bg-tremor-background shadow-tremor-dropdown border-tremor-border dark:bg-dark-tremor-background dark:shadow-dark-tremor-dropdown dark:border-dark-tremor-border border">
      <div className="border-tremor-border dark:border-dark-tremor-border inline-flex items-center border-b px-4 py-2">
        <Icon className="mr-2 h-5 w-5" />
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
              {category.value} / {totalClassmates}
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
