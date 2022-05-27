import React, { useState } from 'react';

export default function Admin() {
  const [type, setType] = useState('');
  const [commonName, setCommonName] = useState('');
  const [scientificName, setScientificName] = useState('');
  const [healthBenefits, setHealthBenefits] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  return (
    <>
      <form>
        <select
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="base">Base</option>
          <option value="flavor">Flavor</option>
          <option value="boost">Boost</option>
        </select>
        <input
          type="text"
          name="commonName"
          value={commonName}
          onChange={(e) => setCommonName(e.target.value)}
          required
        />
        <input
          type="text"
          name="scientificName"
          value={scientificName}
          onChange={(e) => setScientificName(e.target.value)}
          required
        />
        <input
          type="text"
          name="healthBenefits"
          value={healthBenefits}
          onChange={(e) => setHealthBenefits(e.target.value)}
          required
        />
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  );
}
