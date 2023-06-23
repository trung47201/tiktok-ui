import classNames from 'classnames/bind';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightToBracket,
    faCircleQuestion,
    faCircleXmark,
    faCloudArrowUp,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faPlus,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import styles from './Header.module.scss';
import Tippy from '@tippyjs/react/headless';
import TippyTitle from '@tippyjs/react';
import { useEffect, useState } from 'react';
import AccountItem from '~/components/AccountItem';
import 'tippy.js/dist/tippy.css';
import Menu from '~/components/Popper/Menu';
import Button from '~/components/Button';
import { faBookmark, faMessage, faPaperPlane, faUser } from '@fortawesome/free-regular-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const MENU_WITH_USER = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@dtt',
    },
    {
        icon: <FontAwesomeIcon icon={faBookmark} />,
        title: 'Favorites',
        to: '/favorite',
    },
    {
        icon: <FontAwesomeIcon icon={faTiktok} />,
        title: 'Get Coins',
        to: '/get-coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
        title: 'Logout',
        to: '/logout',
        separate: true,
    },
];

const currentUser = true;

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        //console.log(searchResult);
        setTimeout(() => {
            setSearchResult([1, 2, 2]);
        }, 2000);
    }, []);

    const handleMenuChange = (items) => {
        switch (items.type) {
            case 'language':
                console.log(items);
                break;
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo" />
                </div>
                <div>
                    <Tippy
                        interactive
                        render={(attrs) => (
                            <PopperWrapper>
                                <div className={cx('search-box')} tabIndex="-1" {...attrs}>
                                    <div className={cx('search-box-header')}>You may like</div>
                                    <ul className={cx('list-key-search')}>
                                        <li>
                                            <img src={images.trending} alt="trending" />
                                            <h4>HERO TEAM</h4>
                                        </li>
                                        <li>
                                            <img src={images.hot} alt="trending" />
                                            <h4>HERO TEAM</h4>
                                        </li>
                                        <li>
                                            <img src={images.trending} alt="trending" />
                                            <h4>HERO TEAM</h4>
                                        </li>
                                        <li>
                                            <div className={cx('wrapper-normal-info')}>
                                                <div className={cx('normal-info')}></div>
                                            </div>
                                            <h4>HERO TEAM</h4>
                                        </li>
                                    </ul>
                                    <div className={cx('search-box-header')}>Accounts</div>
                                    <ul className={cx('list-account-search')}>
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                    </ul>
                                </div>
                            </PopperWrapper>
                        )}
                    >
                        <div className={cx('search-form')}>
                            <input className={cx('search')} placeholder="Search" spellCheck="false" />
                            <button className={cx('search-clear')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                            <TippyTitle content="Tìm kiếm">
                                <button className={cx('search-btn')}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </TippyTitle>
                        </div>
                    </Tippy>
                </div>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <TippyTitle content="Upload video">
                                <buton className={cx('actions-icon')}>
                                    <FontAwesomeIcon icon={faCloudArrowUp} />
                                </buton>
                            </TippyTitle>
                            <TippyTitle content="Message">
                                <buton className={cx('actions-icon')}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </buton>
                            </TippyTitle>
                            <TippyTitle content="Inbox">
                                <buton className={cx('actions-icon')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </buton>
                            </TippyTitle>

                            <Menu items={MENU_WITH_USER} onChange={handleMenuChange}>
                                <button className={cx('menu')}>
                                    <img
                                        className={cx('avatar')}
                                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a27df9b7561521f9437f6906022e037f~c5_100x100.jpeg?x-expires=1687672800&x-signature=WxZit0cagnSROZ6LbTIB%2B5cxKd0%3D"
                                        alt="avatar-menu"
                                    />
                                </button>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button outline leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Button primary>Log in</Button>

                            <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                                <button className={cx('menu')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
