import React from 'react';
import { Grid } from '@mui/material';
import PetCard from './PetCard';

const PetGrid = ({ pets, addToCart, cart }) => {
  return (
    <Grid container spacing={4} className="items-stretch justify-center">
      {pets.map((pet) => (
        <Grid item key={pet.id} xs={12} sm={6} md={4} lg={3} className="flex justify-center">
          <PetCard pet={pet} addToCart={addToCart} cart={cart} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PetGrid;
