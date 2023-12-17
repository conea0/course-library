import MyPageListButtonStyle from './MyPageListButton.module.css';
import Link from "next/link";
import {ProgressBar} from "@/components/ProgressBar/ProgressBar";

export const MyPageListButton = ({url, progress, image, part, name}: {
    url: string,
    progress: number,
    image: string,
    part: string,
    name: string
}) => {
    return (
        <Link href={url} className={MyPageListButtonStyle.wrapper}>
            <div className={MyPageListButtonStyle.left}>
                <span>1</span>
            </div>
            <div className={MyPageListButtonStyle.center}>
                <div className={MyPageListButtonStyle.part}>{part}</div>
                <div className={MyPageListButtonStyle.name}>{name}</div>
            </div>
            <div className={MyPageListButtonStyle.right}>
                <p>{progress}%</p>
                <ProgressBar progress={progress} />
            </div>
        </Link>
    )
}