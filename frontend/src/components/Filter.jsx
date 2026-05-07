import React from 'react';
import { Button, Box } from '@mui/material';

const Filter = ({ selectedCategory, onCategoryChange }) => {
  const categories = ['All', 'Dogs', 'Cats', 'Parrots', 'Hamsters'];

  const handleChange = (newCategory) => {
    if (newCategory === 'All') {
      onCategoryChange('');
    } else {
      const mapping = {
        'Dogs': 'DOG',
        'Cats': 'CAT',
        'Parrots': 'PARROT',
        'Hamsters': 'HAMSTER'
      };
      onCategoryChange(mapping[newCategory] || newCategory.toUpperCase());
    }
  };

  const reverseMapping = {
    '': 'All',
    'DOG': 'Dogs',
    'CAT': 'Cats',
    'PARROT': 'Parrots',
    'HAMSTER': 'Hamsters'
  };

  const currentSelection = reverseMapping[selectedCategory] || 'All';

  return (
    <Box className="bg-white border-b border-gray-100 py-1 sticky top-[64px] z-40 overflow-x-auto">
      <Box className="max-w-fit mx-auto flex gap-6 px-4">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => handleChange(category)}
            className={`px-2 py-3 normal-case font-bold text-sm min-w-fit rounded-none transition-all duration-300 ${
              currentSelection === category
                ? 'text-amber-500 border-b-2 border-amber-500'
                : 'text-gray-400 hover:text-gray-600'
            }`}
            disableRipple
          >
            {category}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Filter;
