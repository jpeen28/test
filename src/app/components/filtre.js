import React from 'react';

const Filtre = ({ onFilterChange }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <div className="filter-bar">
      <select name="saison" onChange={handleFilterChange}>
        <option value disabled selected>Selectionnez la saison</option>
        <option value="été">Été</option>
        <option value="hiver">Hiver</option>
      </select>

      <select name="niveau" onChange={handleFilterChange}>
        <option value disabled selected>Selectionnez le Niveau</option>
        <option value="pro">Pro</option>
        <option value="amateur">Amateur</option>
      </select>

      <select name="compte" onChange={handleFilterChange}>
        <option value disabled selected>Compte Existant ?</option>
        <option value="true">Oui</option>
        <option value="false">Non</option>
      </select>

      <select name="passe" onChange={handleFilterChange}>
        <option value disabled selected>Nature du Passe</option>
        <option value="simple">Simple</option>
        <option value="double">Double</option>
      </select>
    </div>
  );
};

export default Filtre;
