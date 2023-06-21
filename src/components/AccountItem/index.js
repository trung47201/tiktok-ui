import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <li>
            <span className={cx('search-account-img')}>
                <img
                    src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/b0fe59f2704735f3304d3ee6fab34582~c5_300x300.webp?x-expires=1687518000&x-signature=%2BhWi9cWgcNO5YF%2B5jo81JCT%2FJeM%3D"
                    alt="avt"
                />
            </span>
            <div className={cx('line-li')}>
                <div className={cx('line-li-top')}>
                    <div className={cx('line-li-top-name')}>
                        <h4>roses_are_rosie</h4>
                    </div>
                    <img src={images.accReal} alt="real" />
                </div>
                <p>ROSÉ</p>
            </div>
        </li>
    );
}

export default AccountItem;
