import './Sidebar.css';
import React, { useState } from 'react';
import { Stack, Link, NativeSelect } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Sidebar = ((props) => {
  const {pages, languages} = props;
  const [lang, setLang] = useState();

  const changeLanguage = (event) => {
    console.log('Change language', event.target.value);
    setLang(event.target.value);
  }

  return (
    <div className='sidebar-container'>
      <Stack direction='column' spacing={4} className='sidebar-stack'> 
        {pages.map((page) => (
          <Link href={page.link} underline="none" className='menuItem' color='inherit' sx={{ color: page.active ? '#6695fa' : '#fff' }} key={page.name}>
            {page.name}
          </Link>
        ))}
      </Stack>
      <div className='lang-dropdown-container'>
        <NativeSelect className='lang-dropdown' IconComponent={KeyboardArrowDownIcon} defaultValue='English' value={lang} onChange={changeLanguage}>
          {languages.map((language) => (
            <option value={language.id} style={{color: 'black'}}>{language.name}</option>
          ))}
        </NativeSelect>
      </div>
    </div>
  )
});
