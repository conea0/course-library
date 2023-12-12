import buttonStyle from "./button.module.css"

export const Button = ({text}: {text: string}) => {
    return (
      <div>
        <span className={buttonStyle.button}>{text}</span>
      </div>
    );
  }
  