import './Navbar.css';
import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Select, FormControl, Stack, Link, Fade, useMediaQuery, useTheme, Box, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/costa_logo_white.png';
import { Sidebar } from '../Sidebar/Sidebar';
import { KeyboardArrowDown } from '@mui/icons-material';

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
    "name": "English - Inglés"
  },
  {
    "id": "es",
    "name": "Español - Spanish"
  }
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [lang, setLang] = useState('es');

  const theme = useTheme({
    breakpoints: {
      values: {
        lg: 1000
      },
    }
  });
  console.log('theme', theme);
  console.log('language', lang);

  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const handleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  const changeBackground = () => {
    window.scrollY >= 80 ? setNavbarScrolled('true') : setNavbarScrolled(false)
  }

  const renderLangOption = (selectedLang) => {
    const selectedLanguageObj = languages.find(item => item.id === selectedLang);
    return selectedLanguageObj.name.substring(0, 2).toUpperCase();
  }

  const changeLanguage = (event) => {
    console.log('Clicked language button', event);
    setLang((prev) => prev = event.target.value);
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
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <Select sx={{ fontSize: '22px', fontWeight: 600, color: 'white', fill: 'white' }} defaultValue={lang} value={lang} IconComponent={KeyboardArrowDown}
            onChange={(e, newValue) => { if(newValue) changeLanguage(e) }} className='language-button' renderValue={renderLangOption}>
            {languages.map((language) => (
              <MenuItem sx={{ fontWeight: lang === language.id ? 600 : 400, fontSize: '22px'}} value={language.id} key={language.id}>{language.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
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