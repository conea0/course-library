import MyPageStyle from "@/components/MyPage/MyPage.module.css";
import {MyPageListButton} from "@/components/MyPage/MyPageListButton/MyPageListButton";

export const MyPageSection = ({title, sideNumbers, sectionColor}: {
    title: string,
    sideNumbers: string,
    sectionColor: string
}) => {
    return (
        <div className={MyPageStyle.section}>
            <div className={MyPageStyle.above}>
                <div className={MyPageStyle.title} style={{background: sectionColor}}>{title}</div>
                <div className={MyPageStyle.sideNumbers}>{sideNumbers}</div>
            </div>

            <div className={MyPageStyle.list}>
                <MyPageListButton url={"/"} progress={99} part={"Part01"} name={"プログラミング概説"} image={""} />
                <MyPageListButton url={"/"} progress={66} part={"Part01"} name={"プログラミング概説"} image={""} />
                <MyPageListButton url={"/"} progress={33} part={"Part01"} name={"プログラミング概説"} image={""} />
            </div>
        </div>
    )
}