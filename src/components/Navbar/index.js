import cn from 'classnames';
import s from './style.module.css';

const Navbar = ({ isOpen, bgActive = false, onClickHamburg }) => {

    return (
        <nav id={s.navbar} className={cn(s.root, {
            [s.bgActive]: bgActive
        })}>

            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <div className={cn(s.menuButton, {
                     [s.active]: isOpen
                     })}
                     onClick={onClickHamburg}
                >
                    <span></span>
                </div>
            </div>
        </nav>
    );

};

export default Navbar;