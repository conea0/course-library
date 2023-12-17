import { Button } from '@/components/button/button';
import pageChangeButtonStyle from "./pageChangeButton.module.css"

export const PageChangeButton = () => {
    return (
      <div className={pageChangeButtonStyle.pageChangeButton}>
        <Button text='＜前の問題' />
        <Button text='＞次の問題' />
      </div>
    );
  }
  