import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Full Stack",
    value: 50,
    icon: "💻",
  },
  {
    name: "Data Engineering",
    value: 30,
    icon: "⚙️",
  },
  {
    name: "Data Analytics",
    value: 20,
    icon: "📊",
  },
];

const COLORS = [
  "#1E3A5F", // Navy Blue
  "#2A9D8F", // Teal
  "#9B8ACB", // Lavender Purple
];

const AnimatedPieChart = () => {
  return (
    <div className="w-full max-w-[500px] h-[350px] mx-auto">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="35%"
            outerRadius="55%"
            dataKey="value"
            nameKey="name"
            startAngle={90}
            endAngle={-270}
            animationBegin={0}
            animationDuration={1500}
            animationEasing="ease-out"
            label={({ name, value, icon }) =>
              `${icon} ${name}`
            }
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip formatter={(value) => `${value}%`} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnimatedPieChart;