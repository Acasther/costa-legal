import './Immigration.css';
import { Banner } from '../../components';
import immigrationBackground from '../../assets/images/immigration.jpg';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Immigration = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <>
    <Banner bannerImage={immigrationBackground} title={t("home.immigration.title")} />
    <div className='immigration-summary'>
      <Typography variant='h2'>{t("immigration.titleCR")}</Typography>
      <Typography variant='body1'></Typography>
    </div>
    </>
  )
}

export default Immigration;