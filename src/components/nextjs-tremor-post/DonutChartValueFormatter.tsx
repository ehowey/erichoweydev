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

const valueFormatter = (number: number) => {
  // Use reduce method to calculate total number of classmates
  const totalClassmates = data.reduce(
    (accumulator, currentValue) => accumulator + currentValue.Classmates,
    0,
  )
  // Calculate the percentage and round it to a whole number
  const percentage = Math.round((number / totalClassmates) * 100)
  // Return a string
  return `${percentage}%`
}

export default function DonutChartDemo() {
  return (
    <div className="not-prose my-10">
      <Card>
        <DonutChart
          data={data}
          valueFormatter={valueFormatter}
          index="Weather"
          category="Classmates"
          variant="pie"
        />
      </Card>
    </div>
  )
}
