import Button from '~/components/Button';

import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <div className={cx('wrapper-item')}>
            <Button leftIcon={data.icon} to={data.to} onClick={onClick}>
                {data.title}
            </Button>
        </div>
    );
}

export default MenuItem;
