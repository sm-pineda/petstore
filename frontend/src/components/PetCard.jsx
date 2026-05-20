import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton, Chip, Snackbar, Alert, Skeleton, Box, Button } from '@mui/material';
import { AddShoppingCart as CartIcon, InfoOutlined as InfoIcon, Check as CheckIcon } from '@mui/icons-material';

const PetCard = ({ pet, addToCart, cart }) => {
  const [open, setOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const isInCart = cart?.some(item => item.id === pet.id);

  const handleAddToCart = () => {
    if (isInCart) return;
    addToCart(pet);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  return (
    <Card elevation={1} className="flex flex-col h-full rounded-3xl overflow-hidden border border-amber-50 bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-amber-100 hover:-translate-y-2">
      <Box className="relative h-64 overflow-hidden">
        {!imageLoaded && (
          <Skeleton variant="rectangular" width="100%" height="100%" animation="wave" className="bg-amber-50" />
        )}
        <CardMedia
          component="img"
          image={pet.imageUrl || 'https://via.placeholder.com/400x300?text=Pet+Photo'}
          alt={pet.name}
          onLoad={() => setImageLoaded(true)}
          className={`h-full w-full object-cover transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        <Box className="absolute top-4 right-4">
          <Chip 
            label={pet.category} 
            size="small" 
            sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.95)', 
              color: '#374151', 
              fontWeight: 900, 
              fontSize: '10px',
              textTransform: 'uppercase',
              borderRadius: '9999px',
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(0,0,0,0.05)'
            }}
          />
        </Box>
      </Box>

      <CardContent className="p-6 flex-grow">
        <div className="flex justify-between items-center mb-2">
          <Typography variant="h5" className="font-black text-gray-800 tracking-tight">
            {pet.name}
          </Typography>
          <Typography variant="h6" className="text-amber-500 font-black">
            ${pet.price}
          </Typography>
        </div>
        <Typography variant="body2" className="text-gray-400 mb-6 h-10 overflow-hidden leading-relaxed font-medium">
          {pet.description || 'No description available for this lovely pet.'}
        </Typography>
        
        <Box className="flex gap-2 mt-auto">
          <Button 
            fullWidth 
            variant="contained" 
            disableElevation
            onClick={handleAddToCart}
            disabled={isInCart}
            startIcon={isInCart ? <CheckIcon /> : <CartIcon />}
            className={`${
              isInCart 
                ? 'bg-gray-100 text-gray-400' 
                : 'bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-100 active:scale-95'
            } font-bold py-3 rounded-2xl transition-all duration-300`}
          >
            {isInCart ? 'In Cart' : 'Adopt Me'}
          </Button>
          <IconButton className="bg-amber-50 text-amber-600 hover:bg-amber-100 rounded-2xl p-3">
            <InfoIcon />
          </IconButton>
        </Box>
      </CardContent>

      <Snackbar 
        open={open} 
        autoHideDuration={3000} 
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="success" variant="filled" className="rounded-2xl shadow-xl bg-amber-500 font-bold">
          Yay! {pet.name} is in your cart!
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default PetCard;
