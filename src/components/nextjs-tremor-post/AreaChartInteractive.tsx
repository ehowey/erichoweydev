import { AreaChart, Card, type EventProps } from '@tremor/react'
import { useState } from 'react'

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

export default function AreaChartDemo() {
  const [value, setValue] = useState<null | EventProps>(null)
  return (
    <div className="not-prose my-10">
      <Card>
        <AreaChart
          data={data}
          index="month"
          categories={['rain', 'snow']}
          onValueChange={(v: EventProps) => setValue(v)}
        />
      </Card>
    </div>
  )
}
