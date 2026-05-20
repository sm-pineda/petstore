import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box, Container, Divider, Dialog, DialogTitle, DialogContent, DialogActions, Button, List, ListItem, ListItemText, ListItemAvatar, Avatar, Badge, Snackbar, Alert } from '@mui/material';
import { Pets as PetsIcon, ShoppingCart as ShoppingCartIcon, AccountCircle as AccountCircleIcon, Close as CloseIcon, Celebration as CelebrationIcon } from '@mui/icons-material';

const Navbar = ({ cart, clearCart }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCartOpen = () => {
    setCartOpen(true);
  };

  const handleCartClose = () => {
    setCartOpen(false);
  };

  const handlePurchase = () => {
    setCartOpen(false);
    setPurchaseSuccess(true);
    clearCart();
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

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
            <IconButton 
              className="text-gray-600 hover:text-amber-500 transition-colors p-1"
              onClick={handleCartOpen}
            >
              <Badge badgeContent={cart.length} color="primary" sx={{ '& .MuiBadge-badge': { fontWeight: 900 } }}>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            <IconButton 
              onClick={handleMenuOpen} 
              className="text-gray-700 hover:text-amber-500 transition-colors p-1"
              disableRipple
            >
              <AccountCircleIcon sx={{ fontSize: 32 }} />
            </IconButton>
          </Box>

          {/* Profile Menu */}
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

          {/* Cart Dialog */}
          <Dialog 
            open={cartOpen} 
            onClose={handleCartClose}
            fullWidth
            maxWidth="xs"
            PaperProps={{
              className: "rounded-3xl p-2"
            }}
          >
            <DialogTitle className="flex justify-between items-center border-b border-gray-100 pb-4">
              <Typography variant="h6" className="font-black text-gray-800">Your Cart</Typography>
              <IconButton onClick={handleCartClose} size="small" className="bg-gray-50">
                <CloseIcon fontSize="small" />
              </IconButton>
            </DialogTitle>
            
            <DialogContent className="py-6">
              {cart.length === 0 ? (
                <Box className="flex flex-col items-center py-10 text-center">
                  <PetsIcon sx={{ fontSize: 60, color: '#FDE68A', mb: 2 }} />
                  <Typography className="text-gray-400 font-bold">
                    Your cart is lonely. Add a friend!
                  </Typography>
                </Box>
              ) : (
                <List disablePadding>
                  {cart.map((item, index) => (
                    <ListItem key={index} className="px-0 py-3 border-b border-gray-50 last:border-0">
                      <ListItemAvatar>
                        <Avatar src={item.imageUrl} variant="rounded" className="rounded-xl" />
                      </ListItemAvatar>
                      <ListItemText 
                        primary={<Typography className="font-bold text-gray-800">{item.name}</Typography>}
                        secondary={<Typography className="text-amber-600 font-bold">${item.price}</Typography>}
                      />
                    </ListItem>
                  ))}
                  <Box className="mt-6 p-4 bg-amber-50 rounded-2xl flex justify-between items-center">
                    <Typography className="font-black text-gray-800">Total</Typography>
                    <Typography className="font-black text-amber-600 text-xl">${totalPrice}</Typography>
                  </Box>
                </List>
              )}
            </DialogContent>

            <DialogActions className="p-4 pt-0">
              <Button 
                fullWidth 
                variant="contained" 
                disableElevation
                disabled={cart.length === 0}
                onClick={handlePurchase}
                className="bg-amber-500 hover:bg-amber-600 py-3 rounded-2xl text-white font-black"
              >
                Purchase Friends
              </Button>
            </DialogActions>
          </Dialog>

          {/* Purchase Success Snackbar */}
          <Snackbar 
            open={purchaseSuccess} 
            autoHideDuration={5000} 
            onClose={() => setPurchaseSuccess(false)}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <Alert 
              icon={<CelebrationIcon className="text-white" />}
              severity="success" 
              variant="filled" 
              className="rounded-2xl shadow-2xl bg-amber-500 px-6 py-3 font-bold"
            >
              Successfully Purchased! Your new friends are on their way.
            </Alert>
          </Snackbar>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
