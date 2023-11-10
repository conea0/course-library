import Image from 'next/image'
import LogoStyle from './logo.module.css';
import LogoImage from '/public/images/logo.png';

export const Logo = () => {
    return (
      <div className={LogoStyle.logo}>
        <Image
        src={LogoImage}
        alt='Logo'  
        />
      </div>
    );
  }
  