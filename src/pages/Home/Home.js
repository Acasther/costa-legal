import './Home.css';
import homeBackground from '../../assets/playa_lagosta.jpg';
import immigrationBackground from '../../assets/immigration.jpg';
import realEstateBackground from '../../assets/real_estate.jpg';
import insuranceBackground from '../../assets/insurance.jpg';
import accountingBackground from '../../assets/accounting.jpg';
import logo from '../../assets/costa_white_logo.png';
import { Button, Grid, IconButton, Stack, TextField, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <>
    <div className="banner" style={{ backgroundImage:`url(${homeBackground})` }}>
      <div className='welcome'>
        {t("home.welcome")}
        <div className='banner-btn'>
          <Button size='large'>{t("home.welcomeBtn")}</Button>
        </div>
      </div>
    </div>


    <div className='about-us'>
      <Typography variant='h2' sx={{ paddingBottom: 1 }}>{t("home.aboutUs.title")}</Typography>
      <span className='divider' style={{ marginBottom: 15 }}></span>
      <Typography variant='body1'>{t("home.aboutUs.description")}</Typography>
    </div>


    <div className='services'>
      
      <Typography variant='h2' sx={{ textAlign: 'center', paddingBottom: 1 }}>{t("common.services")}</Typography>
      <span className='divider' style={{ marginBottom: 45 }}></span>
      {/* Immigration Service */}
      <div className='service-background' style={{ backgroundImage:`url(${immigrationBackground})` }}>
        <Typography variant='h2' sx={{ paddingTop: 5}}>{t("home.immigration.title")}</Typography>

        <Typography variant='body1' sx={{ paddingTop: 3, paddingRight: 30, paddingBottom: 5}}>{t("home.immigration.description")}</Typography>

        <div className='banner-btn'>
          <Button sx={{ textTransform: 'none'}}>{t("common.readMore")}</Button>
        </div>
      </div>

      {/* Real Estate Service */}
      <div className='service-background real-estate' style={{ backgroundImage:`url(${realEstateBackground})` }}>
        <Typography variant='h2' sx={{ paddingTop: 5}}>{t("home.realEstate.title")}</Typography>

        <Typography variant='body1' sx={{ paddingTop: 3, paddingRight: 30, paddingBottom: 5}}>{t("home.realEstate.description")}</Typography>

        <div className='banner-btn'>
          <Button sx={{ textTransform: 'none'}}>{t("common.readMore")}</Button>
        </div>
      </div>

      {/* Insurance Service */}
      <div className='service-background' style={{ backgroundImage:`url(${insuranceBackground})` }}>
        <Typography variant='h2' sx={{ paddingTop: 5}}>{t("home.insurance.title")}</Typography>

        <Typography variant='body1' sx={{ paddingTop: 3, paddingRight: 30, paddingBottom: 5}}>{t("home.insurance.description")}</Typography>

        <div className='banner-btn'>
          <Button sx={{ textTransform: 'none'}}>{t("common.readMore")}</Button>
        </div>
      </div>

    </div>


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
            <Typography variant='h3' sx={{ color: '#99A7CA'}}>{t("contact.phone")}</Typography>
            <Typography variant='body1' sx={{ paddingBottom: 7}}>(506) 8390-8070</Typography>

            <Typography variant='h3' sx={{ color: '#99A7CA'}}>{t("contact.email")}</Typography>
            <Typography variant='body1' sx={{ paddingBottom: 7}}>info@costafirm.com</Typography>

            <Typography variant='h3' sx={{ color: '#99A7CA'}}>{t("contact.social")}</Typography>
            <Grid container spacing={{ sm: 3, lg: 0.5 }}>
              <Grid item xs={6} sm={1} sx={{ textAlign: { xs: 'end'}}}>
                <IconButton size='small' color='inherit'>
                  <InstagramIcon />
                </IconButton>
              </Grid>
              <Grid item xs={6} sm={1} sx={{ textAlign: { xs: 'start'}}}>
                <IconButton size='small' color='inherit'>
                  <FacebookIcon />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
    </>
  )
}

export default Home;