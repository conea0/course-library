import ButtonsStyle from './buttons.module.css';
import Image from 'next/image'

export const Buttons = (props: { buttons: any[]; }) => {
    return (
        <div className={ButtonsStyle.buttons}>
            <ul>
            {props.buttons.map((item) => {
                return (
                    <li>
                        <Image className={ButtonsStyle.icon} src={item.path} alt={item.text}></Image>
                        <span>{item.text}</span>
                    </li>
                );
            })}
            </ul>
        </div>
    );
  }
