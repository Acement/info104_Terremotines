
import MainLayout from "../components/mainLayout";
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Mag from "../public/data/magnitud.json";
import Exp from "../public/data/caros.json";
import Mor from "../public/data/victimas.json";

const data = [
  {
    name: 'Terremoto de Shaanxi(China)',
    victimas: 830000,
    magnitud: 8.0,
  },
  {
    name: 'Terremoto de Tangshan(China)',
    victimas: 655000,
    magnitud: 7.6,
  },
  {
    name: 'Terremoto de Haiyuan(China)',
    victimas: 273407,
    magnitud: 8.2,
  },
  {
    name: 'Terremoto de Antioch(Siria)',
    victimas: 250000,
    magnitud: 7.0,
  },
  {
    name: 'Terremoto de Ganja(Azerbaiyan)',
    victimas: 300000,
    magnitud: 7.7,
  },
  {
    name: 'Terremoto Oceano Indico',
    victimas: 227898,
    magnitud: 9.1,
  },
  {
    name: 'Terremoto de Aleppo(Siria)',
    victimas: 230000,
    magnitud: 7.1,
  },
  {
    name: 'Terremoto de Haiti',
    victimas: 208000,
    magnitud: 7.0,
  },
  {
    name: 'Terremoto de Hongdong(China)',
    victimas: 200000,
    magnitud: 8.0,
  },  
  {
    name: 'Terremoto de Damghan(Iran)',
    victimas: 200000,
    magnitud: 7.9,
  },
];

export default function tabla() {

  return (
    <MainLayout pageId="tabla">
            <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={300}
          height={200}
          data={data}
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
          <Line type="monotone" dataKey="magnitud" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="victimas" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>


    </MainLayout>
  );
}
