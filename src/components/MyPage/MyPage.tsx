import MyPageStyle from "./MyPage.module.css";
import {Heading} from "@/components/heading/heading";
import {ListButton} from "@/components/ListButton/ListButton";

export const MyPage = () => {
    return (
        <div className={MyPageStyle.wrapper}>
            <div className={MyPageStyle.section}>
                <Heading subtitle={"try again"}>学習を続ける</Heading>
                <div className={MyPageStyle.list}>
                    <ListButton url={"/"}>Unit1</ListButton>
                    <ListButton url={"/"}>Unit2</ListButton>
                    <ListButton url={"/"}>Unit3</ListButton>
                </div>
            </div>
            <div className={MyPageStyle.section}>
                <Heading subtitle={"retry"}>以前に間違えた問題</Heading>
                <div className={MyPageStyle.list}>
                    <ListButton url={"/"}>Unit1</ListButton>
                    <ListButton url={"/"}>Unit2</ListButton>
                    <ListButton url={"/"}>Unit3</ListButton>
                </div>
            </div>
        </div>
    )
}
