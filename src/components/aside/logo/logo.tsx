import Image from 'next/image'
import LogoStyle from './logo.module.css';
import LogoImage from '/public/imags/logo.png';

function Logo() {
    return (
      <div className={LogoStyle.logo}>
        <Image
        src={LogoImage}
        alt='Logo'  
        />
      </div>
    );
  }
  
export default Logo;