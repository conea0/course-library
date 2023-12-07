import MyPageStyle from "./MyPage.module.css";
import {Heading} from "@/components/heading/heading";
import {ListButton} from "@/components/ListButton/ListButton";

export const MyPage = () => {
    return (
        <div className={MyPageStyle.wrapper}>
            <div className={MyPageStyle.learn}>
                <Heading subtitle={"try again"}>学習を続ける</Heading>
                <div className={MyPageStyle.learnButton}>

                </div>
            </div>
            <div className={MyPageStyle.retry}>
                <Heading subtitle={"retry"}>以前に間違えた問題</Heading>
                <div className={MyPageStyle.retryButton}>

                </div>
            </div>
        </div>
    )
}
