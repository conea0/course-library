import SidebarStyle from './sidebar.module.css';
import Image from 'next/image'

export const Sidebar = (props: { sidebar: any[]; }) => {
    return (
        <div className={SidebarStyle.sidebar}>
            {props.sidebar.map((item) => {
                return (
                    <a href="#" className={item.active}>
                        <Image className={SidebarStyle.icon} src={item.path} alt={item.h3}></Image>
                        <h3 className={SidebarStyle.h3}>{item.h3}</h3>
                    </a>
                );
        })}
        </div>
    );
  }
