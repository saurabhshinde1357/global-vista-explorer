
import { Card } from './ui/card';
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from './ui/chart';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer, 
  Legend,
  LineChart,
  Line,
  Tooltip
} from 'recharts';

interface DataChartProps {
  type: 'military' | 'economic';
}

const DataChart = ({ type }: DataChartProps) => {
  // Military expenditure data
  const militaryData = [
    { name: 'USA', value: 877, fill: '#0EA5E9' },
    { name: 'China', value: 292, fill: '#F97316' },
    { name: 'India', value: 83, fill: '#10B981' },
    { name: 'UK', value: 68, fill: '#6366F1' },
    { name: 'Russia', value: 66, fill: '#F43F5E' },
    { name: 'Germany', value: 56, fill: '#8B5CF6' },
  ];

  // Economic data
  const economicData = [
    {
      year: '2020',
      USA: 20.9,
      China: 14.7,
      EU: 15.2,
      India: 2.7,
      Japan: 5.0,
    },
    {
      year: '2021',
      USA: 22.3,
      China: 16.5,
      EU: 16.1,
      India: 3.1,
      Japan: 4.9,
    },
    {
      year: '2022',
      USA: 23.0,
      China: 17.7,
      EU: 16.6,
      India: 3.4,
      Japan: 4.7,
    },
    {
      year: '2023',
      USA: 25.5,
      China: 18.9,
      EU: 17.1,
      India: 3.8,
      Japan: 4.4,
    },
    {
      year: '2024',
      USA: 27.2,
      China: 20.4,
      EU: 17.3,
      India: 4.2,
      Japan: 4.3,
    },
  ];

  const config = {
    USA: {
      label: "United States",
      color: "#0EA5E9",
    },
    China: {
      label: "China",
      color: "#F97316",
    },
    EU: {
      label: "European Union",
      color: "#10B981",
    },
    India: {
      label: "India",
      color: "#8B5CF6",
    },
    Japan: {
      label: "Japan",
      color: "#F43F5E",
    },
    value: {
      label: "Billion USD",
    },
  };

  if (type === 'military') {
    return (
      <div className="h-72">
        <ChartContainer config={config}>
          <BarChart data={militaryData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Billion USD', angle: -90, position: 'insideLeft' }} />
            <Tooltip content={<ChartTooltipContent />} />
            <Legend formatter={(value) => `${value}`} />
            <Bar dataKey="value" name="Military Expenditure (2024)" />
          </BarChart>
        </ChartContainer>
      </div>
    );
  }

  return (
    <div className="h-72">
      <ChartContainer config={config}>
        <LineChart data={economicData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis label={{ value: 'Trillion USD', angle: -90, position: 'insideLeft' }} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Line type="monotone" dataKey="USA" stroke="#0EA5E9" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="China" stroke="#F97316" />
          <Line type="monotone" dataKey="EU" stroke="#10B981" />
          <Line type="monotone" dataKey="India" stroke="#8B5CF6" />
          <Line type="monotone" dataKey="Japan" stroke="#F43F5E" />
        </LineChart>
      </ChartContainer>
    </div>
  );
};

export default DataChart;
