import MyPageStyle from "./MyPage.module.css";
import {MyPageSection} from "@/components/MyPage/MyPageSection";

export const MyPage = async () => {

    // const data = await fetch("https://jsonplaceholder.typicode.com/todos/21", {}).then(value => value.json())
    const sections: {[title: string]: string} = {
        "学習を続ける": "continue",
        "以前に間違えた問題": "try again",
    }

    return (
        <div className={MyPageStyle.wrapper}>
            {Object.keys(sections).map((section) => {
                return <MyPageSection key={section} title={section} subtitle={sections[section]}/>
            })}
        </div>
    )
}
