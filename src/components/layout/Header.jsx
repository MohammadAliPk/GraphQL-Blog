import React from 'react';
import { AppBar, Toolbar , IconButton, Typography , Container } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <AppBar position="static">
            <Container maxWidth='lg'>
        <Toolbar>
          <Typography variant="h6" component="div" fontWeight="500" sx={{ flexGrow: 1 }} flex={1}>
            <Link to="/" style={{textDecoration: "none" , color:"#fff"}}>
            وبلاگ محمد علی
            </Link>
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link to="/" style={{textDecoration: "none" , color:"#fff"}}>
            <BookIcon />
            </Link>
          </IconButton>
        </Toolbar>
        </Container>
      </AppBar>
    );
};

export default Header;