import React from 'react';
import { Typography } from '@mui/material';
import PetCard from './PetCard';

const PetGrid = ({ pets }) => {
  if (!pets || pets.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Typography variant="h5" className="text-gray-500 italic">
          No pets found in this category.
        </Typography>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  );
};

export default PetGrid;
