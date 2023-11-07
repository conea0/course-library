import HeadingStyle from './heading.module.css';
import {ReactNode} from "react";

const Heading = ({children, subtitle}: {children: ReactNode, subtitle: string}) => {
    return (
        <div className={HeadingStyle.wrapper}>
            <p className={HeadingStyle.subtitle}>{subtitle}</p>
            <h1 className={HeadingStyle.title}>{children}</h1>
        </div>
    )
}
export default Heading;