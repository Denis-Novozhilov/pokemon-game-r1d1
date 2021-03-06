import { useHistory } from 'react-router-dom';

import s from './style.module.css';

const Header = ({ title, children, onClickButton }) => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/game');
    }

    return (
        <header className={s.root}>
            <div className={s.forest}></div>
            <div className={s.silhouette}></div>
            <div className={s.moon}></div>
            <div className={s.container}>
                
                {title && <h1>{title}</h1>}
                
                {children}

                <button className={s.gameBtn} onClick={handleClick}>
                    <code>Start Game</code>
                </button>
                
            </div>
        </header>
    );
};

export default Header;