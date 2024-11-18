'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ data }) => {
  const formattedDataPrice = data.map(item => ({
    date: item.date,  
    price: item.prix, 
  }));

 
  const formattedDataAge = data.map(item => ({
    date: item.date, 
    age: item.age,    
  }));

  return (
    <div className='graphique'>
      <div className='graphique-prix'>
        <h3>Graphique des prix</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={formattedDataPrice}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} name="Prix" />
          </LineChart>
        </ResponsiveContainer>
      </div>

     <div className='graphique-age'>
      <h3>Graphique des âges</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={formattedDataAge}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="age" stroke="#82ca9d" activeDot={{ r: 8 }} name="Âge" />
          </LineChart>
        </ResponsiveContainer>
     </div>
    </div>
  );
};

export default Chart;
