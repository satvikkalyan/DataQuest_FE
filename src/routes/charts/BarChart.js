import React from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

function BarChartComponent({data,x_axis,y_axis}) {
    return (
        <BarChart width={1400} height={400} data={data}>
          <XAxis dataKey={x_axis}   />
          <YAxis />
          <Bar dataKey={y_axis} fill="#0F6392" />
        </BarChart>
      );
}

export default BarChartComponent;
