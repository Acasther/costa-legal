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

const Home = () => {
  return (
    <>
    <div className="banner" style={{ backgroundImage:`url(${homeBackground})` }}>
      <div className='welcome'>
        Your legal guide to a brighter future in Costa Rica and beyond
        <div className='banner-btn'>
          <Button size='large'>Book a free consultation</Button>
        </div>
      </div>
    </div>


    <div className='about-us'>
      <Typography variant='h2' sx={{ paddingBottom: 1 }}>About Our Firm</Typography>
      <span className='divider' style={{ marginBottom: 15 }}></span>
      <Typography variant='body1'>
        At Costa Law Firm we will deliver personalized legal services, with a team of bilingual lawyers who are 
        dedicated to guiding clients through the complexities of Costa Rican law, including immigration, 
        real estate, business, and commercial matters.
      </Typography>
    </div>


    <div className='services'>
      
      <Typography variant='h2' sx={{ textAlign: 'center', paddingBottom: 1 }}>Our Services</Typography>
      <span className='divider' style={{ marginBottom: 45 }}></span>
      {/* Immigration Service */}
      <div className='service-background' style={{ backgroundImage:`url(${immigrationBackground})` }}>
        <Typography variant='h2' sx={{ paddingTop: 5}}>Immigration</Typography>

        <Typography variant='body1' sx={{ paddingTop: 3, paddingRight: 30, paddingBottom: 5}}>
          Costa Law Firm specializes in immigration law and offers personalized services for individuals and businesses. 
          We help clients with visa applications, work permits, residency applications, and citizenship. 
        </Typography>

        <div className='banner-btn'>
          <Button sx={{ textTransform: 'none'}}>Read More</Button>
        </div>
      </div>

      {/* Real Estate Service */}
      <div className='service-background real-estate' style={{ backgroundImage:`url(${realEstateBackground})` }}>
        <Typography variant='h2' sx={{ paddingTop: 5}}>Real Estate</Typography>

        <Typography variant='body1' sx={{ paddingTop: 3, paddingRight: 30, paddingBottom: 5}}>
          Our legal team provides comprehensive real estate legal services to clients looking to buy, sell, or invest in property in Costa Rica. 
          We offer personalized legal guidance and support to ensure a smooth and successful transaction. 
        </Typography>

        <div className='banner-btn'>
          <Button sx={{ textTransform: 'none'}}>Read More</Button>
        </div>
      </div>

      {/* Insurance Service */}
      <div className='service-background' style={{ backgroundImage:`url(${insuranceBackground})` }}>
        <Typography variant='h2' sx={{ paddingTop: 5}}>Insurance</Typography>

        <Typography variant='body1' sx={{ paddingTop: 3, paddingRight: 30, paddingBottom: 5}}>
          We offer insurance services in Costa Rica, providing comprehensive coverage to protect you and your assets. Our team of experienced 
          insurance professionals works with top insurance providers to offer a range of insurance options, including health, property, liability, and more.
        </Typography>

        <div className='banner-btn'>
          <Button sx={{ textTransform: 'none'}}>Read More</Button>
        </div>
      </div>

    </div>


    <div className='contact'>
      <Grid container spacing={2} direction={{xs: 'column', sm: 'row'}} 
        sx={{ 
          marginLeft: {
            xs: 0
          }
        }}>
        {/* Contact Grid */}
        <Grid xs={8} className='contact-form' direction='row'>
          <Typography variant='h2'>Get in Touch</Typography>
          <Stack spacing={3}>
            <TextField required color='info' sx={{ background: '#e6e6e6', width: `500px`, marginTop: 2, accentColor: '#99A7CA' }} label='Name' variant='filled' size='medium' />
            <TextField required sx={{ background: '#e6e6e6', width: `500px`, marginTop: 2, accentColor: '#99A7CA' }} label='Email' variant='filled' size='medium' />
            <TextField required 
              sx={{ background: '#e6e6e6', width: `500px`, marginTop: 2, accentColor: '#99A7CA' }} 
              label='Message' variant='filled' size='medium' multiline={true} minRows={6} />
            <div className='submit-btn'>
              <Button sx={{ textTransform: 'none', width: 130}}>Submit</Button>
            </div>
          </Stack>
        </Grid>

        {/* Info Grid */}
        <Grid xs={12} sm={4}>
          <div className='contact-info'>
            <img src={logo} alt="logo" className='contact-logo' />
            <Typography variant='h3' sx={{ color: '#99A7CA'}}>Phone</Typography>
            <Typography variant='body1' sx={{ paddingBottom: 7}}>(506) 8390-8070</Typography>

            <Typography variant='h3' sx={{ color: '#99A7CA'}}>Email</Typography>
            <Typography variant='body1' sx={{ paddingBottom: 7}}>info@costafirm.com</Typography>

            <Typography variant='h3' sx={{ color: '#99A7CA'}}>Social</Typography>
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