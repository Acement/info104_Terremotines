/* Codigo de la pagina que contiene las tablas comparativas */
import MainLayout from "../components/mainLayout";
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Exp from "../public/data/dataCaro.json";
import Mor from "../public/data/dataVic.json";

/* Función que crea la tabla con sus caracteristicas */
export default function tabla1() {

  return (
    <MainLayout pageId="tabla1">
            <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={300}
          height={200}
          data={Mor}
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
          <Line type="monotone" dataKey="Magnitud" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Victimas" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={300}
          height={200}
          data={Exp}
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
          <Line type="monotone" dataKey="Magnitud" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Costo(En Billones)" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>


    </MainLayout>
  );
}
