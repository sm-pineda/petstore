import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box, Container, Divider } from '@mui/material';
import { Pets as PetsIcon, ShoppingCart as ShoppingCartIcon, AccountCircle as AccountCircleIcon } from '@mui/icons-material';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" elevation={0} className="bg-white border-b border-gray-100 shadow-sm">
      <Container maxWidth="xl">
        <Toolbar className="justify-between px-0">
          {/* Left: Logo */}
          <Box className="flex items-center min-w-fit">
            <PetsIcon sx={{ color: '#a06707', fontSize: 28, marginRight: '8px' }} />
            <Typography variant="h5" className="font-black text-gray-800 tracking-tighter">
              PetStore
            </Typography>
          </Box>

          {/* Right: Icons */}
          <Box className="flex items-center gap-4 min-w-fit">
            <IconButton className="text-gray-600 hover:text-amber-500 transition-colors p-1">
              <ShoppingCartIcon />
            </IconButton>

            <IconButton 
              onClick={handleMenuOpen} 
              className="text-gray-700 hover:text-amber-500 transition-colors p-1"
              disableRipple
            >
              <AccountCircleIcon sx={{ fontSize: 32 }} />
            </IconButton>
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            PaperProps={{
              elevation: 4,
              className: "mt-2 rounded-2xl border border-amber-50 min-w-[180px] p-1"
            }}
          >
            <MenuItem onClick={handleMenuClose} className="rounded-xl px-4 py-2.5 text-sm font-bold text-gray-700 hover:bg-amber-50">My Profile</MenuItem>
            <MenuItem onClick={handleMenuClose} className="rounded-xl px-4 py-2.5 text-sm font-bold text-gray-700 hover:bg-amber-50">My Orders</MenuItem>
            <Divider className="my-1 border-amber-50" />
            <MenuItem onClick={handleMenuClose} className="rounded-xl px-4 py-2.5 text-sm font-bold text-red-500 hover:bg-red-50">Logout</MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
