import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
const ServicesAndExperience = () => {
  const colors = ["red", "#00C49F", "#FFBB28", "#FF8042","#0088FE", "pink"];
  const data = [
    {
      name: "1-2 Years",
      uv: 1890,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "2-4 Years",
      uv: 2000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "4-6 Years",
      uv: 2390,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "6-8 Years",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "8-10 Years",
      uv: 3000,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "10-12 Years",
      uv: 3490,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "12-18 Years",
      uv: 4000,
      pv: 4300,
      amt: 2100,
    },
  ];
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
        Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  return (
    <div style={{ width: "100%", height: 500}}>
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="uv"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ServicesAndExperience;
