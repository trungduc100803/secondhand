

import './Button.css'

function Button({ text, outline, onClick }) {
    return <div onClick={onClick} className={`button ${outline}`}>
        <span>{text}</span>
    </div>
}

export default Button;