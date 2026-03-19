import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Sector,
} from "recharts";

import "./AdminStats.css";

function AdminStats() {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const credentials = localStorage.getItem("auth");

    const fetchEvents = () => {
    fetch("https://lahlelo-events-backend.onrender.com/bookings/stats/event-types", {
      headers: {
        Authorization: `Basic ${credentials}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
    };

    fetchEvents();
    const interval = setInterval(fetchEvents, 1000);

    return () => clearInterval(interval);
  },[]);

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#F44336", "#fff", "#fa018e", "#8600fb21"];

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const renderActiveShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
      props;

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 10} // expands on hover
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        height: 400,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Bookings by <span>Event Type</span></h2>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={90}
            onMouseEnter={onPieEnter}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AdminStats;
