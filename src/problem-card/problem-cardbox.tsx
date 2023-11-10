import ReactMarkdown from 'react-markdown';
import ProblemCardboxStyle from './problem-cardbox.module.css'

export const ProblemCard = () => {
  const markdownString = `
# 変数ついて理解しよう

## 変数について

プログラムにおける変数とは、値に名前を付ける仕組みです。そして、名前を付けたとき、名前はその値を表すことになります。
#### python

#### x = 1

このように"="でつなぐことで、1という値にxという名前を付けることができます。これを、"変数定義"といいます。

またここで、

#### python

#### print(x)

とすることで1を出力することができます。

## 例

プログラミングでは、変数同士の計算というのが重要になってきます。

例えば、

#### python

#### num1 = 1

#### num2 = 1

print(num1 + num2)

このように書くことで、"1 + 1"を再現することができて、2を出力することができます。

## メッセージ

実際に問題を解いてコツをつかんでみましょう！！！！

  `;

  return <ReactMarkdown className={ProblemCardboxStyle.cardbox}>{markdownString}</ReactMarkdown>;
};
