import LogoStyle from './logo.module.css';
function Logo() {
    return (
      <div className={LogoStyle.logo}>
        <img src="/logo.png" alt=""></img>
      </div>
    );
  }
  
export default Logo;