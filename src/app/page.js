'use client';
import React, { useState, useEffect } from 'react';
import Filtre from '../app/components/filtre';
import Prix from '../app/components/prix';
import Chart from '../app/components/chart';
import dataJson from '/public/data.json'

const Dashboard = () => {
  const [filters, setFilters] = useState({
    saison: '',
    niveau: '',
    compte: '',
    passe: '',
  });

  const [filteredData, setFilteredData] = useState(dataJson);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleFilterChange = (name, value) => {
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);


    const filtered = dataJson.filter(item => {
      return (
        (!newFilters.saison || item.saison === newFilters.saison) &&
        (!newFilters.niveau || item.niveau === newFilters.niveau) &&
        (newFilters.compte === '' || item.compte.toString() === newFilters.compte) &&
        (!newFilters.passe || item.passe === newFilters.passe)
      );
    });

    setFilteredData(filtered);

    
    const total = filtered.reduce((acc, item) => acc + item.prix, 0);
    setTotalPrice(total);
  };

  return (
    <div>
      <h1>Tableau de bord</h1>
      <Filtre onFilterChange={handleFilterChange} />
      <Prix prix={totalPrice} />
      
      <div className="charts">
        <Chart data={filteredData} chartType="age" />
      </div>
    </div>
  );
};

export default Dashboard;
