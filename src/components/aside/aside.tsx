import {Logo} from "@/components/aside/logo/logo";
import {Sidebar} from "@/components/aside/sidebar/sidebar";
import AsideStyle from './aside.module.css';
import CodeImage from '/public/images/terminal-w.svg';
import SchoolImage from '/public/images/school-w.svg';
import SettingImage from '/public/images/settings-w.svg';
import AccountImage from '/public/images/account-w.svg';
import ProblemImage from '/public/images/view_list-w.svg';
import SidebarStyle from './sidebar/sidebar.module.css';
export const Aside = ()  => {
    const sidebar = [
        {
            path:CodeImage,
            active:SidebarStyle.active,/* ここのactiveの場所をインタラクティブに変更する必要がある */
            h3:"コード",
        },
        {
            path:SchoolImage,
            h3:"コース",
        },
        {
            path:SettingImage,
            h3:"設定",
        },
        {
            path:AccountImage,
            h3:"アカウント",
        },
        {
            path:ProblemImage,
            h3:"問題一覧",
        },
    ]
    return (
        <aside className={AsideStyle.aside}>
            <Logo />
            <Sidebar sidebar={sidebar} />
        </aside>
    )
}
