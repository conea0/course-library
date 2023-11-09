import SidebarStyle from './sidebar.module.css';
import Image from 'next/image'
import CodeImage from '/public/imags/terminal-w.svg';
import SchoolImag from '/public/imags/school-w.svg';
import SettingImage from '/public/imags/settings-w.svg';
import AccountImage from '/public/imags/account-w.svg';
import ProblemImage from '/public/imags/view_list-w.svg';

function Sidebar() {
    return (
        <div className={SidebarStyle.sidebar}>
            <a href="#">
                <Image className={SidebarStyle.icon} src={CodeImage} alt="code"></Image>
                <h3 className={SidebarStyle.h3}>コード</h3>
            </a>
            <a href="#" className={SidebarStyle.active}>
                <Image className={SidebarStyle.icon} src={SchoolImag} alt="school"></Image>
                <h3 className={SidebarStyle.h3}>コース</h3>
            </a>
            <a href="#">
                <Image className={SidebarStyle.icon} src={SettingImage} alt="setting"></Image>
                <h3 className={SidebarStyle.h3}>設定</h3>
            </a>
            <a href="#">
                <Image className={SidebarStyle.icon} src={AccountImage} alt="account"></Image>
                <h3 className={SidebarStyle.h3}>アカウント</h3>
            </a>
            <a href="#">
                <Image className={SidebarStyle.icon} src={ProblemImage} alt="problem"></Image>
                <h3 className={SidebarStyle.h3}>問題一覧</h3>
            </a>
        </div>
    );
  }

export default Sidebar;
