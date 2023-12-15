import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, IconButton, Stack, Link } from '@mui/material';
import logo from '../../assets/costa_logo_white.png';
import './Navbar.css';
import { Navigate } from 'react-router-dom';

const pages = [
  {
    "name": "Home",
    "link": "/",
    "active": true
  },
  {
    "name": "Immigration",
    "link": "/immigration"
  },
  {
    "name": "Real Estate",
    "link": "/real-estate"
  },
  {
    "name": "Insurance",
    "link": "/insurance"
  },
  {
    "name": "Accounting",
    "link": "/accounting"
  },
  {
    "name": "Contact Us",
    "link": "/contact"
  }
];

const Navbar = () => {
  console.log('Pages,', pages);

  const [width, setWidth] = useState(0)
  
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    
    window.addEventListener("resize", handleResize)
    
    handleResize()
    
    return () => { 
      window.removeEventListener("resize", handleResize)
    }
  }, [setWidth])

  const AppMenu =() => {
    if (width > 800) {
      return (
        <Stack direction='row' spacing={2}> 
          {pages.map((page) => (
            <Link href={page.link}underline="none" color='inherit' className='menuItem' sx={{ color: page.active ? 'black' : '#fff' }} key={page.name}>
              {page.name}
            </Link>
          ))}
        </Stack>
      );
    }
    return ( <></> );
  }

  return (
    <AppBar color='transparent' style={{ background: 'transparent', boxShadow: 'none'}}>
      <Toolbar>
        <div style={{ flexGrow: 1}} className='icon'>
          <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
            <img src={logo} alt="logo" className='navbar-logo' />
          </IconButton>
        </div>
        <AppMenu />
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;