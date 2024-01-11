import './Navbar.css';
import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Stack, Link, Fade, useMediaQuery, useTheme, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/costa_logo_white.png';
import { Sidebar } from '../Sidebar/Sidebar';

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
    "name": "Contact Us",
    "link": "/contact"
  }
];

const languages = [
  {
    "id": "en",
    "name": "English"
  },
  {
    "id": "es",
    "name": "Spanish"
  }
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  const theme = useTheme({
    breakpoints: {
      values: {
        lg: 1000
      },
    }
  });
  console.log('theme', theme);
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const handleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  const changeBackground = () => {
    window.scrollY >= 80 ? setNavbarScrolled('true') : setNavbarScrolled(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
  }, window.removeEventListener("scroll", changeBackground))

  useEffect(() => {
    menuOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
  }, [menuOpen]);

  const AppMenu =() => {
    return (
    isMobile ? (
      <>
      <div className='navbar-icon-btn'>
        <IconButton className='navbar-icon' aria-label='menu' size='large' color='inherit' onClick={handleMenu}>
          {menuOpen ? ( <CloseIcon /> ) : ( <MenuIcon /> )}
        </IconButton>
      </div>
      <Fade in={menuOpen}>
        <Box sx={{ zIndex: 1}}>
          <Sidebar pages={pages} languages={languages} />
        </Box>
      </Fade>
      </>
    ) : (
      <Stack direction='row' spacing={2} className='menuStack'> 
        {pages.map((page) => (
          <Link href={page.link} underline="none" className='menuItem' color='inherit' 
            sx={{ color: page.active ? navbarScrolled ? '#6695fa' : 'black' : '#fff', transition: 'color 0.3s ease-in-out' }} key={page.name}>
            {page.name}
          </Link>
        ))}
      </Stack>
    ));
  }

  return (
    <AppBar position='sticky' color='transparent' style={{ background: navbarScrolled ? 'black' : 'transparent', boxShadow: 'none', transition: 'background 0.3s ease-in-out'}}>
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