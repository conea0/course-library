import MyPageListButtonStyle from './MyPageListButton.module.css';
import Link from "next/link";
import {ProgressBar} from "@/components/ProgressBar/ProgressBar";

// ProblemLinkPropsにindexを追加したものを受け取る
export const MyPageListButton = ({url, progress, partName, unitName, index}: ProblemLinkProps & { index: number }) => {
    return (
        <Link href={url} className={MyPageListButtonStyle.wrapper}>
            <div className={MyPageListButtonStyle.left}>
                <span>{index}</span>
            </div>
            <div className={MyPageListButtonStyle.center}>
                <div className={MyPageListButtonStyle.part}>{partName}</div>
                <div className={MyPageListButtonStyle.name}>{unitName}</div>
            </div>
            <div className={MyPageListButtonStyle.right}>
                <p>{progress}%</p>
                <ProgressBar progress={progress}/>
            </div>
        </Link>
    )
}

export interface ProblemLinkProps {
    url: string,
    progress: number,
    partName: string,
    unitName: string
}