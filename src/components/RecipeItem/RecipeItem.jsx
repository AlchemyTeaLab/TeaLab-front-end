import { useState } from 'react';

export default function RecipeItem({ recipe }) {
  const [isEditing, setIsEditing] = useState(false);

  let content;
  if (!isEditing) {
    content = <></>;
  } else {
    content = <></>;
  }
  return content;
}
