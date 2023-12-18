import MyPageStyle from "./MyPage.module.css";
import {MyPageSection} from "@/components/MyPage/MyPageSection";
import {Heading} from "@/components/heading/heading";
import {ProblemLinkProps} from "@/components/MyPage/MyPageListButton/MyPageListButton";

export const MyPage = async () => {

    // 実際の実装は次のようになるであろう
    // const invalidProblems = await getAllInvalidProblems(1)
    // const nextProblem = await getNextProblem(1)

    // 仮データ
    // const invalidProblems: problemProps[] = [
    //     {
    //         part: 1,
    //         unit: 1,
    //         id: 1,
    //     },
    //     {
    //         part: 2,
    //         unit: 2,
    //         id: 2,
    //     },
    // ]
    //
    // const nextProblem: problemProps = {
    //     part: 3,
    //     unit: 3,
    //     id: 3,
    // }

    // Listの要素を表す変数
    // const listItems = invalidProblems.map((problem) => {

    const sections: { title: string, sideNumbers: string, sectionColor: string, listItems: ProblemLinkProps[] }[] = [
        {
            title: "学習を続ける",
            sideNumbers: "99.999%",
            sectionColor: "#68B07C",
            // ここはAPIが確立したら手を加える仮データ
            listItems: [
                {
                    url: "/",
                    progress: 4,
                    partName: "ぷるグラマーへの道",
                    unitName: "タイポとは?"
                },
                {
                    url: "/",
                    progress: 2,
                    partName: "やさしいプログラミング",
                    unitName: "機械語を学ぼう"
                },
                {
                    url: "/",
                    progress: 64,
                    partName: "中国的历史",
                    unitName: "文化大革命和四人帮"
                },
            ]
        },
        {
            title: "以前に間違えた問題",
            sideNumbers: "99.999%",
            sectionColor: "#DD726B",
            // これも仮データ
            listItems: [
                {
                    url: "/",
                    progress: 0,
                    partName: "历史教養語録",
                    unitName: "独立行政法人はろくなものがない"
                },
                {
                    url: "/",
                    progress: 0,
                    partName: "ずんだもんと学ぶシリーズ",
                    unitName: "ずんだもんと学ぶリーマン予想"
                },
                {
                    url: "/",
                    progress: 10,
                    partName: "マネジメント入門",
                    unitName: "プロジェクトが燃えてしまったら?"
                },
            ]
        },
    ]

    return (
        <div className={MyPageStyle.pageWrapper}>
            <Heading subtitle="mypage">マイページ</Heading>
            <div className={MyPageStyle.sectionsWrapper}>
                {sections.map((section) => {
                    return <MyPageSection key={section.title} {...section}/>
                })}
            </div>
        </div>
    )
}
