import React, { useState, useEffect } from 'react';
import { Container, CircularProgress, Box, Typography, TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { petService } from '../services/api';
import PetGrid from '../components/PetGrid';
import Filter from '../components/Filter';
import Navbar from '../components/Navbar';

const Home = () => {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [category, setCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPets();
  }, [category]);

  useEffect(() => {
    const filtered = pets.filter(pet => 
      pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPets(filtered);
  }, [searchTerm, pets]);

  const fetchPets = async () => {
    setLoading(true);
    try {
      const response = await petService.getAllPets(category);
      setPets(response.data);
      setFilteredPets(response.data);
    } catch (error) {
      console.error('Error fetching pets:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryTitle = () => {
    if (!category) return 'All Pets';
    const mapping = {
      'DOG': 'Dogs',
      'CAT': 'Cats',
      'PARROT': 'Parrots',
      'HAMSTER': 'Hamsters'
    };
    return mapping[category] || category;
  };

  return (
    <Box className="min-h-screen bg-[#FEFCE8]">
      <Navbar />
      <Filter selectedCategory={category} onCategoryChange={setCategory} />
      
      <Container maxWidth="xl" className="max-w-7xl pt-12 pb-32 px-6">
        {/* Gallery Header: Title (Left) and Search Bar (Right) */}
        <Box className="flex justify-between items-center w-full mb-10 gap-4">
          <Box>
            <Typography variant="h3" component="h2" className="font-black text-[#374151] tracking-tighter">
              {getCategoryTitle()}
            </Typography>
            <Box className="w-20 h-1.5 bg-amber-500 rounded-full mt-2" />
          </Box>

          <Box sx={{ width: '450px' }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Search pets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: '#eab676', fontSize: 18 }} className="ml-1" />
                  </InputAdornment>
                ),
                className: "rounded-full px-2",
                sx: { 
                  backgroundColor: '#fdfce8',
                  '& .MuiOutlinedInput-notchedOutline': { 
                    borderColor: '#f5e8c7',
                    borderWidth: '1px' 
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#eab676' },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { 
                    borderColor: '#a06707',
                    borderWidth: '2px' 
                  },
                  '& input': { 
                    color: '#4B5563',
                    fontWeight: 500
                  }
                }
              }}
            />
          </Box>
        </Box>

        {loading ? (
          <Box className="flex justify-center items-center py-24">
            <CircularProgress size={50} thickness={5} className="text-amber-500" />
          </Box>
        ) : (
          <PetGrid pets={filteredPets} />
        )}
      </Container>
    </Box>
  );
};

export default Home;
