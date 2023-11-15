import {ReactNode} from "react";
import Link from "next/link";
import ListButtonStyle from "./ListButton.module.css";

export const ListButton = ({children, url}: {children: ReactNode, url: string}) => {
    return (
        <div className={ListButtonStyle.wrapper}>
            <Link href={url} className={ListButtonStyle.text}>
                {children}
            </Link>
        </div>
    )
}
