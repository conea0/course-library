import {Logo} from "@/components/aside/logo/logo";
import {Sidebar} from "@/components/aside/sidebar/sidebar";
import AsideStyle from './aside.module.css';

export const Aside = ()  => {
    return (
        <aside className={AsideStyle.aside}>
            <Logo />
            <Sidebar />
        </aside>
    )
}
