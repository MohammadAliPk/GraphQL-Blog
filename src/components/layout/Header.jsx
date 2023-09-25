import React from 'react';
import { AppBar, Toolbar , IconButton, Typography , Container } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
const Header = () => {
    return (
        <AppBar position="static">
            <Container maxWidth='lg'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} flex={1}>
            وبلاگ محمد علی
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <BookIcon />
          </IconButton>
        </Toolbar>
        </Container>
      </AppBar>
    );
};

export default Header;