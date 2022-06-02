import React, { useState } from 'react';
import { Image } from 'cloudinary-react';
import { useIngredients } from '../../hooks/useIngredients';

export default function Admin() {
  const [type, setType] = useState('Base');
  const [commonName, setCommonName] = useState('');
  const [scientificName, setScientificName] = useState('');
  const [healthBenefits, setHealthBenefits] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [publicId, setPublicId] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const { addIngredient } = useIngredients();

  const url = 'https://api.cloudinary.com/v1_1/tealab/image/upload';

  const uploadImg = () => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'jjlasdjj');

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .then((finalResponse) => {
        setPublicId(finalResponse.public_id);
        setImageUrl(finalResponse.secure_url);
      });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await addIngredient({
      type,
      commonName,
      scientificName,
      healthBenefits: healthBenefits.split(', '),
      description,
      image: imageUrl,
    });
    setType('');
    setCommonName('');
    setScientificName('');
    setHealthBenefits('');
    setDescription('');
    setImage('');
    setImageUrl('');
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <select
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="base">Base</option>
          <option value="flavor">Flavor</option>
          <option value="boost">Boost</option>
        </select>
        <label htmlFor="commonName">Common Name</label>
        <input
          placeholder="Oolong Tea"
          type="text"
          name="commonName"
          value={commonName}
          onChange={(e) => setCommonName(e.target.value)}
          required
        />
        <label htmlFor="scientificName">Scientific Name</label>
        <input
          placeholder="Camellia sinensis"
          type="text"
          name="scientificName"
          value={scientificName}
          onChange={(e) => setScientificName(e.target.value)}
          required
        />
        <label htmlFor="healthBenefits">Health Benefits</label>
        <input
          placeholder="Reduce stress and anxiety"
          type="text"
          name="healthBenefits"
          value={healthBenefits}
          onChange={(e) => setHealthBenefits(e.target.value)}
          required
        />
        <label htmlFor="description">Description</label>
        <input
          placeholder="Rich in amino acid..."
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label htmlFor="image">Image</label>
        <input
          type="file"
          name="image"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <button type="button" onClick={uploadImg}>
          Add an image
        </button>
        <button type="submit">Submit</button>
        <Image style={{ width: 220 }} cloudName="teaLab" publicId={publicId} />
      </form>
    </>
  );
}
