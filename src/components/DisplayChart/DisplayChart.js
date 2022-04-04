
import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter
} from "recharts";

const data =  [
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 24541,
        "bonus": 385674,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 42453,
        "bonus": 253355,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 72623,
        "bonus": 395454,
        "revenue": 127010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 52459,
        "bonus": 38459,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 204551,
        "bonus": 385457,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 67043,
        "bonus": 37544,
        "revenue": 61000
    }
];



export default function DisplayChart() {
  return (
    <ComposedChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="bonus" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="sell" stroke="#ff7300" />
      <Scatter dataKey="revenue" fill="red" />
    </ComposedChart>
  );
}
