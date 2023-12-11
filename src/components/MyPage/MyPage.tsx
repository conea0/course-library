import MyPageStyle from "./MyPage.module.css";
import {MyPageSection} from "@/components/MyPage/MyPageSection";
import {Heading} from "@/components/heading/heading";

export const MyPage = async () => {

    // const data = await fetch("https://jsonplaceholder.typicode.com/todos/21", {}).then(value => value.json())
    const sections: { [title: string]: { sideNumbers: string, color: string } } = {
        "学習を続ける": {sideNumbers: "99.999%", color: "#68B07C"},
        "以前に間違えた問題": {sideNumbers: "99.999%", color: "#DD726B"},
    }

    return (
        <div className={MyPageStyle.pageWrapper}>
            <Heading subtitle="mypage">マイページ</Heading>
            <div className={MyPageStyle.sectionsWrapper}>
                {Object.keys(sections).map((section) => {
                    return <MyPageSection key={section} title={section} sideNumbers={sections[section].sideNumbers}
                                          sectionColor={sections[section].color}/>
                })}
            </div>
        </div>
    )
}
