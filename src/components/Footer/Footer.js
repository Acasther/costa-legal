import React from 'react';
import logo from '../../assets/logos/costa_white_logo.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Button, Grid, IconButton, Stack, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className='contact'>
      <Grid container spacing={2} direction={{xs: 'column', sm: 'row'}} className='contact-grid' sx={{ marginLeft: { xs: 0 }}}>
        {/* Contact Grid */}
        <Grid item xs={8} className='contact-form' direction='row'>
          <Typography variant='h2'>{t("common.getInTouch")}</Typography>
          <Stack spacing={3}>
            <TextField required color='info' sx={{ background: '#e6e6e6', width: `500px`, marginTop: 2, accentColor: '#99A7CA' }} label='Name' variant='filled' size='medium' />
            <TextField required sx={{ background: '#e6e6e6', width: `500px`, marginTop: 2, accentColor: '#99A7CA' }} label='Email' variant='filled' size='medium' />
            <TextField required 
              sx={{ background: '#e6e6e6', width: `500px`, marginTop: 2, accentColor: '#99A7CA' }} 
              label='Message' variant='filled' size='medium' multiline={true} minRows={6} />
            <div className='submit-btn'>
              <Button sx={{ textTransform: 'none', width: 130}}>{t("common.submit")}</Button>
            </div>
          </Stack>
        </Grid>

        {/* Info Grid */}
        <Grid item xs={12} sm={4}>
          <div className='contact-info'>
            <img src={logo} alt="logo" className='contact-logo' />
            <Typography variant='h3' sx={{ color: '#99A7CA', fontSize: '34px'}}>{t("contact.phone")}</Typography>
            <Typography variant='body1' sx={{ paddingBottom: 7}}>+506 8390-8070</Typography>

            <Typography variant='h3' sx={{ color: '#99A7CA', fontSize: '34px'}}>{t("contact.email")}</Typography>
            <Typography variant='body1' sx={{ paddingBottom: 7}}>info@costafirm.com</Typography>

            <Typography variant='h3' sx={{ color: '#99A7CA', fontSize: '34px'}}>{t("contact.social")}</Typography>
            <Grid container spacing={{ sm: 3, lg: 0.5 }}>
              <Grid item xs={6} sm={1} sx={{ textAlign: { xs: 'end'}}}>
                <IconButton sx={{ padding: 0 }} size='small' color='inherit'>
                  <InstagramIcon sx={{ fontSize: '1.9rem'}} />
                </IconButton>
              </Grid>
              <Grid item xs={6} sm={1} sx={{ textAlign: { xs: 'start'}}}>
                <IconButton sx={{ padding: 0 }} size='small' color='inherit'>
                  <FacebookIcon sx={{ fontSize: '1.9rem'}} />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer;
