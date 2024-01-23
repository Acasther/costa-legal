import './Home.css';
import homeBackground from '../../assets/playa_lagosta.jpg';
import immigrationBackground from '../../assets/immigration.jpg';
import realEstateBackground from '../../assets/real_estate.jpg';
import insuranceBackground from '../../assets/insurance.jpg';
import { Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <>
    <div className="banner" style={{ backgroundImage:`url(${homeBackground})` }}>
      <div className='welcome'>
        <Typography variant='h1'>{t("home.welcome")}</Typography>
        <div className='banner-btn'>
          <Button size='large' sx={{ textTransform: 'none'}}>{t("home.welcomeBtn")}</Button>
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
    </>
  )
}

export default Home;