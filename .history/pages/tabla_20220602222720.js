
import MainLayout from "../components/mainLayout";
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Mag from "../public/data/magnitud.json";
import Exp from "../public/data/caros.json";
import Mor from "../public/data/victimas.json";



export default function tabla() {

  return (
    <MainLayout pageId="tabla">
            <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={300}
          height={200}
          data={Mag}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>


    </MainLayout>
  );
}
