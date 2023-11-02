import { BarChart, Card } from '@tremor/react'

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

export default function BarChartDemo() {
  return (
    <div className="not-prose my-10">
      <Card>
        <BarChart data={data} index="Weather" categories={['Classmates']} />
      </Card>
    </div>
  )
}
