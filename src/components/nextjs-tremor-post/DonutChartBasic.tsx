import { DonutChart, Card } from '@tremor/react'

const data = [
  {
    Weather: 'Sunny',
    Classmates: 10,
  },
  {
    Weather: 'Snowy',
    Classmates: 5,
  },
  {
    Weather: 'Cloudy',
    Classmates: 4,
  },
  {
    Weather: 'Rainy',
    Classmates: 2,
  },
  {
    Weather: 'Foggy',
    Classmates: 1,
  },
]

export default function DonutChartDemo() {
  return (
    <div className="not-prose my-10">
      <Card>
        <DonutChart
          data={data}
          index="Weather"
          category="Classmates"
          variant="pie"
        />
      </Card>
    </div>
  )
}
