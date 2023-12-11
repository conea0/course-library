import rightButtonsStyle from './rightButtons.module.css';
import Image from 'next/image'

export const RightButtons = (props: { buttons: any[]; }) => {
    return (
        <div className={rightButtonsStyle.buttons}>
            <ul>
            {props.buttons.map((item) => {
                return (
                    <li>
                        <Image className={rightButtonsStyle.icon} src={item.path} alt={item.text}></Image>
                        <span>{item.text}</span>
                    </li>
                );
            })}
            </ul>
        </div>
    );
  }
