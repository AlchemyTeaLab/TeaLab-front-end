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
        <label htmlFor='commonName'>Common Name</label>
        <input
          placeholder='Oolong Tea'
          type="text"
          name="commonName"
          value={commonName}
          onChange={(e) => setCommonName(e.target.value)}
          required
        />
        <label htmlFor='scientificName'>Scientific Name</label>
        <input
          placeholder='Camellia sinensis'
          type="text"
          name="scientificName"
          value={scientificName}
          onChange={(e) => setScientificName(e.target.value)}
          required
        />
        <label htmlFor='healthBenefits'>Health Benefits</label>
        <input
          placeholder='Reduce stress and anxiety'
          type="text"
          name="healthBenefits"
          value={healthBenefits}
          onChange={(e) => setHealthBenefits(e.target.value)}
          required
        />
        <label htmlFor='description'>Description</label>
        <input
          placeholder='Rich in amino acid...'
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label htmlFor='image'>Image</label>
        <input
          type="file"
          except="image/ *"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button>Submit</button>
      </form>
    </>
  );
}
