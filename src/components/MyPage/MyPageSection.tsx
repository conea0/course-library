import MyPageStyle from "@/components/MyPage/MyPage.module.css";
import {MyPageListButton, ProblemLinkProps} from "@/components/MyPage/MyPageListButton/MyPageListButton";

export const MyPageSection = ({title, sideNumbers, sectionColor, listItems}: {
    title: string,
    sideNumbers: string,
    sectionColor: string,
    listItems: ProblemLinkProps[]
}) => {
    return (
        <div className={MyPageStyle.section}>
            <div className={MyPageStyle.above}>
                <div className={MyPageStyle.title} style={{background: sectionColor}}>{title}</div>
                <div className={MyPageStyle.sideNumbers}>{sideNumbers}</div>
            </div>

            <div className={MyPageStyle.list}>
                {listItems.map((item, index) => {
                    return <MyPageListButton {...item} index={index + 1} key={index}/>
                })}
            </div>
        </div>
    )
}