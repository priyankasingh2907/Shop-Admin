import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";
import Title from "./Title";
export default function Revenue() {
  const data = [
    {
      data: 2000,
    },

    {
      data: 3000,
    },
    {
      data: 7500,
    },
    {
      data: 2457,
    },
    {
      data: 3456,
    },
    {
      data: 1234,
    },
    {
      data: 7890,
    },
    {
      data: 3469,
    },
    {
      data: 2468,
    },
    {
      data: 2000,
    },
    {
      data: 3000,
    },
    {
      data: 7000,
    },
    {
      data: 6000,
    },
  ];
  return (
    <div className="revenue">
      <Title title="$8,876" subTitle="Revenue this week" />
      <div className="graph">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} width={500} height={400}>
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="30%" stopColor="#F94144" stopOpacity={0.4} />
                <stop offset="85%" stopColor="#241f12" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <Tooltip cursor={false} />
            <Area
              type="monotone"
              dataKey="data"
              stroke="#F94144"
              fill="url(#color)"
            />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
