import MyPageStyle from "@/components/MyPage/MyPage.module.css";
import {Heading} from "@/components/heading/heading";
import {ListButton} from "@/components/ListButton/ListButton";

export const MyPageSection = ({title, subtitle}: {title: string, subtitle: string}) => {
    return (
        <div className={MyPageStyle.section}>
            <Heading subtitle={subtitle}>{title}</Heading>
            <div className={MyPageStyle.list}>
                <ListButton url={"/"}>Unit1</ListButton>
                <ListButton url={"/"}>Unit2</ListButton>
                <ListButton url={"/"}>Unit3</ListButton>
            </div>
        </div>
    )
}