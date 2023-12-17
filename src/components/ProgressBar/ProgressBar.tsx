import ProgressBarStyle from './ProgressBar.module.css';

export const ProgressBar = ({progress}: { progress: number }) => {
    // 0 ~ 100でprogressを受け取ります
    return (
        <div className={ProgressBarStyle.wrapper}>
            <div className={ProgressBarStyle.progress} style={{width: `${progress}%`}}></div>
        </div>
    )
}