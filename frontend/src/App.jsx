import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Home from './pages/Home';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F59E0B', // Amber
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FBBF24', // Muted Yellow
    },
    background: {
      default: '#FEFCE8', // Pale Cream
      paper: '#FFFFFF',
    },
    text: {
      primary: '#374151', // Dark Grey
      secondary: '#6B7280',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 900 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 900 },
    h5: { fontWeight: 700 },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
          borderRadius: 12,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          border: '1px solid #FBBF2420',
        },
      },
    },
  },
});

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (pet) => {
    setCart((prev) => {
      if (prev.some((item) => item.id === pet.id)) return prev;
      return [...prev, pet];
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home cart={cart} addToCart={addToCart} clearCart={clearCart} />
    </ThemeProvider>
  );
}

export default App;
